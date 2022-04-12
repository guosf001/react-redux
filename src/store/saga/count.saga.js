import { takeEvery, put, delay } from 'redux-saga/effects';
import { increment } from '../actions/count.action';
import { INCREMENT, INCREMENT_ASYNC } from '../const/counter.const';

function* countSaga(action) {
  yield delay(2000);
  yield put(increment(action.payload));
}

export default function* () {
  yield takeEvery(INCREMENT_ASYNC, countSaga);
}
