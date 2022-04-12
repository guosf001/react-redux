import { createStore, applyMiddleware } from 'redux';
// import thunk from '../middleware/thunk';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import log from '../middleware/log';
import rootRouter from './reducer/index';
import rootSaga from './saga/root.saga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootRouter, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
