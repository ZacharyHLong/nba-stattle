import  React from 'react';

function getFontSize(text) {
  let baseSize = 20; 
  let maxLength = 20; 
  if (text.length > maxLength) {
    return `${baseSize - (text.length - maxLength)}px`;
  } else {
    return `${baseSize}px`;
  }
}

const PlayerContainer = ({ player, classSide }) => {
  const [firstName, lastName] = player.name.split(' ');
  return (
    <div className={`player-container ${classSide}`}>
      <div className="headshot-container">
        <img className="headshot" src={player.headshot} alt={player.name} />
      </div>
      <p style={{ fontSize: getFontSize(player.name) }}>{firstName}</p>
      <p style={{ fontSize: getFontSize(player.name) }}>{lastName}</p>
    </div>
  );
};

export default PlayerContainer;