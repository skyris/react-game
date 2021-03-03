import { SCORE_INCREMENT, SCORE_INIT } from '../actions/types';

function score(state = {score: 0}, action) {
  switch (action.type) {
    case SCORE_INIT:
      return {
        ...state,
        score: 0,
      }
    case SCORE_INCREMENT:
      return {
        ...state,
        score: state.score + 1,
      }
    default:
      return state;
  }
}

export default score;
