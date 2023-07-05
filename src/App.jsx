import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './App.css';


const players = [
  {
    name: 'LeBron James',
    headshot: 'src/assets/headshots/lebron-james.jpg',
    pointsPerGame: 27.0,
    reboundsPerGame: 7.4,
    assistsPerGame: 7.4,
    stealsPerGame: 1.6,
    blocksPerGame: 0.8
  },
  {
    name: 'Kobe Bryant',
    headshot: 'src/assets/headshots/kobe-bryant.jpg',
    pointsPerGame: 25.0,
    reboundsPerGame: 5.2,
    assistsPerGame: 4.7,
    stealsPerGame: 1.4,
    blocksPerGame: 0.5
  },
  {
    name: 'Nikola Jokic',
    headshot: 'src/assets/headshots/nikola-jokic.jpg',
    pointsPerGame: 20.2,
    reboundsPerGame: 10.5,
    assistsPerGame: 6.6,
    stealsPerGame: 1.2,
    blocksPerGame: 0.7
  },
  {
    name: 'Dwight Howard',
    headshot: 'src/assets/headshots/dwight-howard.jpg',
    pointsPerGame: 15.7,
    reboundsPerGame: 11.8,
    assistsPerGame: 1.3,
    stealsPerGame: 0.9,
    blocksPerGame: 1.8
  },
];

console.log(players)

const statNames = ['Points', 'Rebounds', 'Assists', 'Steals', 'Blocks'];

const App = () => {
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

  const determineCorrectAnswers = () => {
    const player1 = players[1];
    const player2 = players[3];
    
    const correctAnswers = statMappings.reduce((acc, { name, property }) => {
      if (player1[property] > player2[property]) {
        return { ...acc, [name]: player1.name };
      } else {
        return { ...acc, [name]: player2.name };
      }
    }, {});
  
    return correctAnswers;
  };

  const correctAnswers = determineCorrectAnswers();

  const checkAnswers = (userSelections, correctAnswers) => {
    let correctCount = 0;
    for (let stat in userSelections) {
      if (userSelections[stat] === correctAnswers[stat]) correctCount++;
    }
    return correctCount;
  };

  const handleSubmit = () => {
    const correctCount = checkAnswers(userSelections, correctAnswers);
    if (correctCount === Object.keys(correctAnswers).length) {
      alert('Congratulations! All your answers are correct!');
    } else {
      alert(`You got ${correctCount} out of ${Object.keys(userSelections).length} correct. Try again!`);
    }
  };
  
  
  const handleStatChange = (statName, value) => {
    setUserSelections(prevSelections => ({
      ...prevSelections,
      [statName]: value
    }));
  };

  

  const generateStatRow = (statName, index, player) => {
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

        {/* <input 
          id={`${statName}-player2`}
          className="radio-input"
          type="radio" 
          value={player2.name} 
          checked={userSelections[statName] === player2.name}
          onChange={(e) => handleStatChange(statName, e.target.value)}
        />
        <label htmlFor={`${statName}-player2`} className="stat-button">
          <span>{statName}</span>
        </label> */}
      </div>
    );
  };

  const GeneratePlayerContainer = ({ player }) => {
    return (
      <div className="player-container">
        <div className="headshot-container">
          <img className="headshot" src={player.headshot} alt={player.name} />
        </div>
        <h3>{player.name}</h3>
      </div>
    );
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
          <GeneratePlayerContainer player={players[1]} />
          {statNames.map((statName, index) => generateStatRow(statName, index, players[1]))}
        </div>

        <div className="player-button-group">
          <GeneratePlayerContainer player={players[3]} />
          {statNames.map((statName, index) => generateStatRow(statName, index, players[3]))}
        </div>
      </div>


      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>

    </div>
    </>
  );
};

export default App;
