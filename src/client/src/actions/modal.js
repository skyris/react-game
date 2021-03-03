import {
  MODAL_SHOW,
  MODAL_HIDE
} from './types';

export const modalShow = () => ({ type: MODAL_SHOW });

export const modalHide = () => ({ type: MODAL_HIDE });
