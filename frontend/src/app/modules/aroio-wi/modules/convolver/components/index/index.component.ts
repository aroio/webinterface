import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Animations} from '../../../layout/animations/animations';
import {Subscription} from 'rxjs';
import {AroioSettingsService} from '../../../../../core/services/aroio-settings.service';
import {AroioSettingsInterface} from '../../../../../core/interfaces/aroio-settings.interface';
import {TranslateService} from '@ngx-translate/core';
import {AroioAlertService} from '../../../../../core/services/alert.service';

@Component({
  selector: '<aroio-convolver-index-component>',
  templateUrl: './index.component.html',
  animations: [
    Animations.fadeHeightInOut,
  ]
})
export class ConvolverIndexComponent implements AfterViewInit, OnDestroy {

  form: FormGroup = null;
  subscriptions: Array<Subscription> = [];

  constructor(
    public translate: TranslateService,
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
      brutefir: new FormControl(aroioSettings.configuration.convolver.brutefir ? aroioSettings.configuration.convolver.brutefir : false),
      load_prefilter: new FormControl(aroioSettings.configuration.convolver.load_prefilter ? aroioSettings.configuration.convolver.load_prefilter : false),
      def_coeff: new FormControl(aroioSettings.configuration.convolver.def_coeff ? aroioSettings.configuration.convolver.def_coeff : ''),
      filter: new FormArray([]),
    });
  }

  submitForm(event) {
    this.subscriptions.push(
      this.settingsSerivce.setAroioSettingsConvolver(this.form.getRawValue()).subscribe(_ => {
        this.alert.alert$.next({message: 'Convolver erfolgreich gespeichert', type: 'success'});
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
