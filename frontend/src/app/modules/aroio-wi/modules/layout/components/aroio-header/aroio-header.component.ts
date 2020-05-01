import {Component, OnInit, TemplateRef} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AroioSettingsInterface} from '../../../../../core/interfaces/aroio-settings.interface';
import {AroioSettingsService} from '../../../../../core/services/aroio-settings.service';
import {AroioAlertService} from '../../../../../core/services/alert.service';

@Component({
  selector: 'aroio-header',
  templateUrl: 'aroio-header.component.html'
})
export class AroioHeaderComponent {


  // Modal Specific
  modalIndex = 0;
  modalRef: BsModalRef;
  form: FormGroup;
  passwordForm: FormGroup;

  subscriptions: Array<Subscription> = [];
  isLoading = true;

  constructor(
    public translate: TranslateService,
    private settingsSerivce: AroioSettingsService,
    private modalService: BsModalService,
    private alert: AroioAlertService
  ) {
  }

  buildForm(aroioSettings: AroioSettingsInterface = null) {
    this.form = new FormGroup({
      username: new FormControl(aroioSettings.username ? aroioSettings.username : ''),
      description: new FormControl(aroioSettings.description ? aroioSettings.description : ''),
      authentication_enabled: new FormControl(aroioSettings.authentication_enabled ? aroioSettings.authentication_enabled : true),
      webinterface: new FormGroup({
        dark_mode: new FormControl(aroioSettings.configuration.webinterface.dark_mode ? aroioSettings.configuration.webinterface.dark_mode : false),
        initial_setup: new FormControl(aroioSettings.configuration.webinterface.initial_setup ? aroioSettings.configuration.webinterface.initial_setup : false),
        advanced_configuration: new FormControl(aroioSettings.configuration.webinterface.advanced_configuration ? aroioSettings.configuration.webinterface.advanced_configuration : false),
      })
    });
  }

  buildPasswordForm(aroioSettings: AroioSettingsInterface = null) {
    this.passwordForm = new FormGroup({
      password: new FormControl(''),
      password_repeated: new FormControl(''),
    });
  }


  submitForm(event) {
    this.subscriptions.push(
      this.settingsSerivce.setAroioSettings(this.form.getRawValue()).subscribe(_ => {
        this.alert.alert$.next({message: 'Die Konfiguration erfolgreich gespeichert.', type: 'success'});
      }, error => {
        this.alert.alert$.next({message: 'Es ist ein Fehler aufgetreten.', type: 'error'});
      })
    )
  }

  submitPassswordForm(event) {
    this.subscriptions.push(
      this.settingsSerivce.setAroioPasswort(this.form.getRawValue()).subscribe(_ => {
        this.alert.alert$.next({message: 'Das Passwort wurde erfolgreich geändert.', type: 'success'});
      }, error => {
        this.alert.alert$.next({message: 'Es ist ein Fehler aufgetreten.', type: 'error'});
      })
    )
  }


  // Modal Specific
  // -----------------------
  openModal(template: TemplateRef<any>, _index: number) {
    this.subscriptions.push(
      this.settingsSerivce.getAroioSettings().subscribe(aroioSettings => {
        this.buildForm(aroioSettings);
        this.buildPasswordForm(aroioSettings);
        this.isLoading = false;
        this.modalRef = this.modalService.show(template, {class: 'modal--lg'});
      })
    );
  }

  modalClose(_index) {
    this.subscriptions.forEach(_ => {
      _.unsubscribe()
    })
    this.modalRef.hide();
    this.modalRef = null;
  }
}
