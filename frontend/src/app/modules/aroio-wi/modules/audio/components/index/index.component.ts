import {AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {AroioOutputs} from '../../../../../../utils/configs/audio-configuration';
import {AroioSettingsService} from '../../../../../core/services/aroio-settings.service';
import {AroioAlertService} from '../../../../../core/services/alert.service';
import {Subscription} from 'rxjs';
import {AroioSettingsInterface} from '../../../../../core/interfaces/aroio-settings.interface';
import {AroioStartVolumes} from '../../../../../../utils/configs/startvolumes';
import {BufferSizes} from '../../../../../../utils/configs/bufferSizes';
import {AroioJackperiods} from '../../../../../../utils/configs/jackperiods';
import {AroioJackpuffer} from '../../../../../../utils/configs/jackpuffer';
import {ResamplingFrequencies} from '../../../../../../utils/configs/resampling';
import {ShairplaySamplingFrequences} from '../../../../../../utils/configs/shairplaySamplingFrequences';
import {AroioSoundcards} from '../../../../../../utils/configs/soundcards';
import {BrutefirPartitions} from '../../../../../../utils/configs/brutefirPartitions';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: '<aroio-audio-index-component>',
  templateUrl: './index.component.html'
})
export class AudioIndexComponent implements AfterViewInit, OnDestroy {

  // Import Select Configs
  audioOutputs = AroioOutputs;

  brutefirPartitions = BrutefirPartitions;
  bufferSizes = BufferSizes;
  jackPeriods = AroioJackperiods;
  jackPuffer = AroioJackpuffer;
  resamplingFrequencies = ResamplingFrequencies;
  shairplayFrequences = ShairplaySamplingFrequences;
  soundcards = AroioSoundcards;
  startvolumes = AroioStartVolumes;

  activeOutput = 1;
  index = 0;
  isLoading = true;

  form: FormGroup;
  aroioSettings: AroioSettingsInterface;
  currentAdvancedSetup: any;

  subscriptions: Array<Subscription> = [];

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,
    threshold: 3,
  };

  // Modal Specific
  modalIndex = 0;
  modalRef: BsModalRef;
  @ViewChild('setAdvancedSetupModal') setAdvancedSetupModal;

  constructor(
    private settingsSerivce: AroioSettingsService,
    private alert: AroioAlertService,
    private modalService: BsModalService,
  ) {
  }

  ngAfterViewInit() {
    this.isLoading = true;
    this.subscriptions.push(
      this.settingsSerivce.getAroioSettings().subscribe(aroioSettings => {
        this.buildForm(aroioSettings);
        this.aroioSettings = aroioSettings;
        this.audioOutputs.forEach((output, index) => {
          if (this.form.get('output_configuration').get('audio_output').value === output.value) {
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
    this.form = new FormGroup({
      audioplayer: new FormControl(aroioSettings.configuration.audio.audioplayer ? aroioSettings.configuration.audio.audioplayer : null),
      channels: new FormControl(aroioSettings.configuration.audio.channels ? aroioSettings.configuration.audio.channels : null),
      soundcard: new FormControl(aroioSettings.configuration.audio.soundcard ? aroioSettings.configuration.audio.soundcard : null),
      resampling: new FormControl(aroioSettings.configuration.audio.resampling ? aroioSettings.configuration.audio.resampling : null),
      volume_start: new FormControl(aroioSettings.configuration.audio.volume_start ? aroioSettings.configuration.audio.volume_start : null),
      jackbuffer: new FormControl(aroioSettings.configuration.audio.jackbuffer ? aroioSettings.configuration.audio.jackbuffer : null),
      jackperiod: new FormControl(aroioSettings.configuration.audio.jackperiod ? aroioSettings.configuration.audio.jackperiod : null),
      squeeze_maxfrequency: new FormControl(aroioSettings.configuration.audio.squeeze_maxfrequency ? aroioSettings.configuration.audio.squeeze_maxfrequency : null),
      squeeze_alsabuffer: new FormControl(aroioSettings.configuration.audio.squeeze_alsabuffer ? aroioSettings.configuration.audio.squeeze_alsabuffer : null),
      squeeze_alsaperiod: new FormControl(aroioSettings.configuration.audio.squeeze_alsaperiod ? aroioSettings.configuration.audio.squeeze_alsaperiod : null),
      squeeze_intbuffer: new FormControl(aroioSettings.configuration.audio.squeeze_intbuffer ? aroioSettings.configuration.audio.squeeze_intbuffer : null),
      squeeze_outbuffer: new FormControl(aroioSettings.configuration.audio.squeeze_outbuffer ? aroioSettings.configuration.audio.squeeze_outbuffer : null),
      sp_outbuffer: new FormControl(aroioSettings.configuration.audio.sp_outbuffer ? aroioSettings.configuration.audio.sp_outbuffer : null),
      sp_period: new FormControl(aroioSettings.configuration.audio.sp_period ? aroioSettings.configuration.audio.sp_period : null),
      sp_samplerate: new FormControl(aroioSettings.configuration.audio.sp_samplerate ? aroioSettings.configuration.audio.sp_samplerate : null),
      bf_partitions: new FormControl(aroioSettings.configuration.audio.bf_partitions ? aroioSettings.configuration.audio.bf_partitions : null),
      output_configuration: new FormGroup({
        audio_output: new FormControl(aroioSettings.configuration.audio.output_configuration.audio_output ? aroioSettings.configuration.audio.output_configuration.audio_output : null),
        rate: new FormControl(aroioSettings.configuration.audio.output_configuration.rate ? aroioSettings.configuration.audio.output_configuration.rate : null),
      }),
    });

    this.audioOutputs.forEach(output => {
      (this.form.get('output_configuration') as FormGroup).addControl(output.id, new FormGroup({}));
      output.player.forEach(player => {
        (this.form.get('output_configuration').get(output.id) as FormGroup).addControl(player.id, new FormControl(aroioSettings.configuration.audio.output_configuration[output.id][player.id] ? aroioSettings.configuration.audio.output_configuration[output.id][player.id] : false));
        (this.form.get('output_configuration').get(output.id) as FormGroup).addControl('mscoding', new FormControl(aroioSettings.configuration.audio.output_configuration[output.id]['mscoding'] ? aroioSettings.configuration.audio.output_configuration[output.id]['mscoding'] : false));
        (this.form.get('output_configuration').get(output.id) as FormGroup).addControl('measurement_output', new FormControl(aroioSettings.configuration.audio.output_configuration[output.id]['measurement_output'] ? aroioSettings.configuration.audio.output_configuration[output.id]['measurement_output'] : ''));
      })
    });
  }


  submitForm(event) {
    this.subscriptions.push(
      this.settingsSerivce.setAroioSettingsAudio(this.form.getRawValue()).subscribe(_ => {
        this.alert.alert$.next({message: 'Das Audiosetup erfolgreich gespeichert', type: 'success'});
      }, error => {
        this.alert.alert$.next({message: 'Es ist ein Fehler aufgetreten.', type: 'error'});
      })
    )
  }

  setResamplingConfig(event) {
    if (this.aroioSettings.configuration.webinterface.advanced_configuration) {
      this.currentAdvancedSetup = event;
      this.modalRef = this.modalService.show(this.setAdvancedSetupModal, {class: 'modal--lg'});
    } else {
      Object.keys(event.config).forEach(key => {
        this.form.get(key).setValue(event.config[key])
      });
    }
  }

  changeStereo(outputID, value) {
    this.form.get('output_configuration').get(outputID).get('mscoding').setValue(value);
  }

  changeRadio(outputID, playerID) {
    this.audioOutputs.forEach(output => {
      output.player.forEach(player => {
        if (player.id !== playerID) {
          this.form.get('output_configuration').get(outputID).get(player.id).setValue(false);
        }
      });
    });
    this.form.get('output_configuration').get(outputID).get(playerID).setValue(!this.form.get('output_configuration').get(outputID).get(playerID).value);
  }


  // Modal Specific
  // -----------------------

  saveRate(overwriteAdvancedSetup: boolean){
    if (overwriteAdvancedSetup) {
      Object.keys(this.currentAdvancedSetup.config).forEach(key => {
        this.form.get(key).setValue(this.currentAdvancedSetup.config[key])
      });
    } else {
      this.form.get('output_configuration').get('rate').setValue(this.currentAdvancedSetup.value);
    }
    this.currentAdvancedSetup = null;
    this.modalRef.hide();
    this.modalRef = null;
  }

  modalClose(_index) {
    this.subscriptions.forEach(_ => {
      _.unsubscribe()
    })
    this.modalRef.hide();
    this.modalRef = null;
  }
}
