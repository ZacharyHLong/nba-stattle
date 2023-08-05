import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './App.css';

import { players, statNames } from './components/Players.jsx';
import PlayerContainer from './components/PlayerContainer.jsx';
import StatButton from './components/StatButton.jsx';
import { determineCorrectAnswers, checkAnswers } from './components/PlayerLogic.jsx';
import WinModal from './components/WinModal.jsx';
import StartScreen from './components/StartScreen.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import GameOverModal from './components/GameOverModal';

const App = () => {
  const [userFouls, setUserFouls] = useState(0);
  const [userStreak, setUserStreak] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [showWinModal, setShowWinModal] = useState(false);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
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
  
  const closeStartScreenAndRandomise = () => {
    setShowStartScreen(false);
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
      setErrorMessage("");
      setShowWinModal(true);
    } else {
      setErrorMessage(`You got ${correctCount} out of 5 correct.`);
      if (userFouls >= 5) {
        setUserFouls(userFouls + 1);
        setShowGameOverModal(true); 
      } else {
        setUserFouls(userFouls + 1);
      }
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

  const resetGame = () => {
    setUserFouls(0);
    setUserStreak(0);
    setShowGameOverModal(false);
    setErrorMessage("");
    setShowStartScreen(true);
  };
  

  return (
    <>
    <div className="page-container">
      {showStartScreen ? (
        <StartScreen onStart={closeStartScreenAndRandomise} />
      ) : (
        // <div className="game-box">
        <div className={`game-box ${errorMessage !== "" ? 'shake-effect' : ''}`}>
        <div className="header-container">
          <h1>STATTLE</h1>
          <div className="score-box">
            <div className="stretched-item right">
              <h2>STREAK: {userStreak}</h2>
            </div>
            <div className="score-divider"></div>
            <div className="stretched-item right">
              <h2>FOULS: {userFouls}</h2>
            </div>  
          </div>
        </div>

        <div className="selector-box">
          <PlayerContainer player={selectedPlayers[0]} classSide="left" />
          <div className="column">
            <ErrorMessage message={errorMessage} />
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
          </div>


          <PlayerContainer player={selectedPlayers[1]} classSide="right" />
        </div>

        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      )}

      <WinModal show={showWinModal} onClose={closeWinModalAndRandomise}>
      <h4>🎉 Congratulations 🎉</h4>
      <br></br>
      <p>All your answers are correct!</p>
      </WinModal>

      <GameOverModal show={showGameOverModal} onClose={() => resetGame()} userStreak={userStreak} />

    </div>
    </>
  );
};

export default App;
