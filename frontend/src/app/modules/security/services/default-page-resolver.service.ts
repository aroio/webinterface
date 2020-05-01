import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {environment} from '../../../../environments/environment';


@Injectable()
export class DefaultPageResolverService {

  resolve(): Array<string> {
    const roles = AuthService.user.roles.filter((role) => {
      if (environment.defaultPage[role]) {
        return true;
      }
      return false;
    });
    return environment.defaultPage[roles[0]];
  }

}
