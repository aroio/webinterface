import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AroioLayoutModule} from '../layout/layout.module';
import {AudioIndexComponent} from './components/index/index.component';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {AroioCoreModule} from '../../../core/core.module';
import {FormUtilitiesModule} from '@braune-digital/form-utilities';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    FormUtilitiesModule,
    TabsModule,
    AroioLayoutModule,
    AroioCoreModule,
    SwiperModule
  ],
  declarations: [
    AudioIndexComponent,
  ],
  exports: [
    AudioIndexComponent,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
})
export class AroioAudioModule {
}
