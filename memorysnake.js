const chalk = require('chalk');
const CFonts = require('cfonts');

const creators = require('./creators');
const intros = require('./intros');
const controllers = require('./controller');
const music = require('./music');

let memorysnakeValues = {
  tableSize: 7,
  difficultyLevel: 1,
  ascendingNumber: 1,
  numberCounter: 0,
  x: 0,
  y: 0,
  startingTable: [],
  cloneTable: [],
  startingElements: {
    brush: ' ',
    star: chalk.red('*'),
    cursor: chalk.red('█'),
    empty: 'X'
  }
};

const game = () => {
  while (memorysnakeValues.difficultyLevel <= 2) {
    creators.tableGenerator(memorysnakeValues);
    creators.startingPointSetter(memorysnakeValues.startingElements.cursor, memorysnakeValues);
    creators.numberPusher(memorysnakeValues);
    intros.intro(memorysnakeValues);
    controllers.controller(memorysnakeValues);
    memorysnakeValues.difficultyLevel++;
    creators.nullifyer(memorysnakeValues);
  }
  CFonts.say('Congratulations!\nYou have completed\nthe game!', {
    font: 'chrome',
    align: 'left',
    colors: ['black', 'red', 'black'],
    background: 'transparent',
    letterSpacing: 0.5,
    lineHeight: 0.5,
    space: true,
    maxLength: '0'
  });
  music.soundCongratPlayer.play();
};

music.soundTrackPlayer.play();
game();
