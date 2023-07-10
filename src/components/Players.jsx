import React from 'react'

export const statNames = ['Points', 'Rebounds', 'Assists', 'Steals', 'Blocks'];

export const players = [
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
  {
    name: 'Kevin Durant', 
    headshot: 'src/assets/headshots/kevin-durant.jpg',
    pointsPerGame: 27.3,
    reboundsPerGame: 7.1,
    assistsPerGame: 4.3,
    stealsPerGame: 1.1,
    blocksPerGame: 1.1
  },
  {
    name: 'James Harden',
    headshot: 'src/assets/headshots/james-harden.jpg',
    pointsPerGame: 24.7,
    reboundsPerGame: 5.6,
    assistsPerGame: 7.0,  
    stealsPerGame: 1.5,
    blocksPerGame: 0.5
  },
  {
    name: 'Giannis Antetokounmpo',
    headshot: 'src/assets/headshots/giannis-antetokounmpo.jpg',
    pointsPerGame: 22.6,
    reboundsPerGame: 9.6,
    assistsPerGame: 4.7,
    stealsPerGame: 1.1,
    blocksPerGame: 1.3
  },
  {
    name: 'Chris Andersen',
    headshot: 'src/assets/headshots/chris-andersen.jpg',
    pointsPerGame: 5.4,
    reboundsPerGame: 5.0,
    assistsPerGame: 0.5,
    stealsPerGame: 0.4,
    blocksPerGame: 1.4
  },
  {
    name: 'Stephen Curry',
    headshot: 'src/assets/headshots/stephen-curry.jpg',
    pointsPerGame: 24.6,
    reboundsPerGame: 4.7,
    assistsPerGame: 6.5,
    stealsPerGame: 1.6,
    blocksPerGame: 0.2
  },
  {
    name: 'Aaron Gordon',
    headshot: 'src/assets/headshots/aaron-gordon.jpg',
    pointsPerGame: 13.4,
    reboundsPerGame: 6.3,
    assistsPerGame: 2.5,
    stealsPerGame: 0.7,
    blocksPerGame: 0.6
  },
  {
    name: 'Austin Rivers',
    headshot: 'src/assets/headshots/austin-rivers.jpg',
    pointsPerGame: 8.5,
    reboundsPerGame: 2.0,
    assistsPerGame: 2.1,
    stealsPerGame: 0.7,
    blocksPerGame: 0.2
  },
  {
    name: 'Dwyane Wade',
    headshot: 'src/assets/headshots/dwyane-wade.jpg',
    pointsPerGame: 22.0,
    reboundsPerGame: 4.7,
    assistsPerGame: 5.4,
    stealsPerGame: 1.5,
    blocksPerGame: 0.8
  },
  {
    name: 'Klay Thompson',
    headshot: 'src/assets/headshots/klay-thompson.jpg',
    pointsPerGame: 19.8,
    reboundsPerGame: 3.5,
    assistsPerGame: 2.3,
    stealsPerGame: 0.9,
    blocksPerGame: 0.5
  },
  {
    name: 'Kawhi Leonard',
    headshot: 'src/assets/headshots/kawhi-leonard.jpg',
    pointsPerGame: 19.6,
    reboundsPerGame: 6.4,
    assistsPerGame: 3.0,
    stealsPerGame: 1.7,
    blocksPerGame: 0.6
  },
  {
    name: 'Russell Westbrook',
    headshot: 'src/assets/headshots/russell-westbrook.jpg',
    pointsPerGame: 22.4,
    reboundsPerGame: 7.3,
    assistsPerGame: 8.4,
    stealsPerGame: 1.6,
    blocksPerGame: 0.3
  },
  {
    name: 'Kevin Love',
    headshot: 'src/assets/headshots/kevin-love.jpg',
    pointsPerGame: 16.9,
    reboundsPerGame: 10.4,
    assistsPerGame: 2.3,
    stealsPerGame: 0.6,
    blocksPerGame: 0.4
  },
  {
    name: 'Paul George',
    headshot: 'src/assets/headshots/paul-george.jpg',
    pointsPerGame: 20.6,
    reboundsPerGame: 6.4,
    assistsPerGame: 3.7,
    stealsPerGame: 1.7,
    blocksPerGame: 0.4
  },
  {
    name: 'Magic Johnson',
    headshot: 'src/assets/headshots/magic-johnson.jpg',
    pointsPerGame: 19.5,
    reboundsPerGame: 7.2,
    assistsPerGame: 11.2,
    stealsPerGame: 1.9,
    blocksPerGame: 0.4 
  },
  {
    name: 'Larry Bird',
    headshot: 'src/assets/headshots/larry-bird.jpg',
    pointsPerGame: 24.3,
    reboundsPerGame: 10.0,
    assistsPerGame: 6.3,
    stealsPerGame: 1.7,
    blocksPerGame: 0.8
  },
  {
    name: 'Michael Jordan',
    headshot: 'src/assets/headshots/michael-jordan.jpg',
    pointsPerGame: 30.1,
    reboundsPerGame: 6.2,
    assistsPerGame: 5.3,
    stealsPerGame: 2.3,
    blocksPerGame: 0.8
  },
  {
    name: 'Jamal Murray',
    headshot: 'src/assets/headshots/jamal-murray.jpg',
    pointsPerGame: 16.9,
    reboundsPerGame: 3.7,
    assistsPerGame: 4.2,
    stealsPerGame: 1.0,
    blocksPerGame: 0.3
  },
  {
    name: 'Shai Gilgeous-Alexander',
    headshot: 'src/assets/headshots/shai-gilgeous-alexander.jpg',
    pointsPerGame: 21.1,
    reboundsPerGame: 4.6,
    assistsPerGame: 4.5,
    stealsPerGame: 1.2,
    blocksPerGame: 0.7
  },
  {
    name: 'Devin Booker',
    headshot: 'src/assets/headshots/devin-booker.jpg',
    pointsPerGame: 23.9,
    reboundsPerGame: 4.0,
    assistsPerGame: 4.8,
    stealsPerGame: 0.8,
    blocksPerGame: 0.3
  },
  {
    name: 'Shaquille O\'Neal',
    headshot: 'src/assets/headshots/shaquille-oneal.jpg',
    pointsPerGame: 23.7,
    reboundsPerGame: 10.9,
    assistsPerGame: 2.5,
    stealsPerGame: 0.6,
    blocksPerGame: 2.3
  },
  {
    name: 'Kyrie Irving',
    headshot: 'src/assets/headshots/kyrie-irving.jpg',
    pointsPerGame: 23.4,
    reboundsPerGame: 3.9,
    assistsPerGame: 5.7,
    stealsPerGame: 1.3,
    blocksPerGame: 0.4
  },
  {
    name: 'Ben Simmons',
    headshot: 'src/assets/headshots/ben-simmons.jpg',
    pointsPerGame: 14.7,
    reboundsPerGame: 7.8,
    assistsPerGame: 7.5,
    stealsPerGame: 1.6,
    blocksPerGame: 0.7
  },
  {
    name: 'Damian Lillard',
    headshot: 'src/assets/headshots/damian-lillard.jpg',
    pointsPerGame: 25.2,
    reboundsPerGame: 4.2,
    assistsPerGame: 6.7,
    stealsPerGame: 1.0,
    blocksPerGame: 0.3
  },
  {
    name: 'Carmelo Anthony',
    headshot: 'src/assets/headshots/carmelo-anthony.jpg',
    pointsPerGame: 22.5,
    reboundsPerGame: 6.2,
    assistsPerGame: 2.7,
    stealsPerGame: 1.0,
    blocksPerGame: 0.5
  },
  {
    name: 'P.J. Tucker',
    headshot: 'src/assets/headshots/pj-tucker.jpg',
    pointsPerGame: 6.8,
    reboundsPerGame: 5.5,
    assistsPerGame: 1.4,
    stealsPerGame: 1.1,
    blocksPerGame: 0.3
  },
  {
    name: 'Chris Paul',
    headshot: 'src/assets/headshots/chris-paul.jpg',
    pointsPerGame: 17.9,
    reboundsPerGame: 4.5,
    assistsPerGame: 9.5,
    stealsPerGame: 2.1,
    blocksPerGame: 0.2
  },
  {
    name: 'Andre Iguodala',
    headshot: 'src/assets/headshots/andre-iguodala.jpg',
    pointsPerGame: 11.3,
    reboundsPerGame: 4.9,
    assistsPerGame: 4.2,
    stealsPerGame: 1.4,
    blocksPerGame: 0.5
  },
  {
    name: 'Allen Iverson',
    headshot: 'src/assets/headshots/allen-iverson.jpg',
    pointsPerGame: 26.7,
    reboundsPerGame: 3.7,
    assistsPerGame: 6.2,
    stealsPerGame: 2.2,
    blocksPerGame: 0.2
  },
];

