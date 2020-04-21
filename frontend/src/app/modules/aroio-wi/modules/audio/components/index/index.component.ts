import {Component, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {AroioOutputs} from '../../../../../../utils/audio-configuration';
import {FormControl, FormGroup} from '@angular/forms';
import {AroioSettingsService} from '../../../../../core/services/aroio-settings.service';
import {AroioSettingsInterface} from '../../../../../core/interfaces/aroio-settings.interface';

@Component({
  selector: '<aroio-audio-index-component>',
  templateUrl: './index.component.html'
})
export class AudioIndexComponent implements OnInit {


  audioOutputs = AroioOutputs;
  activeOutput = 1;
  index = 0;
  switchState = [];

  form: FormGroup;

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,
    threshold: 3,
  };

  constructor(

  ) {
  }

  ngOnInit() {

    this.form = new FormGroup({});
    this.audioOutputs.forEach(output => {
      output.player.forEach(player => {
        this.form.addControl(output.id + '_' + player.id, new FormControl(''));
      })
    });
  }


  getCheckboxState(switchState, id) {
    return this.switchState[id];
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
