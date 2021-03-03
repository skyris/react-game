import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from './store';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
import Invite from './pages/Invite';
import Game from './pages/Game';
import Fail from './pages/Fail';
import Win from './pages/Win';
import './App.css';

function App() {
  useEffect(() => {
    console.log('App loaded');
  }, []);

  if (true) return <Redirect to='/fail' />;

  return (
    <Provider store={store}>
        <Router>
            <div>text</div>
            <Route exact path='/' component={Invite} />
            <Route path='/game' component={Game} />
            <Route path='/win' component={Win} />
            <Route path='/fail' component={Fail} />
        </Router>
    </Provider>
  );
}

const mapStateToProps = state => ({
    gameOver: state.answer.gameOver,
    timerRanOut: state.timer.isRanOut,
});

export default connect(mapStateToProps, { })(App);
