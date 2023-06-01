import {
  requestBaseRequest,
  requestBaseRequestSuccess,
  rrequestBaseRequestFail,
} from '@/store/reducers/baseRequest/baseRequest.slice';
import baseRequestApi from '../../../services/baseRequest/baseRequestApi';
import { put, takeLatest, call } from 'redux-saga/effects';

export function* requestBaseRequestSaga() {
  try {
    // @ts-ignore
    const response: any = yield call(baseRequestApi.getBaseRequest);
    yield put(requestBaseRequestSuccess(response));
  } catch (e) {
    console.log('request failed : ', e);
    yield put(rrequestBaseRequestFail(e));
  }
}

export default function* baseRequestSaga() {
  yield takeLatest(requestBaseRequest, requestBaseRequestSaga);
}
