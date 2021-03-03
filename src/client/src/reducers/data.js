import {
  DATA_LOADING,
  DATA_LOAD_SUCCESS,
  DATA_LOAD_FAIL,
  DATA_INIT,
} from '../actions/types';

const initialState = {
  isLoading: false,
  isLoaded: false,
  isLoadingError: false,
  id: '',
  question: '', 
  answers: {a: '', b: '', c: '', d: ''}
};

function data(state = initialState, action) {
  switch (action.type) {
    case DATA_INIT:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isLoadingError: false,
        id: '',
        question: '', 
        answers: {a: '', b: '', c: '', d: ''}
      }
    case DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
      }
    case DATA_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isLoadingError: false,
        id: action.payload.id,
        question: action.payload.question,
        answers: action.payload.answers,
      };
    case DATA_LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isLoadingError: true,
      };
    default:
      return state;
  }
}

export default data;
