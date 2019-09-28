import {RouterModule, Routes} from '@angular/router';
import {environment} from '../../environments/environment';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {ModalModule, PaginationModule, TabsModule} from 'ngx-bootstrap';
import {ConfigurationPageModule} from './aroio-wi/configuration/configuration.routing';

export const routes: Routes = [
  {path: '', redirectTo: environment.defaultLocale + '/configuration', pathMatch: 'full'},
  {path: ':lang', redirectTo: ':lang/configuration', pathMatch: 'full'},

  // 404 Route (has to initialized at the end)
  // { path: '**', component: NotFoundPage },
  // { path: ':lang/404', pathMatch: 'full', component: NotFoundPage }
];

@NgModule({
  imports: [
    ////////////////////////////////////////
    // Angular Imports
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      paramsInheritanceStrategy: 'always',
      anchorScrolling: 'enabled'
    }),
    TranslateModule,

    ////////////////////////////////////////
    // Ngx-Bootstrap
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),

    ////////////////////////////////////////
    // Aroio Webinterface Imports
    ConfigurationPageModule
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AroioWiRoutingModule {
}
