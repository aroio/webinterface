import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AroioLayoutModule} from '../../../modules/aroio-wi/modules/layout/layout.module';
import {AroioConvolverIndexPage} from './index/index.page';
import {AroioConvolverRootPage} from './root/root.page';
import {CommonModule} from '@angular/common';
import {AroioConvolverModule} from '../../../modules/aroio-wi/modules/convolver/convolver.module';

export const ConvolverRoutes: Routes = [
  // ---------------------------
  // Configuration
  // ---------------------------

  {
    path: ':lang/convolver',
    component: AroioConvolverRootPage,
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
    AroioConvolverIndexPage
  ],
  exports: [RouterModule]
})
export class AroioConvolverPageModule {
}
