import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AroioLayoutModule} from '../layout/layout.module';
import {FormUtilitiesModule} from '@braune-digital/form-utilities';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {SecuritySelectDeviceComponent} from './components/select-device/select-device.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule,
    AroioLayoutModule,
    FormUtilitiesModule
  ],
  declarations: [
    SecuritySelectDeviceComponent
  ],
  exports: [
    SecuritySelectDeviceComponent
  ],
  providers: [],
})
export class AroioSecurityModule {
}
