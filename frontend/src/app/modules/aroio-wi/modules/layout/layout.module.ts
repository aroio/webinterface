import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabsModule, TooltipModule} from 'ngx-bootstrap';
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

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
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
    // ---------------------------
    // Utils
    // ---------------------------
    AroioBadgeComponent,
    AroioMessageComponent,
    AroioProgressBarComponent,
    AroioProgressCircleComponent,
  ],
  providers: [
    ElementHeightService
  ],
  entryComponents: [],

})
export class AroioLayoutModule {
}
