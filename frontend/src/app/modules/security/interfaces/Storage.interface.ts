/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2018 Braune Digital GmbH
 */

export declare interface StorageInterface{
  setItem(key:string, token: string);
  getItem(key: string);
  remove(key: string);
}
