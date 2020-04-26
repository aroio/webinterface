import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AroioLayoutModule} from '../../../modules/aroio-wi/modules/layout/layout.module';
import {CommonModule} from '@angular/common';
import {AroioNetworkModule} from '../../../modules/aroio-wi/modules/network/network.module';
import {AroioSecurityRootPage} from './root/root.page';
import {AroioSecuritySelectDeviceIndexPage} from './select-device/select-device.page';
import {AroioSecurityModule} from '../../../modules/aroio-wi/modules/security/security.module';

export const AroioSecurityRoutes: Routes = [
  // ---------------------------
  // Network
  // ---------------------------

  {
    path: ':lang/select-aroio',
    component: AroioSecurityRootPage,
    data: {
      routeName: 'select-aroio',
      meta: {
        title: 'pages.select.meta.title',
        description: 'pages.select.meta.description',
        'og:description': 'pages.select.meta.description',
        keywords: 'pages.select.meta.tags',
      }
    },
    children: [
      {
        path: '',
        component: AroioSecuritySelectDeviceIndexPage,
      },
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AroioSecurityRoutes),

    // AroioModules
    AroioLayoutModule,
    AroioSecurityModule
  ],
  declarations: [
    AroioSecurityRootPage,
    AroioSecuritySelectDeviceIndexPage
  ],
  exports: [RouterModule]
})
export class AroioSecurityPageModule {
}
