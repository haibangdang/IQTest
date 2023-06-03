import { fork } from 'redux-saga/effects';
import baseRequestSaga from './reducers/baseRequest/baseRequest.saga';
import loginSaga from './reducers/login/login.saga';
import signupSaga from './reducers/signup/signup.saga';

export default function* rootSaga() {
  yield fork(baseRequestSaga);
  yield fork(loginSaga);
  yield fork(signupSaga);
}
