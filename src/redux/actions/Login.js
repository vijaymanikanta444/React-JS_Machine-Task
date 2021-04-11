import * as types from './types';

export const userLogin = (user) => ({
  type: types.USER_LOGIN,
  payload: user,
});
export const userLoggedOut = () => ({
  type: types.USER_LOGGEDOUT,
});
