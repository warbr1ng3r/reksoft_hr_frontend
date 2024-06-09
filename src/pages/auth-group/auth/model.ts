import { makeAutoObservable } from 'mobx';
import { publicApi } from '@/shared/api';
import { authEndpoints } from '@/shared/api/endpoints';
import { sessionModel } from '@/shared/session';

class AuthModel {
  email = '';
  password = '';

  constructor() {
    makeAutoObservable(this);
  }

  async login() {
    publicApi
      .post(authEndpoints.login, {
        json: {
          email: 'user@example.com',
          password: '123'
        }
      })
      .then(() => {
        sessionModel.isAuth = true;
        this.email = '';
        this.password = '';
      });
  }
}

export const authModel = new AuthModel();
