import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './App.css';
import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material';

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
  }
];

const statNames = ['Points', 'Rebounds', 'Assists', 'Steals', 'Blocks'];

// function ButtonCreator({ players, statNames }) {
//     const handleButtonClick = (player, statName) => {
//         console.log(`${player.name}'s ${statName}: ${player[statName.replace(/\s/g, '').toLowerCase()]}`);
//       };
  
//     return (
//       <div className="button-creator">
//         {players.slice(0, 5).map((player, playerIndex) => (
//           <div key={playerIndex} className="player-column">
//             <div className="player-data">
//               <div>{player.name}</div>
//                 <img src={player.headshot} alt={player.name} />
//             </div>
//             <div className="button-column">
//               {statNames.map((stat, statIndex) => (
//                 <button
//                   key={statIndex}
//                   className="button"
//                   onClick={() => handleButtonClick(player, stat)}
//                 >
//                   {stat}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }

const generateStatRow = (statName, index) => {
  return (
    <div className="stat-row" key={index}>
      <ToggleButtonGroup fullWidth="true">
        <Box flexGrow={1} display="flex" justifyContent="center">
          <ToggleButton 
            className="stat-button" 
            value="check" selected={true} 
            sx={{ width: '100px', height: '40px' }}
          >
            {statName}
          </ToggleButton>
        </Box>
        <Box flexGrow={1} display="flex" justifyContent="center">
          <p>{statName} per game</p>
        </Box>
        <Box flexGrow={1} display="flex" justifyContent="center">
        <ToggleButton 
            className="stat-button" 
            value="check" selected={true} 
            sx={{ width: '100px', height: '40px' }}
          >
            {statName}
          </ToggleButton>
        </Box>
      </ToggleButtonGroup>
    </div>
  );
};
  
  
  

const App = () => {
  return (
    <>
    <div className="page-container">
      <div className="header-container">
        <h1>STATTLE</h1>
        <p>A game of statistical knowledge</p>
      </div>

      <div className="game-box">

        <div className="headshot-row">
          <div className="player-container">
            <div className="headshot-container">
              <img className="headshot" src={players[0].headshot} alt={players[0].name} />
            </div>
            <h3>{players[0].name}</h3>
          </div>
          <div className="player-container">
            <div className="headshot-container">
              <img className="headshot" src={players[1].headshot} alt={players[1].name} />
            </div>
            <h3>{players[1].name}</h3>
          </div>
        </div>

        <div className="selector-box">
            {statNames.map((statName, index) => generateStatRow(statName, index))}
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
