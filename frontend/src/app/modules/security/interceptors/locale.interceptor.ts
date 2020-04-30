/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */


import {mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, from as fromPromise} from 'rxjs';

import {AuthService, SimpleHeaders} from '../services/auth.service';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class LocaleInterceptor implements HttpInterceptor {

  constructor(private translation: TranslateService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.getAuthorizationLocaleHeader().pipe(
      mergeMap((authHeader: SimpleHeaders) => {
        // If there is an auth header add it and pass on the new request.
        if (authHeader) {
          return next
            .handle(req.clone({
              setHeaders: authHeader
            }));
        }
        // Simply pass on the request if there is no header to set.
        return next.handle(req);
      }));
  }

  getAuthorizationLocaleHeader(): Observable<SimpleHeaders> {
    if (this.translation.currentLang) {
      return fromPromise(Promise.resolve({'X-Locale': this.translation.currentLang}));
    }
    return fromPromise(Promise.resolve({}));
  }


}
