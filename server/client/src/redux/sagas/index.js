import { all } from 'redux-saga/effects';
import categorySagas from './category';
export default function* rootSaga() {
  yield all([...categorySagas]);
}
