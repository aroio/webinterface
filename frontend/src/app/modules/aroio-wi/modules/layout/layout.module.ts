import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ElementHeightService} from './services/elementHeight.service';
import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import {AroioContentItemComponent} from './components/aroio-content-item/aroio-content-item.component';
import {AngularResizedEventModule} from 'angular-resize-event';
import {AroioLoadingComponent} from './utils/aroio-loading/aroio-loading.component';
import {AroioBadgeComponent} from './utils/aroio-badge/aroio-badge.component';
import {AroioMessageComponent} from './utils/aroio-message/aroio-message.component';
import {AroioProgressBarComponent} from './utils/aroio-progress-bar/aroio-progress-bar.component';
import {AroioProgressCircleComponent} from './utils/aroio-progress-circle/aroio-progress-circle.component';
import {AroioButtonComponent} from './components/aroio-button/aroio-button.component';
import {AroioTabsetComponent} from './components/aroio-tabset/aroio-tabset.component';
import {AroioHeaderComponent} from './components/aroio-header/aroio-header.component';
import {AroioFooterComponent} from './components/aroio-footer/aroio-footer.component';
import {AroioContentComponent} from './components/aroio-content/aroio-content.component';
import {AroioSidebarComponent} from './components/aroio-sidebar/aroio-sidebar.component';
import {AroioSwitchComponent} from './components/aroio-switch/aroio-switch.component';
import {AroioFormSwitchComponent} from './components/aroio-form-switch/aroio-form-switch.component';
import {AroioInputComponent} from './components/aroio-input/aroio-input.component';
import {FormErrorService, FormUtilitiesModule} from '@braune-digital/form-utilities';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {TabsModule} from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    FormUtilitiesModule,
    BrowserModule,
    BrowserAnimationsModule,
    TooltipModule,
    TabsModule,
    AngularStickyThingsModule,
    AngularResizedEventModule
  ],
  declarations: [
    // ---------------------------
    // Aroio Stuff
    // ---------------------------
    AroioContentItemComponent,

    // ---------------------------
    // Layout
    // ---------------------------
    AroioHeaderComponent,
    AroioContentComponent,
    AroioFooterComponent,
    AroioLoadingComponent,
    AroioButtonComponent,
    AroioTabsetComponent,
    AroioSidebarComponent,
    AroioSwitchComponent,
    AroioFormSwitchComponent,

    AroioInputComponent,
    // ---------------------------
    // ---------------------------
    AroioBadgeComponent,
    AroioMessageComponent,
    AroioProgressBarComponent,
    AroioProgressCircleComponent,
  ],
  exports: [
    // ---------------------------
    // Aroio Stuff
    // ---------------------------
    AroioContentItemComponent,
    // ---------------------------
    // Layout
    // ---------------------------
    AroioHeaderComponent,
    AroioContentComponent,
    AroioFooterComponent,
    AroioLoadingComponent,
    AroioButtonComponent,
    AroioTabsetComponent,
    AroioSidebarComponent,
    AroioSwitchComponent,
    AroioFormSwitchComponent,

    AroioInputComponent,
    // ---------------------------
    // Utils
    // ---------------------------
    AroioBadgeComponent,
    AroioMessageComponent,
    AroioProgressBarComponent,
    AroioProgressCircleComponent,
  ],
  providers: [
    FormErrorService
  ],
  entryComponents: [],

})
export class AroioLayoutModule {
}
