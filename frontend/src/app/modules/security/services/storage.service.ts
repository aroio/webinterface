/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2018 Braune Digital GmbH
 */

import {StorageAbstract} from '../interfaces/Storage.abstract';
import {StorageInterface} from '../interfaces/Storage.interface';
import {Injectable} from '@angular/core';


@Injectable()
export class StorageService extends StorageAbstract implements StorageInterface {

  setItem(key: string, token: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, token);
    }
  }

  getItem(key: string): any {
    if (typeof localStorage !== 'undefined') {
      return Promise.resolve(localStorage.getItem(key));
    } else {
      return '';
    }
  }

  remove(key: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key);
    }
  }

}
