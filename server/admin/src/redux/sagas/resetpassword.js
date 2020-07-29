import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions/resetpassword';
import * as actionTypes from '../actionTypes/resetpassword';
import { reset_password_api } from '../../api/resetPass';

function* handleReset({ payload }) {
  const { data, callback } = payload;
  try {
    const result = yield call(reset_password_api, data);
    console.log(result);

    callback({ error: false, message: result.data.msg });

    yield put(actions.handleResetSuccess(result.data));
  } catch (error) {
    console.log(error);
    const message = error.response.data.msg || error.message;
    console.log(message);
    callback({ error: true, message });
    yield put(actions.handleResetError());
  }
}

export default [takeEvery(actionTypes.RESET, handleReset)];
