import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AroioSettingsService} from '../../../core/services/aroio-settings.service';
import {AroioAlertService} from '../../../core/services/alert.service';

@Component({
  selector: '<aroio-security-select-device-component>',
  templateUrl: './select-device.component.html'
})
export class SecuritySelectDeviceComponent implements OnInit, OnDestroy {

  form: FormGroup = null;
  subscriptions: Array<Subscription> = [];

  options = [
    {label: 'AroioSU', value: 'AroioSU'},
    {label: 'AroioEX', value: 'AroioEX'},
    {label: 'AroioLT', value: 'AroioLT'},
    {label: 'RaspberryPI', value: 'RaspberryPI'}
  ];

  constructor(
    private settingsSerivce: AroioSettingsService,
    private alert: AroioAlertService,
    private router: Router,
    private translate: TranslateService
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      initial_config: new FormControl(false, Validators.required),
      description: new FormControl('', Validators.required),
      configuration: new FormGroup({
        network: new FormGroup({
          hostname: new FormControl(null, Validators.required),
        }),
        system: new FormGroup({
          platform: new FormControl(null, Validators.required),
        }),
        streaming: new FormGroup({
          playername: new FormControl(null, Validators.required),
        })
      })
    });
  }

  setAroio() {
    this.form.get('configuration').get('system').get('platform').setValue(this.form.get('configuration').get('network').get('hostname').value)
    this.form.get('configuration').get('streaming').get('playername').setValue(this.form.get('configuration').get('network').get('hostname').value)
    this.subscriptions.push(
      this.settingsSerivce.setAroioSettings(this.form.getRawValue()).subscribe(_ => {
        this.alert.alert$.next({message: 'Ihre Grundkonfiguration wurde erfolgreich gespeichert', type: 'success'});
        this.router.navigate([this.translate.currentLang, 'network']);
      }, error => {
        this.alert.alert$.next({message: 'Es ist ein Fehler aufgetreten.', type: 'error'});
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(_ => {
      _.unsubscribe()
    })
  }
}
