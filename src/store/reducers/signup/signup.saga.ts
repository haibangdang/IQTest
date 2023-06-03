import { PayloadAction } from '@reduxjs/toolkit';
import { call, takeLatest, put } from 'redux-saga/effects';
import signupApi from '@/services/signup/signupApi';
import {
  requestSignup,
  requestSignupFailed,
  requestSignupSuccessful,
} from './signup.slice';

export function* requestSignupExecute({
  payload,
}: PayloadAction<{
  jsonData: any;
}>) {
  const { jsonData } = payload;
  try {
    // @ts-ignore
    const login = yield call(signupApi.requestLoginExecute, jsonData);
    yield put(requestSignupSuccessful(login));
  } catch (e) {
    console.log('request singup failed : ', e);
    yield put(requestSignupFailed(e));
  }
}

export default function* storeSaga() {
  yield takeLatest(requestSignup, requestSignupExecute);
}
