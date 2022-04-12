import { takeEvery, put, delay } from 'redux-saga/effects';
import { show } from '../actions/modal.action';
import { SHOW, SHOW_ASYNC } from '../const/modal.const';

function* modalAsync() {
  yield delay(2000);
  yield put(show());
}

export default function* () {
  yield takeEvery(SHOW_ASYNC, modalAsync);
}
