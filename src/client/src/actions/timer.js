import {
  TIMER_INIT,
  TIMER_DECREMENT,
  TIMER_STARTED,
  TIMER_PAUSED,
  TIMER_RAN_OUT,
} from './types';

export const initTimer = () => ({ type: TIMER_INIT });
export const startTimer = () => ({ type: TIMER_STARTED });
export const timerDecrement = () => ({ type: TIMER_DECREMENT });
export const pauseTimer = () => ({ type: TIMER_PAUSED });
export const timerRanOut = () => (dispatch, getState) => {
  dispatch({ type: TIMER_RAN_OUT });
};
