import { 
  SWITCH_LANGUAGE,
} from './types';

const langList = ['ru', 'en'];

export const switchLanguage = () => (dispatch, getState) =>{
  const currentLanguage = getState().language.language;
  const nextLanguage = langList[
    (langList.indexOf(currentLanguage) + 1) % langList.length
  ];
  dispatch({ 
    type: SWITCH_LANGUAGE,
    language: nextLanguage,
    maxScore: nextLanguage === 'ru' ? 15 : 14,
  });
};
