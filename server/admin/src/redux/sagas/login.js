import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions/login';
import * as actionTypes from '../actionTypes/login';
import { login_api } from '../../api/auth';

function* handleLogin({ payload }) {
  const { data, callback } = payload;
  console.log({ data: data });

  try {
    const result = yield call(login_api, data);
    let { token, role } = result.data;

    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('role', JSON.stringify(role));
    yield put(actions.handleLoginSuccess(result.data));
  } catch (error) {
    const message = error.response.data.msg || error.message;
    console.log(message);
    callback({ error: true, message });
    yield put(actions.handleLoginError());
  }
}

function* handleLogout() {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('role');
}

export default [
  takeEvery(actionTypes.LOGIN, handleLogin),
  takeEvery(actionTypes.LOGOUT, handleLogout),
  // takeEvery(actionTypes.CHECK_AUTH, handleCheckAuth)
];
