import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import LanguageSwitcher from '../components/LanguageSwitcher';

function Invite() {
  const [toGame, setToGame] = useState(false);
  
  const handleClick = () => {
      setToGame(true);
  }

  if (toGame) {
    return <Redirect to='/game' />;
  }
  return (
    <div className="invite">
      <LanguageSwitcher />
      <p>Hello to the Game</p>
      <button
        className="button"
        onClick={handleClick}
      >
        Start the game
      </button>
    </div>
  );
}

export default Invite;
