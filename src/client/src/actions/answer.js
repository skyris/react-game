import { 
  ANSWER_INIT,
  ANSWER_LOADING,
  ANSWER_CORRECT,
  ANSWER_WRONG,
  ANSWER_LOAD_FAIL,
  ANSWER_GAME_WON,
} from './types';

import { incrementScore, loadData } from './index'

export const initAnswer = () => ({ type: ANSWER_INIT });

export const loadAnswer = answer => (dispatch, getState) => {
  dispatch({ type: ANSWER_LOADING });
  const { id } = getState().data;
  const decision = { id, ...answer };
  const url = 'http://localhost:8080/api/check';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(decision),
  })
    .then(response => response.json())
    .then(result => {
      if (result.correct) {
        const {score, language} = getState();
        console.log(score.score);
        if (score.score === language.maxScore - 1) {
          dispatch({ type: ANSWER_GAME_WON });
          return;
        }
        dispatch(incrementScore());
        dispatch({ type: ANSWER_CORRECT });
        dispatch(loadData());
      } else {
        dispatch({ type: ANSWER_WRONG });
      }
    })
    .catch(err => dispatch({ type: ANSWER_LOAD_FAIL }));
}
