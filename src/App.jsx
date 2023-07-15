import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './App.css';

import { players, statNames } from './components/Players.jsx';
import PlayerContainer from './components/PlayerContainer.jsx';
import StatButton from './components/StatButton.jsx';
import { determineCorrectAnswers, checkAnswers } from './components/PlayerLogic.jsx';
import WinModal from './components/WinModal.jsx';


const App = () => {
  const [userStreak, setUserStreak] = useState(0);
  const [showWinModal, setShowWinModal] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState([players[0], players[2]]);
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

  const closeWinModalAndRandomise = () => {
    setShowWinModal(false);
    setUserStreak(userStreak + 1);
    setSelectedPlayers(randomisePlayers());
  }

  const randomisePlayers = () => {
    let newPlayer1, newPlayer2;
  
    do {
      newPlayer1 = players[Math.floor(Math.random() * players.length)];
    } while (newPlayer1 === selectedPlayers[0] || newPlayer1 === selectedPlayers[1]);
  
    do {
      newPlayer2 = players[Math.floor(Math.random() * players.length)];
    } while (newPlayer2 === selectedPlayers[1] || newPlayer2 === selectedPlayers[0] || newPlayer2 === newPlayer1);
  
    setUserSelections({
      Points: '',
      Rebounds: '',
      Assists: '',
      Steals: '',
      Blocks: ''
    });

    return [newPlayer1, newPlayer2];
  };

  const handleSubmit = () => {
    const correctCount = checkAnswers(userSelections, correctAnswers);
    if (correctCount === Object.keys(correctAnswers).length) {
      setShowWinModal(true);
    } else {
      alert(`You got ${correctCount} out of ${Object.keys(userSelections).length} correct. Try again!`);
      setUserStreak(0);
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
        <h2>{userStreak}</h2>
      </div>

      <div className="selector-box">
        <PlayerContainer player={selectedPlayers[0]} className="left" />
        <div className="stat-selector">
          <div className="stat-button-column">
            {statNames.map((statName, index) => (
              <StatButton statName={statName} index={index} player={selectedPlayers[0]} userSelections={userSelections} handleStatChange={handleStatChange}/>
            ))}
          </div>
          <div className="stat-button-column">
            {statNames.map((statName, index) => (
              <StatButton statName={statName} index={index} player={selectedPlayers[1]} userSelections={userSelections} handleStatChange={handleStatChange} />
            ))}
          </div>
        </div>


        <PlayerContainer player={selectedPlayers[1]} className="right" />
      </div>

      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>

      <WinModal show={showWinModal} onClose={closeWinModalAndRandomise}>
      <h3>🎉 Congratulations 🎉</h3>
      <br></br>
      <p>All your answers are correct!</p>
      </WinModal>

    </div>
    </>
  );
};

export default App;
