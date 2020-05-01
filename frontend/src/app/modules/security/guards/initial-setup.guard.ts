import {Injectable} from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AroioSettingsService} from '../../core/services/aroio-settings.service';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class InitialSetupGuard implements CanActivate {

  constructor(
    private aroioSettingsService: AroioSettingsService,
    private router: Router,
    private translate: TranslateService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
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
    });
  }
}
