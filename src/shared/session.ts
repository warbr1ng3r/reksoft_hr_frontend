import { makeAutoObservable } from 'mobx';
import { privateApi } from '@/shared/api';
import { authEndpoints } from '@/shared/api/endpoints';

export class SessionModel {
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  checkIsAuth() {
    privateApi.get(authEndpoints.requestVerifyToken).then(() => {
      this.isAuth = true;
    });
  }
}

export const sessionModel = new SessionModel();
