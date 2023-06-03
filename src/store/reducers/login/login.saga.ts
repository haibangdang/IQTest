import { PayloadAction } from '@reduxjs/toolkit';
import { call, takeLatest, put } from 'redux-saga/effects';
import loginApi from '@/services/login/loginApi';
import {
  requestLogin,
  requestLoginFailed,
  requestLoginSuccessful,
} from './login.slice';

export function* requestLoginExecute({
  payload,
}: PayloadAction<{
  jsonData: any;
}>) {
  const { jsonData } = payload;
  try {
    // @ts-ignore
    const login = yield call(loginApi.requestLoginExecute, jsonData);
    yield put(requestLoginSuccessful(login));
  } catch (e) {
    console.log('request fulfillment failed : ', e);
    yield put(requestLoginFailed(e));
  }
}

export default function* storeSaga() {
  yield takeLatest(requestLogin, requestLoginExecute);
}
