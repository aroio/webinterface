/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */

import {Injectable} from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { ModuleAccessService } from '../services/module-access.service';
import {Observable} from 'rxjs';

@Injectable()
export class ModuleAccessGuard implements CanActivate {

  constructor(private moduleAccess: ModuleAccessService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {

    return this.moduleAccess.hasAccess(route.data['moduleAccess']);
  }
}
