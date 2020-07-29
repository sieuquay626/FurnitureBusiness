import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions/user';
import * as actionTypes from '../actionTypes/user';
import { listUser_api } from '../../api/user';

function* handleUserList(data) {
  const { query } = data;
  try {
    const result = yield call(listUser_api, query);
    yield put(actions.handleUserListSuccess(result.data));
  } catch (error) {
    yield put(actions.handleUserListError());
  }
}

export default [takeEvery(actionTypes.GET_LIST_USER, handleUserList)];
