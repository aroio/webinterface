import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AroioWiComponent} from './aroio-wi.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TabsModule, TooltipModule} from 'ngx-bootstrap';
import {AroioWiRoutingModule} from './pages/aroio-wi-routing.module';
import {AroioCoreModule} from './modules/core/core.module';


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
    CommonModule,
    BrowserAnimationsModule,
    AroioWiRoutingModule,
    HttpClientModule,
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
  providers: [],
  bootstrap: [AroioWiComponent]
})
export class AroioWiModule { }
