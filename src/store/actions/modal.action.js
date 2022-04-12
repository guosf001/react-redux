import { HIDE, SHOW, SHOW_ASYNC } from '../const/modal.const';

export const show = () => ({ type: SHOW });
export const hide = () => ({ type: HIDE });

export const show_async = () => ({ type: SHOW_ASYNC });
