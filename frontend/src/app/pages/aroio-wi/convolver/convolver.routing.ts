import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AroioLayoutModule} from '../../../modules/aroio-wi/modules/layout/layout.module';
import {AroioConvolverIndexPage} from './index/index.page';
import {AroioConvolverRootPage} from './root/root.page';
import {CommonModule} from '@angular/common';
import {AroioConvolverModule} from '../../../modules/aroio-wi/modules/convolver/convolver.module';
import {AroioConvolverWizardPage} from './wizard/wizard.page';
import {AuthGuard} from '../../../modules/security/guards/authentication.guard';

export const ConvolverRoutes: Routes = [
  // ---------------------------
  // Configuration
  // ---------------------------

  {
    path: ':lang/convolver',
    component: AroioConvolverRootPage,
    canActivate: [AuthGuard],
    data: {
      routeName: 'convolver',
      meta: {
        title: 'pages.convolver.meta.title',
        description: 'pages.convolver.meta.description',
        'og:description': 'pages.convolver.meta.description',
        keywords: 'pages.convolver.meta.tags',
      }
    },
    children: [
      {
        path: '',
        component: AroioConvolverIndexPage,
      },
      {
        path: 'wizard',
        pathMatch: 'full',
        component: AroioConvolverWizardPage,
        data: {
          routeName: 'convolver_wizard',
          meta: {
            title: 'pages.convolver.meta.title',
            description: 'pages.convolver.meta.description',
            'og:description': 'pages.convolver.meta.description',
            keywords: 'pages.convolver.meta.tags',
          }
        },
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ConvolverRoutes),

    // AroioModules
    AroioLayoutModule,
    AroioConvolverModule,
  ],
  declarations: [
    AroioConvolverRootPage,
    AroioConvolverIndexPage,
    AroioConvolverWizardPage
  ],
  exports: [RouterModule]
})
export class AroioConvolverPageModule {
}
