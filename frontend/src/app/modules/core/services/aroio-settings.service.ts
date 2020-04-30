import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {AroioSettingsInterface} from '../interfaces/aroio-settings.interface';

@Injectable({
  providedIn: 'root'
})
export class AroioSettingsService {

  constructor(private _api: HttpClient) {
  }

  //////////////////////////
  // Get Routes
  //////////////////////////
  getAroioSettings(): Observable<AroioSettingsInterface> {
    return this._api.get<AroioSettingsInterface>( environment.api + 'aroio');
  }

  //////////////////////////
  // Patch Routes
  //////////////////////////
  setAroioSettings(form: FormData): Observable<AroioSettingsInterface> {
    return this._api.patch<AroioSettingsInterface>( environment.api + 'settings', form);
  }

  setAroioSettingsNetwork(form: FormData): Observable<AroioSettingsInterface> {
    return this._api.patch<AroioSettingsInterface>( environment.api + 'settings/network', form);
  }

  setAroioSettingsStreaming(form: FormData): Observable<AroioSettingsInterface> {
    return this._api.patch<AroioSettingsInterface>( environment.api + 'settings/streaming', form);
  }

  setAroioSettingsConvolver(form: FormData): Observable<AroioSettingsInterface> {
    return this._api.patch<AroioSettingsInterface>( environment.api + 'settings/convolver', form);
  }
}
