import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AroioLayoutModule} from '../../../modules/aroio-wi/modules/layout/layout.module';
import {AroioSystemIndexPage} from './index/index.page';
import {AroioSystemRootPage} from './root/root.page';
import {CommonModule} from '@angular/common';
import {AroioSystemModule} from '../../../modules/aroio-wi/modules/system/system.module';
import {AuthGuard} from '../../../modules/security/guards/authentication.guard';
import {InitialSetupGuard} from '../../../modules/security/guards/initial-setup.guard';

export const AroioSystemRoutes: Routes = [
  // ---------------------------
  // Configuration
  // ---------------------------

  {
    path: ':lang/system',
    component: AroioSystemRootPage,
    canActivate: [AuthGuard, InitialSetupGuard],
    data: {
      routeName: 'system',
      meta: {
        title: 'pages.system.meta.title',
        description: 'pages.system.meta.description',
        'og:description': 'pages.system.meta.description',
        keywords: 'pages.system.meta.tags',
      }
    },
    children: [
      {
        path: '',
        component: AroioSystemIndexPage,
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AroioSystemRoutes),

    // AroioModules
    AroioLayoutModule,
    AroioSystemModule
  ],
  declarations: [
    AroioSystemRootPage,
    AroioSystemIndexPage
  ],
  exports: [RouterModule]
})
export class AroioSystemPageModule {
}
