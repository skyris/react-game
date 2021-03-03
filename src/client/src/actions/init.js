import {
  initAnswer
} from './answer';
import {
  initData 
} from './data';
import { 
  initScore,
} from './score';
import {
  initTimer,
} from './timer';

const initAll = () => (dispatch, getState) => {
  initAnswer();
  initData();
  initScore();
  initTimer();
};

export {
  initAll,
};

