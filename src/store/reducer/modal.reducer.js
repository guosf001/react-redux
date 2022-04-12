import { HIDE, SHOW } from '../const/modal.const';

const initialState = {
  visible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return { visible: true };
    case HIDE:
      return { visible: false };
    default:
      return state;
  }
};
