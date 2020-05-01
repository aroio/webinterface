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
      lan_dhcp: new FormControl(aroioSettings && aroioSettings.configuration.network.lan_dhcp ? aroioSettings.configuration.network.lan_dhcp : false, Validators.required),
      lan_ipaddr: new FormControl(aroioSettings && aroioSettings.configuration.network.lan_ipaddr ? aroioSettings.configuration.network.lan_ipaddr : ''),
      lan_gateway: new FormControl(aroioSettings && aroioSettings.configuration.network.lan_gateway ? aroioSettings.configuration.network.lan_gateway : ''),
      lan_netmask: new FormControl(aroioSettings && aroioSettings.configuration.network.lan_netmask ? aroioSettings.configuration.network.lan_netmask : ''),
      lan_dnsserv: new FormControl(aroioSettings && aroioSettings.configuration.network.lan_dnsserv ? aroioSettings.configuration.network.lan_dnsserv : ''),
      wlan_dhcp: new FormControl(aroioSettings && aroioSettings.configuration.network.wlan_dhcp ? aroioSettings.configuration.network.wlan_dhcp : false, Validators.required),
      wlan_ipaddr: new FormControl(aroioSettings && aroioSettings.configuration.network.wlan_ipaddr ? aroioSettings.configuration.network.wlan_ipaddr : ''),
      wlan_gateway: new FormControl(aroioSettings && aroioSettings.configuration.network.wlan_gateway ? aroioSettings.configuration.network.wlan_gateway : ''),
      wlan_netmask: new FormControl(aroioSettings && aroioSettings.configuration.network.wlan_netmask ? aroioSettings.configuration.network.wlan_netmask : ''),
      wlan_dnsserv: new FormControl(aroioSettings && aroioSettings.configuration.network.wlan_dnsserv ? aroioSettings.configuration.network.wlan_dnsserv : ''),
      wlanpwd: new FormControl(aroioSettings && aroioSettings.configuration.network.wlanpwd ? aroioSettings.configuration.network.wlanpwd : ''),
      wlanssid: new FormControl(aroioSettings && aroioSettings.configuration.network.wlanssid ? aroioSettings.configuration.network.wlanssid : '')
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
