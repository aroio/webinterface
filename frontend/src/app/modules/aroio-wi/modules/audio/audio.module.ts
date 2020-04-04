import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {TabsModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {AroioLayoutModule} from '../layout/layout.module';
import {AudioIndexComponent} from './components/index/index.component';

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
    AudioIndexComponent,
  ],
  exports: [
    AudioIndexComponent,
  ],
  providers: [],
})
export class AroioAudioModule {
}