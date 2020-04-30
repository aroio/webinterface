/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */

import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';


@Injectable()
export class RoleAccessService {

  constructor() { }

  hasAccess(roles: Array<string>): boolean {
    // if module is set, check for access, allow if no module is present
    if (roles) {
      if (AuthService.user.roles.filter(role => roles.includes(role)).length > 0) {
        return true;
      } else {
        return false;
      }
    }

    return true;
  }

}
