import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AroioLayoutModule} from '../../../modules/aroio-wi/modules/layout/layout.module';
import {AroioImprintRootPage} from './root/root.page';
import {CommonModule} from '@angular/common';
import {AroioImprintPage} from './imprint/imprint.page';
import {AroioImprintModule} from '../../../modules/aroio-wi/modules/imprint/imprint.module';
import {AroioAbacusPage} from './abacus/abacus.page';
import {AroioSupportPage} from './support/support.page';

export const AroioImprintRoutes: Routes = [
  // ---------------------------
  // Imprint Pages
  // ---------------------------

  {
    path: ':lang/abacus',
    component: AroioImprintRootPage,
    data: {
      routeName: 'abacus',
      meta: {
        title: 'pages.abacus.meta.title',
        description: 'pages.abacus.meta.description',
        'og:description': 'pages.abacus.meta.description',
        keywords: 'pages.abacus.meta.tags',
      }
    },
    children: [
      {
        path: '',
        component: AroioAbacusPage,
      },
    ]
  },
  {
    path: ':lang/impressum',
    component: AroioImprintRootPage,
    data: {
      routeName: 'impressum',
      meta: {
        title: 'pages.impressum.meta.title',
        description: 'pages.impressum.meta.description',
        'og:description': 'pages.impressum.meta.description',
        keywords: 'pages.impressum.meta.tags',
      }
    },
    children: [
      {
        path: '',
        component: AroioImprintPage,
      },
    ]
  },
  {
    path: ':lang/support',
    component: AroioImprintRootPage,
    data: {
      routeName: 'support',
      meta: {
        title: 'pages.support.meta.title',
        description: 'pages.support.meta.description',
        'og:description': 'pages.support.meta.description',
        keywords: 'pages.support.meta.tags',
      }
    },
    children: [
      {
        path: '',
        component: AroioSupportPage,
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AroioImprintRoutes),

    // AroioModules
    AroioLayoutModule,
    AroioImprintModule
  ],
  declarations: [
    AroioImprintRootPage,
    AroioSupportPage,
    AroioAbacusPage,
    AroioImprintPage
  ],
  exports: [RouterModule]
})
export class AroioImprintPageModule {
}
