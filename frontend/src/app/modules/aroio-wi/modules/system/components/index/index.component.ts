import {Component, OnInit} from '@angular/core';
import {AroioSettingsService} from '../../../../../core/services/aroio-settings.service';
import {AroioAlertService} from '../../../../../core/services/alert.service';
import {AroioSettingsInterface} from '../../../../../core/interfaces/aroio-settings.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: '<aroio-system-index-component>',
  templateUrl: './index.component.html'
})
export class SystemIndexComponent implements OnInit {

  aroioSettings: AroioSettingsInterface;
  subscriptions: Array<Subscription> = [];

  constructor(
    private settingsSerivce: AroioSettingsService,
    private alert: AroioAlertService
  ) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.settingsSerivce.getAroioSettings().subscribe(aroioSettings => {
        this.aroioSettings = aroioSettings;
        this.getKeyValues(aroioSettings.configuration.network);
      })
    )


  }

  getKeyValues(object): Array<{ key: string, value: string }> {
    const keys: Array<{ key: string, value: string }> = [];
    Object.keys(object).forEach(_ => {
      keys.push({key: _, value: object[_]})
    });
    return keys;
  }

}
