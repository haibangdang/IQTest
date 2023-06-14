import { PayloadAction } from '@reduxjs/toolkit';
import { call, takeLatest, put } from 'redux-saga/effects';
import signupApi from '@/services/signup/signupApi';
import {
  requestSignup,
  requestSignupFailed,
  requestSignupSuccessful,
} from './signup.slice';

export function* requestSignupSaga({
  payload,
}: PayloadAction<{
  jsonData: any;
}>) {
  const { jsonData } = payload;
  try {
    // @ts-ignore
    const signup = yield call(signupApi.requestSignup, jsonData);
    yield put(requestSignupSuccessful(signup));
  } catch (e) {
    console.log('request singup failed : ', e);
    yield put(requestSignupFailed(e));
  }
}

export default function* signupSaga() {
  yield takeLatest(requestSignup, requestSignupSaga);
}
