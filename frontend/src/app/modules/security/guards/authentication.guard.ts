/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 5:46 PM Braune Digital GmbH
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import {environment} from '../../../../environments/environment';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private storage: StorageService, private translate: TranslateService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise<boolean>((resolve, reject) => {
      AuthService.isAuthenticated(this.storage).then(r => {
        resolve(true);
      }, (e) => {
        this.router.navigate(['/', this.translate.currentLang ? this.translate.currentLang : 'de', 'login' ], { queryParams: { returnUrl: state.url }});
        resolve(false);
      });
    });
  }
}
