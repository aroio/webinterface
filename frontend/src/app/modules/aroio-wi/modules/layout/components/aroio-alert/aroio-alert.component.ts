import {Component, Input} from '@angular/core';
import {AroioAlertInterface} from '../../../../../core/services/alert.abstract.service';
import {AroioAlertService} from '../../../../../core/services/alert.service';
import {Animations} from '../../animations/animations';

@Component({
  selector: 'aroio-alert, [aroio-alert]',
  templateUrl: './aroio-alert.component.html',
  animations: [
    Animations.slideRightOut
  ]
})
export class AroioAlertComponent {

  @Input()
  closeable = false;

  @Input()
  timeout = 6500;

  public _alerts: Array<AroioAlertInterface> = [];

  get alert() {
    return this._alerts[this._alerts.length - 1];
  }

  constructor(private _alertService: AroioAlertService) {
    this._alertService.alert$.subscribe(_alert => {
      this._alerts.push(_alert);
    });
  }

  removeAlert(alert) {
    this._alerts = this._alerts.filter(obj => obj !== alert);
  }

  removeAlertWithTimeout(alert) {
    setTimeout(() => {
      this._alerts = this._alerts.filter(obj => obj !== alert);
    }, this.timeout);
  }

}
