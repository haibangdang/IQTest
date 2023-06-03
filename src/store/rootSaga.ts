import { fork } from 'redux-saga/effects';
import baseRequestSaga from './reducers/baseRequest/baseRequest.saga';
import loginSaga from './reducers/login/login.saga';

export default function* rootSaga() {
  yield fork(baseRequestSaga);
  yield fork(loginSaga);
}
