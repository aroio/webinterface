
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ErrorServiceAbstract} from '../../core/interfaces/error.abstract';
import {ErrorServiceInterface} from '../../core/interfaces/error.interface';

@Injectable()
export class ErrorService extends ErrorServiceAbstract implements ErrorServiceInterface {

  public propertyError: Subject<{ property_path: string, message: string }> = new Subject();
  public error: Subject<string> = new Subject();

  constructor(private _translateService: TranslateService) {
    super();
  }

  displayError(response: HttpErrorResponse): void {

    let errorMsg: string;
    if (response.error && response.error.errors && response.error.errors.errors.length > 0) {
      errorMsg = response.error.errors.errors[0];
    } else {
      errorMsg = this._translateService.instant('globals.forms.errors.default');
    }

  }
}
