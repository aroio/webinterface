import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {AroioLayoutModule} from '../layout/layout.module';
import {SystemIndexComponent} from './components/index/index.component';
import {TabsModule} from 'ngx-bootstrap/tabs';

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
    SystemIndexComponent
  ],
  exports: [
    SystemIndexComponent
  ],
  providers: [],
})
export class AroioSystemModule {
}
