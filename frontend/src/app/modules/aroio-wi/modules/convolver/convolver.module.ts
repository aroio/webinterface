import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AroioLayoutModule} from '../layout/layout.module';
import {ConvolverIndexComponent} from './components/index/index.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConvolverWizardComponent} from './components/wizard/wizard.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    TabsModule,
    AroioLayoutModule,
    ArchwizardModule
  ],
  declarations: [
    ConvolverIndexComponent,
    ConvolverWizardComponent
  ],
  exports: [
    ConvolverIndexComponent,
    ConvolverWizardComponent
  ],
  providers: [],
})
export class AroioConvolverModule {
}
