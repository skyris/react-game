import {
  TIMER_INIT,
  TIMER_STARTED,
  TIMER_DECREMENT,
  TIMER_RAN_OUT,
  TIMER_PAUSED,
} from '../actions/types';

const SECONDS_FOR_ANSWER = 10;

const initialState = {
  seconds: SECONDS_FOR_ANSWER,
  isStarted: false,
  isRanOut: false,
  isPaused: false,
};

function timer(state = initialState, action) {
  switch (action.type) {
    case TIMER_INIT:
      return {
        ...state,
        seconds: SECONDS_FOR_ANSWER,
        isStarted: false,
        isRanOut: false,
        isPaused: false,
      }
    case TIMER_DECREMENT:
      return {
        ...state,
        seconds: state.seconds - 1,
      }
    case TIMER_STARTED:
      return {
        ...state,
        isStarted: true,
        isRanOut: false,
        isPaused: false,
      }
    case TIMER_RAN_OUT:
      return {
        ...state,
        isRanOut: true,
        isStarted: false,
        isPaused: false,
      }
    case TIMER_PAUSED:
      return {
        ...state,
        isPaused: true,
      }
    default:
      return state;
  }
}

export default timer;
