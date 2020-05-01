import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AroioLayoutModule} from '../../../modules/aroio-wi/modules/layout/layout.module';
import {CommonModule} from '@angular/common';
import {AroioSecurityRootPage} from './root/root.page';
import {AroioSecuritySelectDeviceIndexPage} from './select-device/select-device.page';
import {LoginPage} from './login/login.page';
import {LogoutPage} from './logout/logout.page';
import {NotFoundPage} from './not-found/not-found.page';
import {NoAccessPage} from './no-access/no-access.page';
import {PasswordRequestPage} from './password-request/password-request.page';
import {PasswordResetPage} from './password-reset/password-reset.page';
import {SecurityModule} from '../../../modules/security/security.module';
import {AuthGuard} from '../../../modules/security/guards/authentication.guard';

export const AroioSecurityRoutes: Routes = [
  // ---------------------------
  // Network
  // ---------------------------

  {
    path: ':lang/select-aroio',
    component: AroioSecurityRootPage,
    canActivate: [AuthGuard],
    data: {
      routeName: 'select-aroio',
      meta: {
        title: 'pages.select.meta.title',
        description: 'pages.select.meta.description',
        'og:description': 'pages.select.meta.description',
        keywords: 'pages.select.meta.tags',
      }
    },
    children: [
      {
        path: '',
        component: AroioSecuritySelectDeviceIndexPage,
      },
    ]
  },
  {
    path: ':lang/login',
    component: AroioSecurityRootPage,
    data: {
      routeName: 'login',
      hideSidebar: true,
      meta: {
        title: 'security.login.meta.title',
        description: 'security.login.meta.description',
        'og:description': 'security.login.meta.description',
        keywords: 'security.login.meta.tags',
      }
    },
    children: [
      {
        path: '',
        component: LoginPage,
      }
    ]
  },
  {
    path: ':lang/logout',
    component: LogoutPage,
    data: {
      routeName: 'logout',
      hideSidebar: true,
      meta: {
        title: 'security.logout.meta.title',
        description: 'security.logout.meta.description',
        'og:description': 'security.logout.meta.description',
        keywords: 'security.logout.meta.tags',
      }
    }
  },
  {
    path: ':lang/404',
    component: NotFoundPage,
    data: {
      routeName: '404',
      meta: {
        title: 'security.not_found.meta.title',
        description: 'security.not_found.meta.description',
        'og:description': 'security.not_found.meta.description',
        keywords: 'security.not_found.meta.tags',
      }
    }
  },
  {
    path: ':lang/no-access',
    component: NoAccessPage,
    data: {
      routeName: 'no_access',
      meta: {
        title: 'security.no_access.meta.title',
        description: 'security.no_access.meta.description',
        'og:description': 'security.no_access.meta.description',
        keywords: 'security.no_access.meta.tags',
      }
    }
  },
  {
    path: ':lang/password-request',
    component: PasswordRequestPage,
    data: {
      routeName: 'password-request',
      hideSidebar: true,
      meta: {
        title: 'security.password_request.meta.title',
        description: 'security.password_request.meta.description',
        'og:description': 'security.password_request.meta.description',
        keywords: 'security.password_request.meta.tags',
      }
    }
  },
  {
    path: ':lang/password-reset/:hash',
    component: PasswordResetPage,
    data: {
      routeName: 'password-reset',
      hideSidebar: true,
      meta: {
        title: 'security.password_reset.meta.title',
        description: 'security.password_reset.meta.description',
        'og:description': 'security.password_reset.meta.description',
        keywords: 'security.password_reset.meta.tags',
      }
    }
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AroioSecurityRoutes),

    // AroioModules
    AroioLayoutModule,
    SecurityModule
  ],
  declarations: [
    AroioSecurityRootPage,
    LoginPage,
    LogoutPage,
    NotFoundPage,
    NoAccessPage,
    PasswordRequestPage,
    PasswordResetPage,
    AroioSecuritySelectDeviceIndexPage
  ],
  exports: [RouterModule]
})
export class AroioSecurityPageModule {
}
