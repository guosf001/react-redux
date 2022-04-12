import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as modalActions from '../store/actions/modal.action';

const Modal = ({ visible, show, hide, show_async }) => {
  const style = {
    width: 200,
    height: 200,
    position: 'absolute',
    backgroundColor: 'blue',
    left: '50%',
    top: '50%',
    marginLeft: -100,
    marginTop: -100,
    display: visible ? 'block' : 'none',
  };
  return (
    <div>
      <div style={style}></div>
      <button onClick={show_async}>显示</button>
      <button onClick={hide}>隐藏</button>
    </div>
  );
};

const mapToPropsState = ({ modalReducer }) => ({
  visible: modalReducer.visible,
});

const mapToPropsAction = (dispatch) => bindActionCreators(modalActions, dispatch);

export default connect(mapToPropsState, mapToPropsAction)(Modal);
