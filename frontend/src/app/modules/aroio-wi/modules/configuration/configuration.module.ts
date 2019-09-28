import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ConfigurationIndexComponent} from './components/index/index.component';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {TabsModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {AroioLayoutModule} from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    TabsModule,
    AroioLayoutModule
  ],
  declarations: [
    ConfigurationIndexComponent,
  ],
  exports: [
    ConfigurationIndexComponent,
  ],
  providers: [],
})
export class ConfigurationModule {
}
