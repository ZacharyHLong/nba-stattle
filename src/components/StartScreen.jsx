import React from "react";

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen">
      <h1>STATTLE</h1>
      <h4>How to play:</h4>
      <ul>
        <li>Choose which player has a higher career average for each of the displayed stat categories.</li>
        <li>Each incorrect guess will incur a foul.</li>
        <li>Once you have 5 fouls, the game is over.</li>
      </ul>
      <button onClick={onStart} className="submit-button">Start</button>
    </div>
  );
};

export default StartScreen;