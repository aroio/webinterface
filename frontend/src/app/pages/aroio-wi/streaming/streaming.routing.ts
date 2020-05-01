import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AroioLayoutModule} from '../../../modules/aroio-wi/modules/layout/layout.module';
import {AroioStreamingIndexPage} from './index/index.page';
import {AroioStreamingRootPage} from './root/root.page';
import {CommonModule} from '@angular/common';
import {AroioStreamingModule} from '../../../modules/aroio-wi/modules/streaming/streaming.module';
import {AuthGuard} from '../../../modules/security/guards/authentication.guard';
import {InitialSetupGuard} from '../../../modules/security/guards/initial-setup.guard';

export const AroioStreamingRoutes: Routes = [
  // ---------------------------
  // Streaming
  // ---------------------------

  {
    path: ':lang/streaming',
    component: AroioStreamingRootPage,
    canActivate: [AuthGuard, InitialSetupGuard],
    data: {
      routeName: 'streaming',
      meta: {
        title: 'pages.streaming.meta.title',
        description: 'pages.streaming.meta.description',
        'og:description': 'pages.streaming.meta.description',
        keywords: 'pages.streaming.meta.tags',
      }
    },
    children: [
      {
        path: '',
        component: AroioStreamingIndexPage,
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AroioStreamingRoutes),

    // AroioModules
    AroioLayoutModule,
    AroioStreamingModule,
  ],
  declarations: [
    AroioStreamingRootPage,
    AroioStreamingIndexPage
  ],
  exports: [RouterModule]
})
export class AroioStreamingPageModule {
}
