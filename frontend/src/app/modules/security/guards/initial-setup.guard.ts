import {Injectable} from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AroioSettingsService} from '../../core/services/aroio-settings.service';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../services/auth.service';
import {StorageService} from '../services/storage.service';

@Injectable()
export class InitialSetupGuard implements CanActivate {

  constructor(
    private aroioSettingsService: AroioSettingsService,
    private router: Router,
    private translate: TranslateService,
    private storage: StorageService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      AuthService.isAuthenticated(this.storage).then(r => {
        this.aroioSettingsService.getAroioSettings().subscribe(_ => {
          if (!_.configuration.webinterface.initial_setup) {
            resolve(true);
          } else {
            this.router.navigate(['/', this.translate.currentLang, 'select-aroio'], {queryParams: {returnUrl: state.url}});
            resolve(false);
          }
        }, error => {
          this.router.navigate(['/', this.translate.currentLang, 'select-aroio'], {queryParams: {returnUrl: state.url}});
          resolve(false);
        });
      }, (e) => {
        this.router.navigate(['/', this.translate.currentLang, 'login' ], { queryParams: { returnUrl: state.url }});
        resolve(false);
      });
    });
  }
}
