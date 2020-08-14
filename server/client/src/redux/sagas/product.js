import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions/product';
import * as actionTypes from '../actionTypes/product';
import { listProduct_api, listProductByCategory_api } from '../../api/product';

function* handleProduct() {
  try {
    const result = yield call(listProduct_api);
    yield put(actions.handleProductSuccess(result.data));
  } catch (error) {
    yield put(actions.handleProductError());
  }
}

export default [takeEvery(actionTypes.GET_PRODUCT, handleProduct)];
