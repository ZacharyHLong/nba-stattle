import React from "react";

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen">
      <h1>STATTLE</h1>
      <h4>How to play:</h4>
      <p>Choose which player has a higher career average for each of the stat categories.
        Players are randomly selected from all eras of the NBA. Each incorrect guess will incur a foul. 
        Once you have 3 fouls, the game is over.
      </p>
      <button onClick={onStart}>Start</button>
    </div>
  );
};

export default StartScreen;