import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterAction from '../store/actions/count.action';

const Counter = ({ count, increment, decrement, increment_async }) => {
  return (
    <div>
      <button onClick={() => increment_async(10)}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement(10)}>-</button>
    </div>
  );
};

const mapStateToProps = ({ counterReducer }) => {
  return {
    count: counterReducer.count,
  };
};

const mapActionToProps = (dispatch) => bindActionCreators(counterAction, dispatch);

export default connect(mapStateToProps, mapActionToProps)(Counter);
