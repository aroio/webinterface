import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AroioLayoutModule} from '../../../modules/aroio-wi/modules/layout/layout.module';
import {AroioStreamingIndexPage} from './index/index.page';
import {AroioStreamingRootPage} from './root/root.page';
import {CommonModule} from '@angular/common';
import {TabsModule} from 'ngx-bootstrap';
import {AroioAudioModule} from '../../../modules/aroio-wi/modules/audio/audio.module';
import {AroioConvolverModule} from '../../../modules/aroio-wi/modules/convolver/convolver.module';
import {AroioNetworkModule} from '../../../modules/aroio-wi/modules/network/network.module';
import {AroioStreamingModule} from '../../../modules/aroio-wi/modules/streaming/streaming.module';
import {AroioSystemModule} from '../../../modules/aroio-wi/modules/system/system.module';

export const AroioStreamingRoutes: Routes = [
  // ---------------------------
  // Streaming
  // ---------------------------

  {
    path: ':lang/streaming',
    component: AroioStreamingRootPage,
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
