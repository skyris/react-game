import React, { useRef } from 'react'
import { connect } from 'react-redux';
import { timerDecrement, timerRanOut } from '../../actions'

function Timer(props) {
  const { timerDecrement, timerRanOut } = props;
  const { isStarted, seconds, isPaused } = props;
  const refInterval = useRef(null);
  const refPaused = useRef(false);

  const startTimerHandle = () => {
    if (refInterval.current !== null && !refPaused.current) return; 

    refInterval.current = setInterval(() => {
      timerDecrement();
    }, 1000);
    refPaused.current = false;
  };

  const pauseTimerHandle = () => {
    refPaused.current = true;
    clearInterval(refInterval.current);
    refInterval.current = null;
  };

  if (isStarted) {
    startTimerHandle();    
  }
  if (isPaused) {
    pauseTimerHandle();
  }
  if (seconds <= 0) {
    timerRanOut();
    clearInterval(refInterval.current);
    refInterval.current = null;
  }

  return (
    <div>
      Seconds: {seconds}
      {/* <button onClick={startTimerHandle}>Start</button>
      <button onClick={pauseTimerHandle}>Pause</button>
      <button onClick={resetTimerHandle}>Reset</button> */}
    </div>
  );
}

const mapStateToProps = state => ({
    isLoaded: state.data.isLoaded,
    isStarted: state.timer.isStarted,
    isRanOut: state.timer.isRanOut,
    isPaused: state.timer.isPaused,
    seconds: state.timer.seconds,
});

export default connect(mapStateToProps, { timerRanOut, timerDecrement })(Timer);
