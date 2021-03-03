import React from 'react'
import ChoiceButton from './ChoiceButton';
import { connect } from 'react-redux';
import { loadAnswer } from '../../actions'

function ChoiceButtons(props) {
  const { answers, loadAnswer } = props;
  const answerHandle = (letter) => {
    loadAnswer({ answer: letter });
  };
  
  return (
    <>
      {
        Object.entries(answers)
          .map(([letter, answer]) => 
            <ChoiceButton 
              key={letter}
              letter={letter}
              text={`${letter.toUpperCase()}: ${answer}`}
              onClick={answerHandle}
            />
          )
      }
    </>
  );
}



const mapStateToProps = state => ({
  answers: state.data.answers,
  gameOver: state.answer.gameOver,
});

export default connect(mapStateToProps, { loadAnswer })(ChoiceButtons);
