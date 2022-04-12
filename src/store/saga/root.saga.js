import { all } from 'redux-saga/effects';
import countSaga from './count.saga';
import modalSaga from './modal.saga';

export default function* rootSaga() {
  yield all([countSaga(), modalSaga()]);
}
