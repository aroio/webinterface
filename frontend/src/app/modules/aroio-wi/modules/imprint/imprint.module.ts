import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AroioLayoutModule} from '../layout/layout.module';
import {AroioImprintComponent} from './components/imprint/imprint.component';
import {AroioSupportComponent} from './components/support/support.component';
import {AroioAbacusComponent} from './components/abacus/abacus.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    AroioLayoutModule,
  ],
  declarations: [
    AroioImprintComponent,
    AroioSupportComponent,
    AroioAbacusComponent
  ],
  exports: [
    AroioImprintComponent,
    AroioSupportComponent,
    AroioAbacusComponent
  ],
  providers: [],
})
export class AroioImprintModule {
}
