import { all } from 'redux-saga/effects';
import categorySagas from './category';
import productSagas from './product';
import loginSagas from './login';
export default function* rootSaga() {
  yield all([...categorySagas, ...productSagas, ...loginSagas]);
}
