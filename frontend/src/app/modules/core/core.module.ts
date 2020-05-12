import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NavigationService} from './services/navigation.service';
import {AroioAlertService} from './services/alert.service';
import {HasAdvancedConfigDirective} from './directives/has-advanced-config.directive';
import {HasNotAdvancedConfigDirective} from './directives/has-not-advanced-config.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [
    HasNotAdvancedConfigDirective,
    HasAdvancedConfigDirective
  ],
  exports: [
    HasAdvancedConfigDirective,
    HasNotAdvancedConfigDirective,
    AroioAlertService
  ],
  providers: [
    NavigationService,
    AroioAlertService
  ],
})
export class AroioCoreModule {
}
