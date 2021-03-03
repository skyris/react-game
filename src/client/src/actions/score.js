import {
  SCORE_INCREMENT,
  SCORE_INIT,
} from './types';

export const initScore = () => ({ type: SCORE_INIT });

export const incrementScore = () => ({ type: SCORE_INCREMENT});
