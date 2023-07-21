import React from 'react';

export default function GameOverModal({ show, onClose, userStreak }) {
  if (!show) {
    return null;
  }

  return (
    <div className='modal'>
      <h2>Game Over!</h2>
      <p>Your streak was: {userStreak}</p>
      <button onClick={onClose}>Try Again</button>
    </div>
  );
}