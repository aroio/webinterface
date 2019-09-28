import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AroioLayoutModule} from '../../../modules/aroio-wi/modules/layout/layout.module';
import {ConfigurationIndexPage} from './index/index.page';
import {ConfigurationRootPage} from './root/root.page';
import {CommonModule} from '@angular/common';
import {ConfigurationModule} from '../../../modules/aroio-wi/modules/configuration/configuration.module';

export const ConfigurationRoutes: Routes = [
  // ---------------------------
  // Configuration
  // ---------------------------

  {
    path: ':lang/configuration',
    component: ConfigurationRootPage,
    data: {
      routeName: 'configuration',
      meta: {
        title: 'pages.configuration.meta.title',
        description: 'pages.configuration.meta.description',
        'og:description': 'pages.configuration.meta.description',
        keywords: 'pages.configuration.meta.tags',
      }
    },
    children: [
      {
        path: '',
        component: ConfigurationIndexPage,
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    AroioLayoutModule,
    ConfigurationModule,
    RouterModule.forChild(ConfigurationRoutes),
  ],
  declarations: [
    ConfigurationRootPage,
    ConfigurationIndexPage
  ],
  exports: [RouterModule]
})
export class ConfigurationPageModule {
}
