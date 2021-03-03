import { MODAL_SHOW, MODAL_HIDE } from '../actions/types';

function modal(state = {isModal: false}, action) {
  switch (action.type) {
    case MODAL_SHOW:
      return {
        ...state,
        isModal: true,
      }
    case MODAL_HIDE:
      return {
        ...state,
        isModal: false,
      }
    default:
      return state;
  }
}

export default modal;
