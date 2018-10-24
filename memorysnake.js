const table = require('table');
const readline = require('readline-sync');
const keypress = require('keypress');

const tableSize = 7;
let difficultyLevel;

const intro = () => {
  console.log('Welcome to Memorysnake!\n Rules of the Game:\n 1. Try to memorise the position of the numbers on the table\n 2. Start game and try to guess the numbers in the correct order\n 3. Use keyboard arrows to navigate.\n 4. Complete all 6 levels to win the game.');
  while (true) {
    let question1 = readline.question('Are you ready?: ');
    if (question1 === 'y') {
      console.log('Here are the numbers you need to guess.');
      console.log(table.table(startingTable));
      let question2 = readline.question('Ready to proceed?: ');
      if (question2 === 'y') {
        break;
      } else if (question2 === 'n') {
        console.log('Ok. Bye!');
        process.exit(1);
      } else {
        console.log('Sorry, I do not understand. Please type y or n!');
      }
    } else if (question1 === 'n') {
      console.log('Ok. Bye!');
      process.exit(1);
    } else {
      console.log('Sorry, I do not understand. Please type y or n!');
    }
  }
};

const difficultySetter = () => {
  const d = readline.question('Please set difficulty level (1 - 12): ');
  difficultyLevel = d;
};

const startingPointSetter = (a) => {
  cloneTable[0][0] = a;
};

let startingElements = {
  brush: '█',
  star: '*',
  cursor: 'X',
  empty: ' '
};
let startingTable = [];
let cloneTable = [];

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

const placeChecker = (a, b) => {
  if (startingTable[a][b] === startingElements.brush) {
    return true;
  } else {
    return false;
  }
};

let ascendingNumber = 1;
let startingTableIndexes = [];

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const numberPusher = () => {
  while (ascendingNumber <= difficultyLevel) {
    let y = getRndInteger(0, tableSize);
    let x = getRndInteger(0, tableSize);
    if ((y !== 0 || x !== 0) && placeChecker(y, x)) {
      startingTable[y][x] = ascendingNumber;
      startingTableIndexes.push(y, x);
      cloneTable[y][x] = startingElements.empty;
      ascendingNumber++;
    }
  }
};

let numberCounter = 0;

const equalityChecker = (integerNumber) => {
  if (integerNumber === startingTable[y][x]) {
    cloneTable[y][x] = startingTable[y][x];
    numberCounter++;
  }
};

const numberChecker = (integerNumber) => {
  if (integerNumber > 0 && integerNumber < 10) {
    return true;
  } else {
    return false;
  }
};

const winCheck = (integerNumber) => {
  if (integerNumber === (startingTableIndexes.length / 2)) {
    return true;
  } else {
    return false;
  }
};

let x = 0;
let y = 0;

const moveUp = () => {
  if (y !== 0) {
    if ((cloneTable[y][x] === startingElements.cursor) && (cloneTable[y - 1][x] === startingElements.empty)) {
      cloneTable[y - 1][x] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y - 1][x] === startingElements.empty)) {
      cloneTable[y - 1][x] = startingElements.star;
      cloneTable[y][x] = startingElements.empty;
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y - 1][x] === startingTable[y - 1][x])) {
      cloneTable[y - 1][x] = startingElements.cursor;
      cloneTable[y][x] = startingElements.empty;
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y - 1][x] === startingTable[y - 1][x])) {
      cloneTable[y - 1][x] = startingElements.cursor;
      cloneTable[y][x] = startingTable[y][x];
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y - 1][x] === startingElements.empty)) {
      cloneTable[y - 1][x] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
    }
    y--;
  }
};

const moveDown = () => {
  if (y !== tableSize - 1) {
    if ((cloneTable[y][x] === startingElements.cursor) && (cloneTable[y + 1][x] === startingElements.empty)) {
      cloneTable[y + 1][x] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y + 1][x] === startingElements.empty)) {
      cloneTable[y + 1][x] = startingElements.star;
      cloneTable[y][x] = startingElements.empty;
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y + 1][x] === startingTable[y + 1][x])) {
      cloneTable[y + 1][x] = startingElements.cursor;
      cloneTable[y][x] = startingElements.empty;
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y + 1][x] === startingTable[y + 1][x])) {
      cloneTable[y + 1][x] = startingElements.cursor;
      cloneTable[y][x] = startingTable[y][x];
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y + 1][x] === startingElements.empty)) {
      cloneTable[y + 1][x] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
    }
    y++;
  }
};

const moveRight = () => {
  if (x !== tableSize - 1) {
    if ((cloneTable[y][x] === startingElements.cursor) && (cloneTable[y][x + 1] === startingElements.empty)) {
      cloneTable[y][x + 1] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y][x + 1] === startingElements.empty)) {
      cloneTable[y][x + 1] = startingElements.star;
      cloneTable[y][x] = startingElements.empty;
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y][x + 1] === startingTable[y][x + 1])) {
      cloneTable[y][x + 1] = startingElements.cursor;
      cloneTable[y][x] = startingElements.empty;
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y][x + 1] === startingTable[y][x + 1])) {
      cloneTable[y][x + 1] = startingElements.cursor;
      cloneTable[y][x] = startingTable[y][x];
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y][x + 1] === startingElements.empty)) {
      cloneTable[y][x + 1] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
    }
    x++;
  }
};

const moveLeft = () => {
  if (x !== 0) {
    if ((cloneTable[y][x] === startingElements.cursor) && (cloneTable[y][x - 1] === startingElements.empty)) {
      cloneTable[y][x - 1] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y][x - 1] === startingElements.empty)) {
      cloneTable[y][x - 1] = startingElements.star;
      cloneTable[y][x] = startingElements.empty;
    } else if ((cloneTable[y][x] === startingElements.star) && (cloneTable[y][x - 1] === startingElements.brush)) {
      cloneTable[y][x - 1] = startingElements.cursor;
      cloneTable[y][x] = startingElements.empty;
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y][x - 1] === startingTable[y][x - 1])) {
      cloneTable[y][x - 1] = startingElements.cursor;
      cloneTable[y][x] = startingTable[y][x];
    } else if (cloneTable[y][x] !== Object.values(startingElements) && (cloneTable[y][x - 1] === startingElements.empty)) {
      cloneTable[y][x - 1] = startingElements.star;
      cloneTable[y][x] = startingTable[y][x];
    }
    x--;
  }
};

const controller = () => {
  while (true) {
    console.clear();
    console.log(table.table(cloneTable));
    // console.log(numberCounter);
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
    } else if (numberChecker(integer)) {
      equalityChecker(integer);
      if (winCheck(numberCounter)) {
        console.clear();
        console.log(table.table(cloneTable));
        console.log('Congratulation! Go the next level! \n');
        break;
      }
    } else {
      console.log('???');
    }
  }
};

const game = () => {
  difficultySetter();
  tableGenerator();
  startingPointSetter(startingElements.cursor);
  numberPusher();
  intro();
  controller();
};

game();
