import {
  ANSWER_INIT,
  ANSWER_LOADING,
  ANSWER_CORRECT,
  ANSWER_WRONG,
  ANSWER_LOAD_FAIL,
  ANSWER_GAME_WON,
} from '../actions/types';

const initialState = {
  isLoading: false,
  isLoadingError: false,
  gameOver: false,
  gameWon: false,
};

function answer(state = initialState, action) {
  switch (action.type) {
    case ANSWER_INIT:
      return {
        ...state,
        isLoading: false,
        gameOver: false,
        isLoadingError: false,
        gameWon: false,
      }
    case ANSWER_LOADING:
      return {
        ...state,
        isLoading: true,
        isLoadingError: false,
      }
    case ANSWER_CORRECT:
      return {
        ...state,
        isLoading: false,
        isLoadingError: false,
      };
    case ANSWER_GAME_WON:
      return {
        ...state,
        gameWon: true,
      };
    case ANSWER_WRONG:
      return {
        ...state,
        isLoading: false,
        gameOver: true,
        isLoadingError: false,
      };
    case ANSWER_LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoadingError: true,
      };
    default:
      return state;
  }
}

export default answer;
