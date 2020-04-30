/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2018 Braune Digital GmbH
 */


import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';

import {Router} from '@angular/router';
import {Observable} from "rxjs";
import {StorageService} from '../services/storage.service';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public router: Router, private storage: StorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => {

    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          AuthService.forgetToken(this.storage);
          //this.router.navigate(['login']);
        }
      }
    }));
  }
}
