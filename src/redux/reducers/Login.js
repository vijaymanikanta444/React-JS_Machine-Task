import * as types from '../actions/types';

const initialState = {
  username: 'hruday@gmail.com',
  password: 'hruday123',
  isAuthenticated: false,
  authenticationError: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        isAuthenticated:
          action.payload.userName == state.username &&
          action.payload.password == state.password,
        authenticationError:
          action.payload.userName != state.username ||
          action.payload.password != state.password,
      };
    case types.USER_LOGGEDOUT:
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
};

export default login;
