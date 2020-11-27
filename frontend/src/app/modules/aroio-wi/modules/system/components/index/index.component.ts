import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {AroioSettingsService} from '../../../../../core/services/aroio-settings.service';
import {AroioAlertService} from '../../../../../core/services/alert.service';
import {AroioSettingsInterface} from '../../../../../core/interfaces/aroio-settings.interface';
import {Subscription} from 'rxjs';
import {SidebarWidgetsService} from '../../../../../core/services/sidebar-widgets.service';
import {Widgets} from '../../../../../../utils/configs/widgets';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: '<aroio-system-index-component>',
  templateUrl: './index.component.html'
})
export class SystemIndexComponent implements OnInit, AfterViewInit, OnDestroy {

  form: FormGroup = null;
  settings: AroioSettingsInterface;
  subscriptions: Array<Subscription> = [];

  constructor(
    private settingsSerivce: AroioSettingsService,
    private alert: AroioAlertService,
    private sidebarWidgetService: SidebarWidgetsService
  ) {
  }

  ngOnInit() {
    this.sidebarWidgetService.remove(Widgets['system_info'])

    this.subscriptions.push(
      this.settingsSerivce.getAroioSettings().subscribe(aroioSettings => {
        this.settings = aroioSettings;
        this.getKeyValues(aroioSettings.configuration.network);
      })
    )
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      this.settingsSerivce.getAroioSettings().subscribe(aroioSettings => {
        this.buildForm(aroioSettings);
      })
    )
  }

  ngOnDestroy() {
    this.sidebarWidgetService.add(Widgets['system_info']);

    this.subscriptions.forEach(_ => {
      _.unsubscribe()
    })
  }

  buildForm(aroioSettings: AroioSettingsInterface = null) {
    this.form = new FormGroup({
      usebeta: new FormControl(aroioSettings.configuration.system.usebeta ? aroioSettings.configuration.system.usebeta : false),
    });
  }

  submitForm(event) {
    this.subscriptions.push(
      this.settingsSerivce.setAroioSettingsSystem(this.form.getRawValue()).subscribe(_ => {
        this.alert.alert$.next({message: 'System erfolgreich gespeichert', type: 'success'});
      }, error => {
        this.alert.alert$.next({message: 'Es ist ein Fehler aufgetreten.', type: 'error'});
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


  searchForUpdates() {
    console.log('search fo updates not implemented yet')
  }
}
