import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { initAll } from '../actions'

function Fail(props) {
  const [toGame, setToGame] = useState(false);
  
  const handleClick = () => {
    console.log(props);
    props.initAll();
    console.log()
    setToGame(prev => true);
    console.log(toGame)
  }

  if (toGame) {
      return <Redirect to='/game' />;
  }
  return (
    <div className="fail">
      <p>You fail ;-(</p>
      <button
          className="button"
          onClick={handleClick}
      >
        Play one more time
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { initAll })(Fail);
