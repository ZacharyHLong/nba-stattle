import React from "react";

export const determineCorrectAnswers = (selectedPlayers, statMappings) => {
  const player1 = selectedPlayers[0];
  const player2 = selectedPlayers[1];
  
  const correctAnswers = statMappings.reduce((acc, { name, property }) => {
    if (player1[property] > player2[property]) {
      return { ...acc, [name]: player1.name };
    } else {
      return { ...acc, [name]: player2.name };
    }
  }, {});

  return correctAnswers;
};

export const checkAnswers = (userSelections, correctAnswers) => {
    let correctCount = 0;
    for (let stat in userSelections) {
      if (userSelections[stat] === correctAnswers[stat]) correctCount++;
    }
    return correctCount;
};