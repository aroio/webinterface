import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {
  AroioSettingsInterface, AudioConfigInterface,
  ConvolverConfigInterface, NetworkConfigInterface, OutputConfigInterface,
  StreamingConfigInterface,
  WebinterfaceConfigInterface
} from '../interfaces/aroio-settings.interface';
import {publishReplay, refCount, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AroioSettingsService {

  private _serviceCache: { [key: string]: Observable<any> } = {};

  constructor(private _api: HttpClient) {}

  //////////////////////////
  // Get Routes
  //////////////////////////
  getAroioSettings(): Observable<AroioSettingsInterface> {
    if (!this._serviceCache.settings) {
      this._serviceCache.settings = this._api.get<AroioSettingsInterface>('/aroio').pipe(take(1), publishReplay(), refCount());
    }
    return this._api.get<AroioSettingsInterface>( environment.api + '/aroio');
  }

  //////////////////////////
  // Patch Routes
  //////////////////////////
  setAroioBaseInformation(form: FormData): Observable<AroioSettingsInterface> {
    this.clear();
    return this._api.patch<AroioSettingsInterface>( environment.api + '/aroio', form);
  }

  setAroioSettings(form: FormData): Observable<AroioSettingsInterface> {
    this.clear();
    return this._api.patch<AroioSettingsInterface>( environment.api + '/config', form);
  }

  setAroioSettingsNetwork(form: FormData): Observable<NetworkConfigInterface> {
    this.clear();
    return this._api.patch<NetworkConfigInterface>( environment.api + '/config/network', form);
  }


  setAroioSettingsAudio(form: FormData): Observable<AudioConfigInterface> {
    this.clear();
    return this._api.patch<AudioConfigInterface>( environment.api + '/config/audio', form);
  }

  setAroioSettingsAudioOutputConfig(form: FormData): Observable<OutputConfigInterface> {
    this.clear();
    return this._api.patch<OutputConfigInterface>( environment.api + '/config/audio/output-configuration', form);
  }

  setAroioSettingsWebinterface(form: FormData): Observable<WebinterfaceConfigInterface> {
    this.clear();
    return this._api.patch<WebinterfaceConfigInterface>( environment.api + '/config/webinterface', form);
  }

  setAroioSettingsStreaming(form: FormData): Observable<StreamingConfigInterface> {
    this.clear();
    return this._api.patch<StreamingConfigInterface>( environment.api + '/config/streaming', form);
  }

  setAroioSettingsConvolver(form: FormData): Observable<ConvolverConfigInterface> {
    this.clear();
    return this._api.patch<ConvolverConfigInterface>( environment.api + '/config/convolver', form);
  }

  setAroioPasswort(form: FormData): Observable<AroioSettingsInterface> {
    this.clear();
    return this._api.patch<AroioSettingsInterface>( environment.api + '/password', form);
  }

  clear() {
    this._serviceCache = {};
  }
}
