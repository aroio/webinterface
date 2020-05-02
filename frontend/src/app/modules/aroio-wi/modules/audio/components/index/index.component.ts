import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AroioOutputs} from '../../../../../../utils/configs/audio-configuration';
import {AroioSettingsService} from '../../../../../core/services/aroio-settings.service';
import {AroioAlertService} from '../../../../../core/services/alert.service';
import {Subscription} from 'rxjs';
import {AroioSettingsInterface, PlayerConfigInterface} from '../../../../../core/interfaces/aroio-settings.interface';

@Component({
  selector: '<aroio-audio-index-component>',
  templateUrl: './index.component.html'
})
export class AudioIndexComponent implements AfterViewInit, OnDestroy {


  audioOutputs = AroioOutputs;
  activeOutput = 1;
  index = 0;
  switchState = [];
  isLoading = true;

  form: FormGroup;

  subscriptions: Array<Subscription> = [];

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,
    threshold: 3,
  };

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
        this.audioOutputs.forEach((output, index) => {
          if (this.form.get('audio_output').value === output.value) {
            this.index = index;
          }
        });
        this.isLoading = false;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(_ => _.unsubscribe());
  }


  buildForm(aroioSettings: AroioSettingsInterface = null) {
    this.form = new FormGroup({});
    this.audioOutputs.forEach(output => {
      this.form.addControl(output.id, new FormGroup({}));
      this.form.addControl('audio_output', new FormControl(aroioSettings.configuration.audio.output_configuration.audio_output ? aroioSettings.configuration.audio.output_configuration.audio_output : ''));
      output.player.forEach(player => {
        (this.form.get(output.id) as FormGroup).addControl(player.id, new FormControl(aroioSettings.configuration.audio.output_configuration[output.id][player.id] ? aroioSettings.configuration.audio.output_configuration[output.id][player.id] : false));
        (this.form.get(output.id) as FormGroup).addControl('mscoding', new FormControl(aroioSettings.configuration.audio.output_configuration[output.id]['mscoding'] ? aroioSettings.configuration.audio.output_configuration[output.id]['mscoding'] : false));
        (this.form.get(output.id) as FormGroup).addControl('measurement_output', new FormControl(aroioSettings.configuration.audio.output_configuration[output.id]['measurement_output'] ? aroioSettings.configuration.audio.output_configuration[output.id]['measurement_output'] : ''));
        (this.form.get(output.id) as FormGroup).addControl('rate', new FormControl(aroioSettings.configuration.audio.output_configuration[output.id]['rate'] ? aroioSettings.configuration.audio.output_configuration[output.id]['rate'] : 0));
        (this.form.get(output.id) as FormGroup).addControl('sprate', new FormControl(aroioSettings.configuration.audio.output_configuration[output.id]['sprate'] ? aroioSettings.configuration.audio.output_configuration[output.id]['sprate'] : 0));
        (this.form.get(output.id) as FormGroup).addControl('channels', new FormControl(aroioSettings.configuration.audio.output_configuration[output.id]['channels'] ? aroioSettings.configuration.audio.output_configuration[output.id]['channels'] : 0));
      })
    });

  }


  submitForm(event) {
    this.subscriptions.push(
      this.settingsSerivce.setAroioSettingsAudioOutputConfig(this.form.getRawValue()).subscribe(_ => {
        this.alert.alert$.next({message: 'Das Audiosetup erfolgreich gespeichert', type: 'success'});
      }, error => {
        this.alert.alert$.next({message: 'Es ist ein Fehler aufgetreten.', type: 'error'});
      })
    )
  }

  changeStereo(outputID, value) {
    this.form.get(outputID).get('mscoding').setValue(value);
  }

  changeRadio(outputID, playerID) {
    this.audioOutputs.forEach(output => {
      output.player.forEach(player => {
        if (player.id !== playerID) {
          this.form.get(outputID).get(player.id).setValue(false);
        }
      });
    });
    this.form.get(outputID).get(playerID).setValue(!this.form.get(outputID).get(playerID).value);
  }

  getChildForm(formGrouoName: string): AbstractControl {
    return this.form.get(formGrouoName);
  }

  changeStatus(switchState, id) {
    console.log('changeStatus', id);
    if (this.switchState[id]) {
      this.switchState[id] = false;
    } else {
      this.switchState[id] = true;
    }
  }

  changeSelect(index) {
    setTimeout(_ => {
      console.log(index);
      // this.activeOutput = index;
    }, 0);
  }

}
