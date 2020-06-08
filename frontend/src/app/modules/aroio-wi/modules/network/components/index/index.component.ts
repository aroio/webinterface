import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AroioSettingsService} from '../../../../../core/services/aroio-settings.service';
import {AroioSettingsInterface} from '../../../../../core/interfaces/aroio-settings.interface';
import {Subscription} from 'rxjs';
import {AroioAlertService} from '../../../../../core/services/alert.service';

@Component({
  selector: '<aroio-network-index-component>',
  templateUrl: './index.component.html'
})
export class NetworkIndexComponent implements AfterViewInit, OnDestroy {

  form: FormGroup = null;
  subscriptions: Array<Subscription> = [];
  isLoading = false;
  ipPattern = '(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

  constructor(
    private settingsSerivce: AroioSettingsService,
    private alert: AroioAlertService
  ) {
  }

  ngAfterViewInit() {
    this.isLoading = true;
    this.subscriptions.push(
      this.settingsSerivce.getAroioSettings().subscribe(aroioSettings => {
        this.buildForm(aroioSettings);
        this.isLoading = false;
      })
    )
  }

  buildForm(aroioSettings: AroioSettingsInterface = null) {
    this.form = new FormGroup({
      hostname: new FormControl(aroioSettings && aroioSettings.configuration.network.hostname ? aroioSettings.configuration.network.hostname : '', Validators.required),
      wifi: new FormControl(aroioSettings && aroioSettings.configuration.network.wifi ? aroioSettings.configuration.network.wifi : false, Validators.required),
      lan: new FormGroup({
        dhcp: new FormControl(aroioSettings && aroioSettings.configuration.network.lan.dhcp ? aroioSettings.configuration.network.lan.dhcp : false, Validators.required),
        ipaddr: new FormControl(aroioSettings && aroioSettings.configuration.network.lan.ipaddr ? aroioSettings.configuration.network.lan.ipaddr : '', Validators.pattern(this.ipPattern)),
        gateway: new FormControl(aroioSettings && aroioSettings.configuration.network.lan.gateway ? aroioSettings.configuration.network.lan.gateway : '', Validators.pattern(this.ipPattern)),
        netmask: new FormControl(aroioSettings && aroioSettings.configuration.network.lan.netmask ? aroioSettings.configuration.network.lan.netmask : '', Validators.pattern(this.ipPattern)),
        dnsserv: new FormControl(aroioSettings && aroioSettings.configuration.network.lan.dnsserv ? aroioSettings.configuration.network.lan.dnsserv : '', Validators.pattern(this.ipPattern))
      }),
      wlan: new FormGroup({
        dhcp: new FormControl(aroioSettings && aroioSettings.configuration.network.wlan.dhcp ? aroioSettings.configuration.network.wlan.dhcp : false, Validators.required),
        ipaddr: new FormControl(aroioSettings && aroioSettings.configuration.network.wlan.ipaddr ? aroioSettings.configuration.network.wlan.ipaddr : '', Validators.pattern(this.ipPattern)),
        gateway: new FormControl(aroioSettings && aroioSettings.configuration.network.wlan.gateway ? aroioSettings.configuration.network.wlan.gateway : '', Validators.pattern(this.ipPattern)),
        netmask: new FormControl(aroioSettings && aroioSettings.configuration.network.wlan.netmask ? aroioSettings.configuration.network.wlan.netmask : '', Validators.pattern(this.ipPattern)),
        dnsserv: new FormControl(aroioSettings && aroioSettings.configuration.network.wlan.dnsserv ? aroioSettings.configuration.network.wlan.dnsserv : '', Validators.pattern(this.ipPattern)),
        pwd: new FormControl(aroioSettings && aroioSettings.configuration.network.wlan.wlanpwd ? aroioSettings.configuration.network.wlan.wlanssid : ''),
        ssid: new FormControl(aroioSettings && aroioSettings.configuration.network.wlan.wlanssid ? aroioSettings.configuration.network.wlan.wlanpwd : '')
      }),
    });
  }

  submitForm(event) {
    this.subscriptions.push(
      this.settingsSerivce.setAroioSettingsNetwork(this.form.getRawValue()).subscribe(_ => {
        this.alert.alert$.next({message: 'Netzwerk erfolgreich gespeichert', type: 'success'});
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
