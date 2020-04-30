/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */

import {refCount, publishReplay} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {StorageService} from './storage.service';

@Injectable()
export class ModuleAccessService {

  private _modulesCache$: Observable<Array<any>>;

  constructor(
    private auth: AuthService,
    private api: HttpClient,
    private storage: StorageService
  ) {
  }

  getModules() {
    if (!this._modulesCache$) {
      this._modulesCache$ = this.api.get<Array<any>>('/access').pipe(
        publishReplay(),
        refCount()
      );
    }
    return this._modulesCache$;
  }

  hasAccess(modules: Array<string> | string): Observable<boolean> {
    // if module is set, check for access, allow if no module is present
    //if (modules) {

    return new Observable<boolean>((observer) => {
      this.getModules().subscribe(moduleAccess => {
        AuthService.isAuthenticated(this.storage).then(_ => {
          if (typeof modules === 'string') {
            const module = modules;
            AuthService.user.roles.forEach((role) => {
              if (moduleAccess[module] && moduleAccess[module].roles.indexOf(role) >= 0) {
                observer.next(true);
                observer.complete();
              }
            });
          } else {
            if (!modules || modules.length === 0) {
              observer.next(true);
              observer.complete();
            } else {
              modules.forEach((module) => {
                AuthService.user.roles.forEach((role) => {
                  if (moduleAccess[module] && moduleAccess[module].roles.indexOf(role) >= 0) {
                    observer.next(true);
                    observer.complete();
                  }
                });
              });
            }
          }

        }, _ => {
          observer.next(false);
          observer.complete();
          return;
        });
      });
    });
    //}
  }

}
