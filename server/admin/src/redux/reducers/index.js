import { combineReducers } from 'redux';
// import { App } from '../../app/reducers';
import auth from './login';
import recover from './recoverpassword';
import reset from './resetpassword';
import user from './user';
import popup from './popup';

const rootReducer = combineReducers({
  // App,
  auth,
  recover,
  reset,
  user,
  popup,
});

export default rootReducer;
