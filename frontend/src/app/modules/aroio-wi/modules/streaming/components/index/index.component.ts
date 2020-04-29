import {AfterViewInit, Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AroioSettingsService} from '../../../../../core/services/aroio-settings.service';
import {AroioAlertService} from '../../../../../core/services/alert.service';
import {AroioSettingsInterface} from '../../../../../core/interfaces/aroio-settings.interface';

@Component({
  selector: '<aroio-streaming-index-component>',
  templateUrl: './index.component.html'
})
export class StreamingIndexComponent implements AfterViewInit, OnDestroy {

  form: FormGroup = null;
  subscriptions: Array<Subscription> = [];


  constructor(
    private settingsSerivce: AroioSettingsService,
    private alert: AroioAlertService
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
      servername: new FormControl(aroioSettings && aroioSettings.configuration.streaming.servername ? aroioSettings.configuration.streaming.servername : ''),
      serverport: new FormControl(aroioSettings && aroioSettings.configuration.streaming.serverport ? aroioSettings.configuration.streaming.serverport : ''),
      squeezeuser: new FormControl(aroioSettings && aroioSettings.configuration.streaming.squeezeuser ? aroioSettings.configuration.streaming.squeezeuser : ''),
      squeezepwd: new FormControl(aroioSettings && aroioSettings.configuration.streaming.squeezepwd ? aroioSettings.configuration.streaming.squeezepwd : ''),
      playername: new FormControl(aroioSettings && aroioSettings.configuration.streaming.playername ? aroioSettings.configuration.streaming.playername : '', Validators.required),
    });
  }

  submitForm(event) {
    this.subscriptions.push(
      this.settingsSerivce.setAroioSettingsStreaming(this.form.getRawValue()).subscribe(_ => {
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
