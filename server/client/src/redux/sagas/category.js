import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions/category';
import * as actionTypes from '../actionTypes/category';
import { listCategory_api } from '../../api/category';

function* handleCategory() {
  try {
    const result = yield call(listCategory_api);
    yield put(actions.handleCategorySuccess(result.data));
  } catch (error) {
    yield put(actions.handleCategoryError());
  }
}

export default [takeEvery(actionTypes.GET_CATEGORY, handleCategory)];
