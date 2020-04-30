/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2018 Braune Digital GmbH
 */
import { StorageInterface } from './Storage.interface';

export abstract class StorageAbstract implements StorageInterface {
  abstract setItem(key: string, token: string);
  abstract getItem(key: string): Promise<string>;
  abstract remove(key: string);
}
