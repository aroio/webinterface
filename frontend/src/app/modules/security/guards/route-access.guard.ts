/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 5:47 PM Braune Digital GmbH
 */

import { Inject, Injectable, forwardRef } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RouteAccessGuard implements CanActivate {

  static readonly DEFAULT_ROLE = 'ROLE_USER';

  constructor( @Inject(forwardRef(() => AuthService)) private auth: AuthService, private router: Router) { }

  /**
   * This method will simply redirect any route not starting with the roles defined frontend_base_path to the frontend_base_path.
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<boolean> | Promise<boolean> | boolean}
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.startsWithUserBasePath(route)) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

  private startsWithUserBasePath(route: ActivatedRouteSnapshot): boolean {
    // get the users role (should only one left)
    const role = AuthService.user.roles.filter(role => role !== RouteAccessGuard.DEFAULT_ROLE)[0];

    // get the frontend_base_path
    const frontend_base_path = '/';

    if (frontend_base_path) {
      // check if user is allowed to access this path
      return route.url.length && route.url[0].path === frontend_base_path;
    }
    return false;
  }
}
