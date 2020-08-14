import * as actionTypes from '../actionTypes/login';

const handleLogin = (data) => ({
  type: actionTypes.LOGIN,
  data,
});
const handleLoginSuccess = (data) => ({
  type: actionTypes.LOGIN_SUCCESS,
  data,
});
const handleLoginError = () => ({
  type: actionTypes.LOGIN_ERROR,
});

const handleLogout = () => ({
  type: actionTypes.LOGOUT,
});

const handleCheckAuth = () => ({
  type: actionTypes.CHECK_AUTH,
});

export {
  handleLogin,
  handleLoginSuccess,
  handleLoginError,
  handleLogout,
  handleCheckAuth,
};
