import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { LoginComponent } from './components/login/components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormUtilitiesModule } from '@braune-digital/form-utilities';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HasRoleDirective } from './directives/has-role.directive';
import { HasNotRoleDirective } from './directives/has-not-role.directive';
import { IsAuthorizedDirective } from './directives/is-authorized.directive';
import { IsNotAuthorizedDirective } from './directives/is-not-authorized.directive';
import { ModuleAccessDirective } from './directives/module-access.directive';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { ErrorService } from './services/error.service';
import { ModuleAccessService } from './services/module-access.service';
import { DefaultPageResolverService } from './services/default-page-resolver.service';
import { RoleAccessService } from './services/role-access.service';
import { AuthGuard } from './guards/authentication.guard';
import { ModuleAccessGuard } from './guards/module-access.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { LocaleInterceptor } from './interceptors/locale.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { LoginIndexComponent } from './components/login/components/index/index.component';
import {NotFoundComponent} from './components/not-found/components/not-found/not-found.component';
import {NotFoundIndexComponent} from './components/not-found/components/index/index.component';
import {PasswordRequestComponent} from './components/password-request/components/password-request/password-request.component';
import {PasswordRequestIndexComponent} from './components/password-request/components/index/index.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {PasswordResetComponent} from './components/password-reset/components/password-reset/password-reset.component';
import {PasswordResetIndexComponent} from './components/password-reset/components/index/index.component';
import {SecuritySelectDeviceComponent} from './components/select-device/select-device.component';
import {NoAccessComponent} from './components/no-access/components/no-access/no-access.component';
import {NoAccessIndexComponent} from './components/no-access/components/index/index.component';
import {AroioLayoutModule} from '../aroio-wi/modules/layout/layout.module';
import {AroioCoreModule} from '../core/core.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule,
        ReactiveFormsModule,
        AroioLayoutModule,
        AroioCoreModule,
        FormUtilitiesModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
    ],
    declarations: [
        LoginComponent,
        LoginIndexComponent,
        LogoutComponent,
        NotFoundComponent,
        NotFoundIndexComponent,
        PasswordRequestComponent,
        PasswordRequestIndexComponent,
        PasswordResetComponent,
        PasswordResetIndexComponent,
        HasRoleDirective,
        HasNotRoleDirective,
        IsAuthorizedDirective,
        IsNotAuthorizedDirective,
        ModuleAccessDirective,
        SecuritySelectDeviceComponent,
        NoAccessComponent,
        NoAccessIndexComponent
    ],
    exports: [
        LoginComponent,
        LogoutComponent,
        LoginIndexComponent,
        NotFoundComponent,
        NotFoundIndexComponent,
        PasswordRequestComponent,
        PasswordRequestIndexComponent,
        PasswordResetComponent,
        PasswordResetIndexComponent,
        HasRoleDirective,
        HasNotRoleDirective,
        IsAuthorizedDirective,
        IsNotAuthorizedDirective,
        ModuleAccessDirective,
        SecuritySelectDeviceComponent,
        NoAccessComponent,
        NoAccessIndexComponent
    ]
})
export class SecurityModule {
    static forRoot(config: { storage?: Provider } = {}): ModuleWithProviders {
        return {
            ngModule: SecurityModule,
            providers: [
                config.storage || StorageService,
                AuthService,
                ErrorService,
                ModuleAccessService,
                DefaultPageResolverService,
                RoleAccessService,
                AuthGuard,
                ModuleAccessGuard,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ApiInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: LocaleInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: JwtInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ErrorInterceptor,
                    multi: true
                }
            ]
        };
    }
}
