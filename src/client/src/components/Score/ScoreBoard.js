import React from 'react';
import ScoreItem from './ScoreItem';
import { connect } from 'react-redux';
import moneyRubbles from '../../json/money.json';
import moneyDollars from '../../json/money-in-dollars.json';

function ScoreBoard(props) {
  const { score, language } = props;
  let money;
  if (language === 'ru') {
    money = moneyRubbles; 
  } else if (language === 'en') {
    money = moneyDollars; 
  }
  return (
    <div className="score-board">
      {
        money.map((prize, index) => 
          <ScoreItem 
            key={index} 
            prize={prize} 
            index={index} 
            currentScore={score}
          />
        )
      } 
    </div>
  );
}

const mapStateToProps = state => ({
  score: state.score.score,
  language: state.language.language,
});

export default connect(mapStateToProps, {})(ScoreBoard);
