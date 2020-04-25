
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {AroioAbstractAlertService, AroioAlertInterface} from './alert.abstract.service';

@Injectable({
  providedIn: 'root'
})
export class AroioAlertService extends AroioAbstractAlertService {

  public alert$: Subject<AroioAlertInterface> = new Subject<AroioAlertInterface>();

  constructor() {
    super();
  }
}
