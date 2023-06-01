import { fork } from 'redux-saga/effects';
import baseRequestSaga from './reducers/baseRequest/baseRequest.saga';

export default function* rootSaga() {
  yield fork(baseRequestSaga);
}
