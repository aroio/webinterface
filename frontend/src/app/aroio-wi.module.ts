import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AroioWiComponent} from './aroio-wi.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AroioWiRoutingModule} from './pages/aroio-wi-routing.module';
import {AroioCoreModule} from './modules/core/core.module';
import {FormErrorService, FormUtilitiesModule} from '@braune-digital/form-utilities';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ModalModule} from 'ngx-bootstrap/modal';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/content/translations/', '');
}
// Handler for missing translations debuggin
export class TranslateHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    console.log('Missing translation for:', params.key);
  }
}


@NgModule({
  declarations: [
    AroioWiComponent
  ],
  imports: [
    AroioCoreModule,
    BrowserModule,
    FormUtilitiesModule.forRoot(
      {
        displayErrors: true,
        classFormGroup: 'form-group',
        classFromInput: 'form-input',
        classFormInputGroup: 'input-group',
        classFormInputGroupPrepend: 'input-group-prepend',
        classFormInputGroupAppend: 'input-group-append',
        classFormInputGroupText: 'input-group-text',
        classFromLegend: 'form-legend',
        classFormLabel: 'form-label',
        classFormControl: 'form-control',
        classFormCounter: 'form-counter',
        classFormError: 'form-errors',
        classFormHelp: 'form-help',
        classFormRequired: 'form-required',
        classIconBase: 'far',
        requiredString: '*',
        maxLengthString: 'Noch %s Zeichen',
        minLengthString: 'Es fehlen noch %s Zeichen',
        counterBefore: false
      }
    ),
    CommonModule,
    BrowserAnimationsModule,
    AroioWiRoutingModule,
    HttpClientModule,
    SwiperModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      missingTranslationHandler: [{ provide: MissingTranslationHandler, useClass: TranslateHandler }]
    }),
  ],
  providers: [
    FormErrorService
  ],
  bootstrap: [AroioWiComponent]
})
export class AroioWiModule { }
