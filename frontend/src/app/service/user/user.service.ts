import { Injectable } from '@angular/core';
import { BaseService } from '../../core/interface/base.service';
import { AuthURL } from '../../shared/url/url.domain';
import 'rxjs/add/operator/map';

export const STORAGE_KEY = 'user';

/**
 * Service for operations with user.
 */
@Injectable()
export class UserService extends BaseService {

  /**
   * Verify if the user is logged.
   *
   * @returns {boolean}
   */
  isLogged(): boolean {
    return this.getUser() !== null;
  }

  register(username, email, password) {
    return this.post(AuthURL.REGISTER,
      {
        username: username,
        email: email,
        password: password
      });
  }

  /**
   * Login the user and gets the token authorization.
   *
   * @param {String} username
   * @param {String} password
   * @returns {Observable<Object>}
   */
  login(username, password) {
    return this.post(AuthURL.LOGIN,
      {
        username: username,
        password: password
      }
    ).map((r: any) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(r));
      return r;
    });
  }

  getProfile() {
    return this.isLogged() ? this.getUser()['role'] : this.getUser();
  }

  /**
   * Logout the user.
   */
  logout(): void {
    this.post(AuthURL.LOGOUT, {}).subscribe(() => {
      localStorage.removeItem(STORAGE_KEY);
      window.location.replace('/');
    });
  }
}

