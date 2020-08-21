import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions/product';
import * as actionTypes from '../actionTypes/product';
import {
  listProduct_api,
  listProductByCategory_api,
  listProductByRecomment_api,
} from '../../api/product';

function* handleProduct() {
  try {
    const result = yield call(listProduct_api);
    yield put(actions.handleProductSuccess(result.data));
  } catch (error) {
    yield put(actions.handleProductError());
  }
}

function* handleProductRecomment(data) {
  console.log('data', data);
  try {
    // const result = yield call(listProductByRecomment_api, data);
    // console.log(result);
    // yield put(actions.handleProductRecommentSuccess(result.data));
  } catch (error) {
    // yield put(actions.handleProductByCategoryError());
  }
}

export default [
  takeEvery(actionTypes.GET_PRODUCT, handleProduct),
  takeEvery(actionTypes.GET_PRODUCT_BY_RECOMMENT, handleProductRecomment),
];
