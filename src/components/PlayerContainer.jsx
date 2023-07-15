import  React from 'react';

const PlayerContainer = ({ player }) => {
  return (
    <div className="player-container">
      <div className="headshot-container">
        <img className="headshot" src={player.headshot} alt={player.name} />
      </div>
      <p>{player.name}</p>
    </div>
  );
};

export default PlayerContainer;