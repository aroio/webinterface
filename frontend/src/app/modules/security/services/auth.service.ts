
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { isAfter } from 'date-fns';
import { StorageAbstract } from '../interfaces/Storage.abstract';
import {UserInterface} from '../../core/interfaces/user.interface';

export interface SimpleHeaders {
  [name: string]: string;
}

export interface SimpleCredentials {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {

  /**
   * The key used to store the jwt-token in localStorage.
   *
   * @type {string}
   */
  private static readonly LOCAL_STORAGE_TOKEN_KEY = 'abacus_aroio_token';
  public static user: UserInterface;
  public static onAuthenticate: Subject<UserInterface> = new Subject<UserInterface>();

  constructor(private http: HttpClient) {}

  /**
   * Stores the given token in the localStorage.
   */
  static storeToken(token: string, storage: StorageAbstract): void {

    storage.setItem(AuthService.LOCAL_STORAGE_TOKEN_KEY, token);
  }

  /**
   * Fetches a saved token from the localStorage.
   */
  static retrieveToken(storage: StorageAbstract): Promise<string> {
    return storage.getItem(AuthService.LOCAL_STORAGE_TOKEN_KEY);
  }

  /**
   * Deletes a saved token from the localStorage.
   */
  static deleteToken(storage: StorageAbstract): void {
    storage.remove(AuthService.LOCAL_STORAGE_TOKEN_KEY);
  }

  /**
   * Returns the headers needed for authenticated requests.
   */
  static getAuthorizationHeader(storage: StorageAbstract): Promise<SimpleHeaders> {
    return new Promise<SimpleHeaders>((resolve, reject) => {
      AuthService.retrieveToken(storage).then(token => {
        if (token) {
          resolve({ 'Authorization': 'Bearer ' + token });
        } else {
          resolve(null);
        }
      }, error => {
        resolve(null);
      });
    });
  }

  /**
   * Returns true if there is a stored token in localStorage.
   *
   */
  static isAuthenticated(storage: StorageAbstract): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      AuthService.retrieveToken(storage).then(token => {
        if (token) {
          const decoded = jwt_decode(token);
          if (isAfter(new Date(decoded['exp'] * 1000), new Date())) {
            AuthService.setUser(token);
            resolve(true);
          } else {
            AuthService.forgetToken(storage);
            reject(false);
          }
        } else {
          reject(false);
        }
      });
    });
  }

  static setUser(token: string) {
    const decoded = jwt_decode(token);
    if (decoded['user']) {
      AuthService.user = { ...decoded['user'], 'roles': decoded['roles'] };
      AuthService.user.access_token = token;
      AuthService.onAuthenticate.next(AuthService.user);
    }
  }

  /**
   * Removes the stored token and redirects the user to the login screen.
   */
  static forgetToken(storage: StorageAbstract): void {
    AuthService.deleteToken(storage);
    AuthService.onAuthenticate.next();
  }


  /**
   * Requests a jwt token from the remote.
   *
   */
  getToken(credentials: SimpleCredentials, storage: StorageAbstract): Observable<Object> {
    return new Observable((observable) => {
      this.http.post('/login', credentials).subscribe(
        (response: { access_token: string }) => {
          AuthService.storeToken(response.access_token, storage);
          AuthService.setUser(response.access_token);
          observable.next(response);
        },
        error => {
          observable.error(error);
        }
      );
    });
  }


  activate<T>(token: string, storage: StorageAbstract): Observable<T> {
    return this.http.get<T>('/auth/activate/' + token);
  }
}
