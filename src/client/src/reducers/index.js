import { combineReducers } from 'redux';
import score from './score';
import data from './data';
import language from './language';
import answer from './answer';
import timer from './timer';
import modal from './modal';

const rootReducer = combineReducers({
  data,
  score,
  answer,
  language,
  timer,
  modal,
});

export default rootReducer;
