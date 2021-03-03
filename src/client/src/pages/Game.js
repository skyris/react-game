import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { loadData } from '../actions';
import ChoiceButtons from '../components/Choice/ChoiceButtons';
import QuestionScreen from '../components/QuestionScreen';
import ScoreBoard from '../components/Score/ScoreBoard';
import Timer from '../components/Timer';
import ModalQuestion from '../components/ModalQuestion';

function Game(props) {
  const { gameOver, gameWon, timerRanOut, loadData, isModal } = props;
  useEffect(() => {
    loadData();
    console.log('Game loaded');
  }, []);

  if (gameOver || timerRanOut) {
    // props.history.push('/fail');
    return <Redirect to='/fail' />;
  }
  if (gameWon) {
    // props.history.push('/fail');
    return <Redirect to='/win' />;
  }
  return (
    <div>
      <Timer />
      <ScoreBoard />
      <QuestionScreen />
      <ChoiceButtons />
      <ModalQuestion show={isModal} />
    </div>
  );
}

const mapStateToProps = state => ({
    gameOver: state.answer.gameOver,
    gameWon: state.answer.gameWon,
    timerRanOut: state.timer.isRanOut,
    isModal: state.modal.isModal,
});

export default connect(mapStateToProps, { loadData })(Game);
