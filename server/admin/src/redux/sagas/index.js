import { all } from 'redux-saga/effects';
import authSagas from './login';
import recoverSagas from './recoverpassword';
import resetSagas from './resetpassword';
import userSagas from './user';

export default function* rootSaga() {
  yield all([...authSagas, ...recoverSagas, ...resetSagas, ...userSagas]);
}
