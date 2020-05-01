import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AroioLayoutModule} from '../../../modules/aroio-wi/modules/layout/layout.module';
import {AroioAudioIndexPage} from './index/index.page';
import {AroioAudioRootPage} from './root/root.page';
import {CommonModule} from '@angular/common';
import {AroioAudioModule} from '../../../modules/aroio-wi/modules/audio/audio.module';
import {AuthGuard} from '../../../modules/security/guards/authentication.guard';
import {InitialSetupGuard} from '../../../modules/security/guards/initial-setup.guard';

export const AudioRoutes: Routes = [
  // ---------------------------
  // Audio
  // ---------------------------

  {
    path: ':lang/audio',
    component: AroioAudioRootPage,
    canActivate: [AuthGuard, InitialSetupGuard],
    data: {
      routeName: 'audio',
      meta: {
        title: 'pages.audio.meta.title',
        description: 'pages.audio.meta.description',
        'og:description': 'pages.audio.meta.description',
        keywords: 'pages.audio.meta.tags',
      }
    },
    children: [
      {
        path: '',
        component: AroioAudioIndexPage,
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AudioRoutes),

    // AroioModules
    AroioLayoutModule,
    AroioAudioModule
  ],
  declarations: [
    AroioAudioRootPage,
    AroioAudioIndexPage
  ],
  exports: [RouterModule]
})
export class AroioAudioPageModule {
}
