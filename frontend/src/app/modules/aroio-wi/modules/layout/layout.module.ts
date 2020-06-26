import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {AroioFilterListComponent} from './components/aroio-filter-list/aroio-filter-list.component';
import {AroioFilterListItemComponent} from './components/aroio-filter-list/aroio-filter-list-item/aroio-filter-list-item.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AroioAlertComponent} from './components/aroio-alert/aroio-alert.component';
import {OrderModule} from 'ngx-order-pipe';
import {AroioSystemListComponent} from './components/aroio-system-list/aroio-system-list.component';
import {AroioSystemListItemComponent} from './components/aroio-system-list/aroio-filter-list-item/aroio-system-list-item.component';
import {AroioSidebarWidgetComponent} from './components/aroio-sidebar/aroio-sidebar-widget/aroio-sidebar-widget.component';
import {AroioContentGroupComponent} from './components/aroio-content-group/aroio-content-group.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    FormUtilitiesModule,
    BrowserModule,
    ModalModule,
    BrowserAnimationsModule,
    TooltipModule,
    TabsModule,
    AngularResizedEventModule,
    OrderModule,
  ],
  declarations: [
    // ---------------------------
    // Aroio Stuff
    // ---------------------------
    AroioContentItemComponent,
    AroioMessageComponent,
    AroioFilterListComponent,
    AroioFilterListItemComponent,
    // ---------------------------
    // Layout
    // ---------------------------
    AroioHeaderComponent,
    AroioContentComponent,
    AroioContentGroupComponent,
    AroioFooterComponent,
    AroioLoadingComponent,
    AroioButtonComponent,
    AroioTabsetComponent,
    AroioSidebarComponent,
    AroioSidebarWidgetComponent,
    AroioSwitchComponent,
    AroioFormSwitchComponent,
    AroioLoadingComponent,
    AroioAlertComponent,

    AroioInputComponent,
    AroioSystemListComponent,
    AroioSystemListItemComponent,
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
    AroioMessageComponent,
    AroioFilterListComponent,
    AroioFilterListItemComponent,
    AroioLoadingComponent,
    // ---------------------------
    // Layout
    // ---------------------------
    AroioAlertComponent,
    AroioHeaderComponent,
    AroioContentComponent,
    AroioContentGroupComponent,
    AroioFooterComponent,
    AroioLoadingComponent,
    AroioButtonComponent,
    AroioTabsetComponent,
    AroioSidebarComponent,
    AroioSidebarWidgetComponent,
    AroioSwitchComponent,
    AroioFormSwitchComponent,

    AroioInputComponent,
    AroioSystemListComponent,
    AroioSystemListItemComponent,
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
