import React from 'react'

function ChoiceButton(props) {
  const {letter, text, onClick} = props;
  return (
    <div className="choice-button" onClick={() => onClick(letter)}>
      {text}
    </div>
  );
}

export default ChoiceButton;
