import React from 'react';

export default function GameOverModal({ show, onClose, userStreak }) {
  if (!show) {
    return null;
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>😵‍💫😵‍💫 Game Over! 😵‍💫😵‍💫</h2>
        <p>Your streak was: {userStreak}</p>
        <button onClick={onClose} className='submit-button'>Try Again</button>
      </div>
    </div>
  );
}