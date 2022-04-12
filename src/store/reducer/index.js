import { combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import modalReducer from './modal.reducer';

export default combineReducers({
  counterReducer,
  modalReducer,
});
