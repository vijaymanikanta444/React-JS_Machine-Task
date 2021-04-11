import { combineReducers } from 'redux';

import login from './Login';
import users from './Users';

export default combineReducers({
  login,
  users,
});
