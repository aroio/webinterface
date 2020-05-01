import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AroioLayoutModule} from '../../../modules/aroio-wi/modules/layout/layout.module';
import {AroioNetworkIndexPage} from './index/index.page';
import {AroioNetworkRootPage} from './root/root.page';
import {CommonModule} from '@angular/common';
import {AroioNetworkModule} from '../../../modules/aroio-wi/modules/network/network.module';
import {AuthGuard} from '../../../modules/security/guards/authentication.guard';
import {InitialSetupGuard} from '../../../modules/security/guards/initial-setup.guard';

export const AroioNetworkRoutes: Routes = [
  // ---------------------------
  // Network
  // ---------------------------

  {
    path: ':lang/network',
    component: AroioNetworkRootPage,
    canActivate: [AuthGuard, InitialSetupGuard],
    data: {
      routeName: 'network',
      meta: {
        title: 'pages.network.meta.title',
        description: 'pages.network.meta.description',
        'og:description': 'pages.network.meta.description',
        keywords: 'pages.network.meta.tags',
      }
    },
    children: [
      {
        path: '',
        component: AroioNetworkIndexPage,
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AroioNetworkRoutes),

    // AroioModules
    AroioLayoutModule,
    AroioNetworkModule,
  ],
  declarations: [
    AroioNetworkRootPage,
    AroioNetworkIndexPage
  ],
  exports: [RouterModule]
})
export class AroioNetworkPageModule {
}
