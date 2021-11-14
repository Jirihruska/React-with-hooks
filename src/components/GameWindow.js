import React from 'react';
import '../styles/GameWindow.css';

const GameWindow = ({ question }) => {
  return (
    <div className="canva">
      { question }
    </div>
  )
}

export default GameWindow;
