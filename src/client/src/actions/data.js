import { 
  DATA_LOADING,
  DATA_LOAD_SUCCESS,
  DATA_LOAD_FAIL,
  DATA_INIT
} from './types';
// import {startTimer} from './timer';

export const initData = () => ({ type: DATA_INIT });

export const loadData = () => (dispatch, getState) => {
  dispatch({ type: DATA_LOADING });
  const level = +getState().score.score + 1;
  const lang = getState().language.language;
  const url = 'http://localhost:8080/api/question/';
  fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lang, level }),
  })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: DATA_LOAD_SUCCESS, payload: data });
      // dispatch(startTimer());
    })
    .catch(err => dispatch({ type: DATA_LOAD_FAIL }));
}
