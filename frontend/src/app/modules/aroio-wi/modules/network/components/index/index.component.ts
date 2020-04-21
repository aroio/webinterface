import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AroioSettingsService} from '../../../../../core/services/aroio-settings.service';
import {AroioSettingsInterface} from '../../../../../core/interfaces/aroio-settings.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: '<aroio-network-index-component>',
  templateUrl: './index.component.html'
})
export class NetworkIndexComponent implements AfterViewInit, OnDestroy {

  form: FormGroup = null;
  subscriptions: Array<Subscription> = [];


  constructor(
    private settingsSerivce: AroioSettingsService
  ) {
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      this.settingsSerivce.getAroioSettings().subscribe(aroioSettings => {
        this.buildForm(aroioSettings);
      })
    )
  }

  buildForm(aroioSettings: AroioSettingsInterface = null) {
    this.form = new FormGroup({
      hostname: new FormControl(aroioSettings && aroioSettings.configuration.network.hostname ? aroioSettings.configuration.network.hostname : '', Validators.required),
      wifi: new FormControl(aroioSettings && aroioSettings.configuration.network.wifi ? aroioSettings.configuration.network.wifi : false, Validators.required),
      dhcp: new FormControl(aroioSettings && aroioSettings.configuration.network.dhcp ? aroioSettings.configuration.network.dhcp : false, Validators.required),
      ipaddr: new FormControl(aroioSettings && aroioSettings.configuration.network.ipaddr ? aroioSettings.configuration.network.ipaddr : ''),
      gateway: new FormControl(aroioSettings && aroioSettings.configuration.network.gateway ? aroioSettings.configuration.network.gateway : ''),
      netmask: new FormControl(aroioSettings && aroioSettings.configuration.network.netmask ? aroioSettings.configuration.network.netmask : ''),
      dnsserv: new FormControl(aroioSettings && aroioSettings.configuration.network.dnsserv ? aroioSettings.configuration.network.dnsserv : ''),
      wlanpwd: new FormControl(aroioSettings && aroioSettings.configuration.network.wlanpwd ? aroioSettings.configuration.network.wlanpwd : ''),
      wlanssid: new FormControl(aroioSettings && aroioSettings.configuration.network.wlanssid ? aroioSettings.configuration.network.wlanssid : '')
    });
  }

  submitForm(event) {
    this.subscriptions.push(
      this.settingsSerivce.setAroioSettingsNetwork(this.form.getRawValue()).subscribe(_ => {
        if (_) {
          console.log(_)
        } else {
          console.log('Error lölst');
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(_ => {
      _.unsubscribe()
    })
  }
}
