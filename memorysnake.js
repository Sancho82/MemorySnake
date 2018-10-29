const table = require('table');
const readline = require('readline-sync');
const chalk = require('chalk');
const CFonts = require('cfonts');
const soundplayer = require('sound-player');

const creators = require('./creators');
const intros = require('./intros');
const moves = require('./moves');
const controller = require('./controller');
const music_soundcongrat = require('./music_soundcongrat');
const music_soundglass = require('./music_soundglass');
const music_soundguessed = require('./music_soundguessed');
const music_soundtrack = require('./music_soundtrack');

const tableSize = 7;
let difficultyLevel = 1;
let ascendingNumber = 1;
let numberCounter = 0;
let x = 0;
let y = 0;
let startingTable = [];
let cloneTable = [];
let startingElements = {
  brush: ' ',
  star: chalk.red('*'),
  cursor: chalk.red('█'),
  empty: 'X'
};

const soundTrack = {
  filename: './sound/popcorn.mp3',
  gain: 8,
  debug: false,
  player: 'mpg123'
};

const soundStep = {
  filename: './sound/step.mp3',
  gain: 8,
  debug: false,
  player: 'mpg123'
};

const soundGuessed = {
  filename: './sound/woho.mp3',
  gain: 8,
  debug: false,
  player: 'mpg123'
};

const soundGlass = {
  filename: './sound/glass.mp3',
  gain: 8,
  debug: false,
  player: 'mpg123'
};

const soundCongrat = {
  filename: './sound/congrat.mp3',
  gain: 8,
  debug: false,
  player: 'mpg123'
};

const soundTrackPlayer = new soundplayer(soundTrack);
const soundStepPlayer = new soundplayer(soundStep);
const soundGuessedPlayer = new soundplayer(soundGuessed);
const soundGlassPlayer = new soundplayer(soundGlass);
const soundCongratPlayer = new soundplayer(soundCongrat);

/*
const intro = () => {
  if (difficultyLevel === 1) {
    CFonts.say('Welcome to Memorysnake!', {
      font: 'chrome',
      align: 'left',
      colors: ['black', 'red', 'black'],
      background: 'transparent',
      letterSpacing: 0.5,
      lineHeight: 0.5,
      space: true,
      maxLength: '0'
    });
    console.log(chalk.bgRgb('213', '255', '175').inverse(' •••••••••••• Rules of the Game ••••••••••••\n'));
    console.log(chalk.bgRgb('213', '255', '175')(' -> Try to memorise the position of the numbers on the table.\n'));
    console.log(chalk.bgRgb('213', '255', '175')(' -> Start game and try to guess the numbers in the correct order.\n'));
    console.log(chalk.bgRgb('213', '255', '175')(' -> Use keyboard arrows (+ Enter) to navigate.\n'));
    console.log(chalk.bgRgb('213', '255', '175')(' -> Complete all 7 levels to win the game.\n'));
  } else {
    console.log(chalk.red('Cool! Proceed to the next level!\n'));
  }
  while (true) {
    let question1 = readline.question('Are you ready? [y/n]: ');
    if (question1 === 'y') {
      console.clear();
      console.log(chalk.bgKeyword('orange')('Level ' + difficultyLevel + '/' + tableSize + '\n'));
      console.log(chalk.bgRgb(213, 255, 175)(table.table(startingTable)));
      let question2 = readline.question('Ready to proceed? [y/n]: ');
      if (question2 === 'y') {
        break;
      } else if (question2 === 'n') {
        console.log('Ok. Bye!');
        process.exit(1);
      } else {
        console.log('Sorry, I do not understand. Please type "y" or "n"!');
      }
    } else if (question1 === 'n') {
      console.log('Ok. Bye!');
      process.exit(1);
    } else {
      console.log('Sorry, I do not understand. Please type "y" or "n"!');
    }
  }
};

const intro2 = () => {
  while (true) {
    let question1 = readline.question('Are you ready? [y/n]: ');
    if (question1 === 'y') {
      nullifyer();
      tableGenerator();
      startingPointSetter(startingElements.cursor);
      numberPusher();
      console.clear();
      console.log(chalk.bgKeyword('orange')('Level ' + difficultyLevel + '/' + tableSize + '\n'));
      console.log(chalk.bgRgb(213, 255, 175)(table.table(startingTable)));
      let question2 = readline.question('Ready to proceed?: ');
      if (question2 === 'y') {
        break;
      } else if (question2 === 'n') {
        console.log('Ok. Bye!');
        process.exit(1);
      } else {
        console.log(chalk.red('Sorry, I do not understand. Please type "y" or ""n"!'));
      }
    } else if (question1 === 'n') {
      console.log('Ok. Bye!');
      process.exit(1);
    } else {
      console.log(chalk.red('Sorry, I do not understand. Please type "y" or "n"!'));
    }
  }
};

const tableGenerator = () => {
  for (let i = 0; i < tableSize; i++) {
    startingTable.push([]);
    cloneTable.push([]);
    for (let j = 0; j < tableSize; j++) {
      startingTable[i].push(startingElements.brush);
      cloneTable[i].push(startingElements.brush);
    }
  }
};

const startingPointSetter = (a) => {
  cloneTable[0][0] = a;
};

const placeChecker = (a, b) => {
  if (startingTable[a][b] === startingElements.brush) {
    return true;
  } else {
    return false;
  }
};

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const numberPusher = () => {
  while (ascendingNumber <= difficultyLevel + 2) {
    let y = getRandomInteger(0, tableSize);
    let x = getRandomInteger(0, tableSize);
    if ((y !== 0 || x !== 0) && placeChecker(y, x)) {
      startingTable[y][x] = ascendingNumber;
      cloneTable[y][x] = startingElements.empty;
      ascendingNumber++;
    }
  }
};

const nullifyer = () => {
  ascendingNumber = 1;
  numberCounter = 0;
  startingTable = [];
  cloneTable = [];
  x = 0;
  y = 0;
};

const moveUp = () => {
  if (y !== 0) {
    if ((cloneTable[y][x] === startingElements.cursor) && (cloneTable[y - 1][x] === startingElements.empty)) {
      cloneTable[y - 1][x] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
      soundStepPlayer.play();
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y - 1][x] === startingElements.empty)) {
      cloneTable[y - 1][x] = startingElements.star;
      cloneTable[y][x] = startingElements.empty;
      soundStepPlayer.play();
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y - 1][x] === startingTable[y - 1][x])) {
      cloneTable[y - 1][x] = startingElements.cursor;
      cloneTable[y][x] = startingElements.empty;
      soundStepPlayer.play();
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y - 1][x] === startingTable[y - 1][x])) {
      cloneTable[y - 1][x] = startingElements.cursor;
      cloneTable[y][x] = startingTable[y][x];
      soundStepPlayer.play();
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y - 1][x] === startingElements.empty)) {
      cloneTable[y - 1][x] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
      soundStepPlayer.play();
    }
    y--;
  }
};

const moveDown = () => {
  if (y !== tableSize - 1) {
    if ((cloneTable[y][x] === startingElements.cursor) && (cloneTable[y + 1][x] === startingElements.empty)) {
      cloneTable[y + 1][x] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
      soundStepPlayer.play();
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y + 1][x] === startingElements.empty)) {
      cloneTable[y + 1][x] = startingElements.star;
      cloneTable[y][x] = startingElements.empty;
      soundStepPlayer.play();
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y + 1][x] === startingTable[y + 1][x])) {
      cloneTable[y + 1][x] = startingElements.cursor;
      cloneTable[y][x] = startingElements.empty;
      soundStepPlayer.play();
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y + 1][x] === startingTable[y + 1][x])) {
      cloneTable[y + 1][x] = startingElements.cursor;
      cloneTable[y][x] = startingTable[y][x];
      soundStepPlayer.play();
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y + 1][x] === startingElements.empty)) {
      cloneTable[y + 1][x] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
      soundStepPlayer.play();
    }
    y++;
  }
};

const moveRight = () => {
  if (x !== tableSize - 1) {
    if ((cloneTable[y][x] === startingElements.cursor) && (cloneTable[y][x + 1] === startingElements.empty)) {
      cloneTable[y][x + 1] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
      soundStepPlayer.play();
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y][x + 1] === startingElements.empty)) {
      cloneTable[y][x + 1] = startingElements.star;
      cloneTable[y][x] = startingElements.empty;
      soundStepPlayer.play();
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y][x + 1] === startingTable[y][x + 1])) {
      cloneTable[y][x + 1] = startingElements.cursor;
      cloneTable[y][x] = startingElements.empty;
      soundStepPlayer.play();
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y][x + 1] === startingTable[y][x + 1])) {
      cloneTable[y][x + 1] = startingElements.cursor;
      cloneTable[y][x] = startingTable[y][x];
      soundStepPlayer.play();
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y][x + 1] === startingElements.empty)) {
      cloneTable[y][x + 1] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
      soundStepPlayer.play();
    }
    x++;
  }
};

const moveLeft = () => {
  if (x !== 0) {
    if ((cloneTable[y][x] === startingElements.cursor) && (cloneTable[y][x - 1] === startingElements.empty)) {
      cloneTable[y][x - 1] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
      soundStepPlayer.play();
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y][x - 1] === startingElements.empty)) {
      cloneTable[y][x - 1] = startingElements.star;
      cloneTable[y][x] = startingElements.empty;
      soundStepPlayer.play();
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y][x - 1] === startingElements.brush)) {
      cloneTable[y][x - 1] = startingElements.cursor;
      cloneTable[y][x] = startingElements.empty;
      soundStepPlayer.play();
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y][x - 1] === startingTable[y][x - 1])) {
      cloneTable[y][x - 1] = startingElements.cursor;
      cloneTable[y][x] = startingTable[y][x];
      soundStepPlayer.play();
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y][x - 1] === startingElements.empty)) {
      cloneTable[y][x - 1] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
      soundStepPlayer.play();
    }
    x--;
  }
};

const controller = () => {
  while (true) {
    console.clear();
    console.log(chalk.bgKeyword('orange')('Level ' + difficultyLevel + '/' + tableSize + '\n'));
    console.log(chalk.bgRgb(213, 255, 175)(table.table(cloneTable)));
    let direction = readline.question('?');
    let integer = parseInt(direction);
    if (direction === '[A') {
      moveUp();
    } else if (direction === '[B') {
      moveDown();
    } else if (direction === '[C') {
      moveRight();
    } else if (direction === '[D') {
      moveLeft();
    } else if (integer > 0 && integer < 10) {
      if (integer === startingTable[y][x] && integer === numberCounter + 1) {
        cloneTable[y][x] = startingTable[y][x];
        numberCounter++;
        soundGuessedPlayer.play();
      } else {
        soundGlassPlayer.play();
        console.log('Bad order! The table looked like this:');
        console.log(chalk.bgRgb(213, 255, 175)(table.table(startingTable)));
        console.log(chalk.red('Restart the Level ' + difficultyLevel + '...'));
        intro2();
      }
      if (integer === (difficultyLevel + 2)) {
        console.clear();
        console.log(chalk.bgRgb(213, 255, 175)(table.table(cloneTable)));
        break;
      }
    } else {
      console.log(chalk.red('Bad key!'));
    }
  }
};
*/

const game = () => {
  while (difficultyLevel <= 2) {
    creators.tableGenerator();
    creators.startingPointSetter(startingElements.cursor);
    creators.numberPusher();
    intros.intro();
    controller.controller();
    difficultyLevel++;
    creators.nullifyer();
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
  soundCongratPlayer.play();
};

soundTrackPlayer.play();
game();

soundTrackPlayer.on('error', function (err) {
  console.log('Error occurred:', err);
});

soundStepPlayer.on('error', function (err) {
  console.log('Error occurred:', err);
});

soundGlassPlayer.on('error', function (err) {
  console.log('Error occurred:', err);
});

soundCongratPlayer.on('error', function (err) {
  console.log('Error occurred:', err);
});

soundGuessedPlayer.on('error', function (err) {
  console.log('Error occurred:', err);
});
