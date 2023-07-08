import  React from 'react';

const PlayerContainer = ({ player }) => {
  return (
    <div className="player-container">
      <div className="headshot-container">
        <img className="headshot" src={player.headshot} alt={player.name} />
      </div>
      <h3>{player.name}</h3>
    </div>
  );
};

export default PlayerContainer;