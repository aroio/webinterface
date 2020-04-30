/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */


import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {FormErrorService} from '@braune-digital/form-utilities';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public router: Router, private _error: FormErrorService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => {
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status !== 200) {
          const errorObject = err.error;
          /**
           * send remote error events
           */
          if (errorObject && errorObject.message) {
            this._error.formError.next(errorObject.message);
          } else {
            if (err.status === 400) {
              this._error.formError.next('form.errors.default');
            }
          }
        }
      }
    }));
  }
}
