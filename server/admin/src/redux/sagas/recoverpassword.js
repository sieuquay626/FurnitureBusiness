import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions/recoverpassword';
import * as actionTypes from '../actionTypes/recoverpassword';
import { recover_password_api } from '../../api/recoverPass';

function* handleRecover({ payload }) {
  const { data, callback } = payload;

  try {
    const result = yield call(recover_password_api, data);
    console.log(result);
    callback({ error: false, message: result.data.message });

    yield put(actions.handleRecoverSuccess(result.data));
  } catch (error) {
    console.log('error');
    const message = error.response.data.msg || error.message;
    console.log(message);
    callback({ error: true, message });
    yield put(actions.handleRecoverError());
  }
}

export default [takeEvery(actionTypes.RECOVER, handleRecover)];
