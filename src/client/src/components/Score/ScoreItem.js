import React from 'react';
import { connect } from 'react-redux';
import cl from 'classnames';

const currency = language => {
  const langToCurrency = {
    ru: '₽',
    en: '$',
  };
  return langToCurrency[language];
}
function ScoreItem(props) {
  const {prize, index, currentScore, language} = props;
  const isCurrent = index === currentScore;
  return (
    <div className={
      cl('score-item', isCurrent ? 'score-item__current' : '')}
    >
      {index + 1}. {currency(language)} {prize} 
    </div>
  );
}

const mapStateToProps = state => ({
    language: state.language.language,
});

export default connect(mapStateToProps, {})(ScoreItem);
