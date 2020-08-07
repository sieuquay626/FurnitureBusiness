import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions/user';
import * as actionTypes from '../actionTypes/user';
import { listUser_api, createUser_api } from '../../api/user';

function* handleUserList(data) {
  const { query } = data;
  try {
    const result = yield call(listUser_api, query);
    yield put(actions.handleUserListSuccess(result.data));
  } catch (error) {
    yield put(actions.handleUserListError());
  }
}

function* handleUserCreate({ payload }) {
  console.log(payload);
  const { data, callback } = payload;
  try {
    const result = yield call(createUser_api, data);
    // callback({ error: false, message: result.data.msg });
    // yield put(actions.handleUserCreateSuccess(result.data));
  } catch (error) {
    const message = error.response.data.msg || error.message;
    console.log(message);
    callback({ error: true, message });
    yield put(actions.handleUserCreateError());
  }
}

export default [
  takeEvery(actionTypes.GET_LIST_USER, handleUserList),
  takeEvery(actionTypes.CREATE_USER, handleUserCreate),
];
