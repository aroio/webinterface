import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {AroioAlertService} from './alert.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeassurementSocketService {

  public measssurementSocket: WebSocketSubject<any> = null;

  constructor(
    private _api: HttpClient,
    private _alert: AroioAlertService
  ) {
  }

  //////////////////////////
  // Get Routes
  //////////////////////////

  send(content) {
    this.measssurementSocket.next(content);
  }

  open(): Observable<WebSocketSubject<any>> {
    this.measssurementSocket = webSocket(environment.socket_api + '/meassurement/socket');
    return this.measssurementSocket;
  }

  close() {
    this.measssurementSocket.unsubscribe();
    this.measssurementSocket = null;
  }

}
