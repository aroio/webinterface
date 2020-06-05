import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {Observable} from 'rxjs';
import {AroioCommandInterface} from '../interfaces/command.interface';

@Injectable({
  providedIn: 'root'
})
export class MeassurementSocketService {

  public measssurementSocket: WebSocketSubject<any> = null;
  public progressSocket: WebSocketSubject<any> = null;

  constructor() {}

  //////////////////////////
  // Meassurement Socket
  //////////////////////////

  send(content: AroioCommandInterface) {
    this.measssurementSocket.next(content);
  }

  open(): WebSocketSubject<AroioCommandInterface> {
    this.measssurementSocket = webSocket(environment.socket_api + '/meassurement/socket');
    return this.measssurementSocket;
  }

  close() {
    if (this.measssurementSocket) {
      this.measssurementSocket.unsubscribe();
      this.measssurementSocket = null;
    }
  }

  //////////////////////////
  // Progress Socket
  //////////////////////////

  sendProgress(content: AroioCommandInterface) {
    this.progressSocket.next(content);
  }

  openProgress(): WebSocketSubject<AroioCommandInterface> {
    this.progressSocket = webSocket(environment.socket_api + '/meassurement/progress');
    return this.progressSocket;
  }

  closeProgress() {
    if (this.progressSocket) {
      this.progressSocket.unsubscribe();
      this.progressSocket = null;
    }
  }
}
