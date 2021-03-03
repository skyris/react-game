import React, { useState } from 'react'
import { connect } from 'react-redux';
import {
  startTimer,
  pauseTimer,
  timerRanOut
} from '../../actions'
import store from '../../store';

const modalQuestions = [
  "Отлично! Готовы продолжить?",
  "Отлично! Продолжаем?",
  "Хорошо! Продолжаем?",
  "Хорошо! Продолжим?",
  "Хорошо! Продолжим игру?",
  "Вы - молодец! Играем дальше?",
  "Это правильный ответ! Готовы продолжить?",
  "И это - правильный ответ!!! Продолжим?"
]

const askQuestion = () => {
  if (store.getState().score.score === 0) {
    return "Начнем игру?";
  }
  return modalQuestions[
    Math.floor(Math.random() * modalQuestions.length)
  ];
}

const ModalQuestion = props => {
  const [show, setShow] = useState(props.show);
  const { startTimer } = props;
  if (!show) {
    return null;
  }
  const handleClick = () => {
    setShow(false);
    startTimer();
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{askQuestion()}</p>
        <button onClick={handleClick}>Да</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

});

export default connect(
  mapStateToProps, 
  {
    startTimer,
    pauseTimer,
    timerRanOut,
  }
)(ModalQuestion);