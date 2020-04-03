import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {TabsModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AroioLayoutModule} from '../layout/layout.module';
import {NetworkIndexComponent} from './components/index/index.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule,
    AroioLayoutModule
  ],
  declarations: [
    NetworkIndexComponent,
  ],
  exports: [
    NetworkIndexComponent,
  ],
  providers: [],
})
export class AroioNetworkModule {
}
