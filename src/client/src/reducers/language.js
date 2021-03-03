import {
  SWITCH_LANGUAGE,
} from '../actions/types';

const initialState = {
  language: 'ru',
  maxScore: 15,
};
function language(state = initialState, action) {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return {
        ...state,
        language: action.language,
        maxScore: action.maxScore,
      }
    default:
      return state;
  }
}

export default language;
