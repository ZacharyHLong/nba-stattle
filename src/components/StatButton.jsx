import React from "react";

const StatButton = ({ statName, index, player, userSelections, setUserSelections, handleStatChange }) => {

  return (
    <div className="stat-row" key={index}>
      <input 
        id={`${statName}-${player.name}`}
        className="radio-input"
        type="radio" 
        value={player.name} 
        checked={userSelections[statName] === player.name}
        onChange={(e) => handleStatChange(statName, e.target.value)}
      />
      <label htmlFor={`${statName}-${player.name}`} className="stat-button">
        <span>{statName}</span>
      </label>
    </div>
  );
};

export default StatButton;