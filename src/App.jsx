import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './App.css';

import { players, statNames } from './components/Players.jsx';
import PlayerContainer from './components/PlayerContainer.jsx';
import StatButton from './components/StatButton.jsx';
import { determineCorrectAnswers, checkAnswers } from './components/PlayerLogic.jsx';


const App = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([players[0], players[3]]);
  
  const [userSelections, setUserSelections] = useState({
    Points: '',
    Rebounds: '',
    Assists: '',
    Steals: '',
    Blocks: ''
  });

  const statMappings = [
    { name: 'Points', property: 'pointsPerGame' },
    { name: 'Rebounds', property: 'reboundsPerGame' },
    { name: 'Assists', property: 'assistsPerGame' },
    { name: 'Steals', property: 'stealsPerGame' },
    { name: 'Blocks', property: 'blocksPerGame' },
  ];

  

  const handleSubmit = () => {
    const correctCount = checkAnswers(userSelections, correctAnswers);
    if (correctCount === Object.keys(correctAnswers).length) {
      alert('Congratulations! All your answers are correct!');
    } else {
      alert(`You got ${correctCount} out of ${Object.keys(userSelections).length} correct. Try again!`);
    }
  };
  
  const correctAnswers = determineCorrectAnswers(selectedPlayers, statMappings);
  const score = checkAnswers(userSelections, correctAnswers);

  
  const handleStatChange = (statName, value) => {
    setUserSelections(prevSelections => ({
      ...prevSelections,
      [statName]: value
    }));
  };


  return (
    <>
    <div className="page-container">

      <div className="game-box">
      <div className="header-container">
        <h1>STATTLE</h1>
        <p>A game of statistical knowledge</p>
      </div>

      <div className="selector-box">
        <div className="player-button-group">
          <PlayerContainer player={selectedPlayers[0]} />
          <div className="stat-button-column">
          {statNames.map((statName, index) => (
            <StatButton statName={statName} index={index} player={selectedPlayers[0]} userSelections={userSelections} handleStatChange={handleStatChange}/>
          ))}
          </div>
        </div>

        <div className="player-button-group">
          <PlayerContainer player={selectedPlayers[1]} />
          <div className="stat-button-column">
          {statNames.map((statName, index) => (
            <StatButton statName={statName} index={index} player={selectedPlayers[1]} userSelections={userSelections} handleStatChange={handleStatChange} />
          ))}
          </div>
        </div>
      </div>


      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>

    </div>
    </>
  );
};

export default App;
