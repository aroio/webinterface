import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {environment} from '../../environments/environment';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {AroioAudioPageModule} from './aroio-wi/audio/audio.routing';
import {AroioConvolverPageModule} from './aroio-wi/convolver/convolver.routing';
import {AroioNetworkPageModule} from './aroio-wi/network/network.routing';
import {AroioStreamingPageModule} from './aroio-wi/streaming/streaming.routing';
import {AroioSystemPageModule} from './aroio-wi/system/system.routing';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AroioSecurityPageModule} from './aroio-wi/security/security.routing';
import {SecurityModule} from '../modules/security/security.module';
import {AroioImprintPageModule} from './aroio-wi/imprint/imprint.routing';
import {AroioLayoutModule} from '../modules/aroio-wi/modules/layout/layout.module';

export const routes: Routes = [
  {path: '', redirectTo: environment.defaultLocale + '/network', pathMatch: 'full'},
  {path: ':lang', redirectTo: ':lang/network', pathMatch: 'full'},

  // 404 Route (has to initialized at the end)
  // { path: '**', component: NotFoundPage },
  // { path: ':lang/404', pathMatch: 'full', component: NotFoundPage }
];

@NgModule({
  imports: [
    ////////////////////////////////////////
    // Angular Imports
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      paramsInheritanceStrategy: 'always',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules
    }),
    TranslateModule,
    SecurityModule,
    AroioLayoutModule,

    ////////////////////////////////////////
    // Ngx-Bootstrap
    PaginationModule.forRoot(),
    ModalModule.forRoot(),

    ////////////////////////////////////////
    // Aroio Webinterface Imports
    AroioAudioPageModule,
    AroioConvolverPageModule,
    AroioNetworkPageModule,
    AroioStreamingPageModule,
    AroioSystemPageModule,
    AroioSecurityPageModule,
    AroioImprintPageModule
  ],
  declarations: [],
  exports: [
    RouterModule,

  ]
})
export class AroioWiRoutingModule {
}
