import {Subject} from 'rxjs';

export interface AroioAlertInterface {
  type: string;
  title?: string;
  message?: string;
}

export abstract class AroioAbstractAlertService {

  abstract alert$: Subject<AroioAlertInterface>;

}
