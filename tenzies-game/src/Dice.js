import React from 'react';
import './Dice.css';

import dice1 from './images/diceFace1.png';
import dice2 from './images/diceFace2.png';
import dice3 from './images/diceFace3.png';
import dice4 from './images/diceFace4.png';
import dice5 from './images/diceFace5.png';
import dice6 from './images/diceFace6.png';

const diceImages = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
};

export default function Dice(props) {
  return (
    <div
      className={`die-face ${props.isHeld ? 'held' : ''}`}
      onClick={props.holdDice}
    >
      <img src={diceImages[props.value]} alt={`Die face ${props.value}`} className="die-img" />
    </div>
  );
}

