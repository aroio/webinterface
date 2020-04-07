import {Component, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {AroioOutputs} from '../../../../../../utils/audio-configuration';

@Component({
  selector: '<aroio-audio-index-component>',
  templateUrl: './index.component.html'
})
export class AudioIndexComponent implements OnInit {


  audioOutputs = AroioOutputs;
  activeOutput = 1;
  index = 0;

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,
    threshold: 3,
  };


  constructor() {
  }

  ngOnInit() {
  }



  changeSelect(index) {
    setTimeout(_ => {
      console.log(index);
      // this.activeOutput = index;
    }, 0);
  }

}
