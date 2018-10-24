const table = require('table');
const readline = require('readline-sync');

const tableSize = 7;
let difficultyLevel;

const intro = () => {
  console.log('Welcome to Memorysnake!');
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

const startingTableGenerator = () => {
  for (let i = 0; i < tableSize; i++) {
    startingTable.push([]);
    for (let j = 0; j < tableSize; j++) {
      startingTable[i].push(startingElements.brush);
    }
  }
};

const cloneTableGenerator = () => {
  for (let i = 0; i < tableSize; i++) {
    cloneTable.push([]);
    for (let j = 0; j < tableSize; j++) {
      cloneTable[i].push(startingElements.brush);
    }
  }
};

const placeChecker = (a, b) => {
  if ((startingTable[a][b] === startingElements.brush) || (cloneTable[a][b] === startingElements.brush)) {
    return true;
  } else {
    return false;
  }
};

let ascendingNumber = 1;
let startingTableIndexes = [];

const numberPusher = () => {
  while (ascendingNumber <= difficultyLevel) {
    let y = Math.floor(Math.random() * tableSize);
    let x = Math.floor(Math.random() * tableSize);
    if ((y !== 0 || x !== 0) && placeChecker(y, x)) {
      startingTable[y][x] = ascendingNumber;
      startingTableIndexes.push(y, x);
      cloneTable[y][x] = startingElements.empty;
    } else {
      numberPusher();
    }
    ascendingNumber++;
  }
};

let numberCounter = 0;

const equalityChecker = (integerNumber) => {
  if (integerNumber === startingTable[y][x]) {
    cloneTable[y][x] = startingTable[y][x];
    numberCounter++;
  } else {
    cloneTable[y][x] = cloneTable[y][x];
  }
};

const isWin = (integerNumber) => {
  if (integerNumber === (startingTableIndexes.length / 2)) {
    return true;
  } else {
    return false;
  }
};

const numberChecker = (integerNumber) => {
  if ((0 < integerNumber) && (integerNumber < 10)) {
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
      cloneTable[y -1][x] = startingElements.star;
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
    } else {
      [cloneTable[y][x], cloneTable[y - 1][x]] = [cloneTable[y - 1][x], cloneTable[y][x]];
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
    } else {
      [cloneTable[y][x], cloneTable[y + 1][x]] = [cloneTable[y + 1][x], cloneTable[y][x]];
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
    } else {
      [cloneTable[y][x + 1], cloneTable[y][x]] = [cloneTable[y][x], cloneTable[y][x + 1]];
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
    } else {
      [cloneTable[y][x - 1], cloneTable[y][x]] = [cloneTable[y][x], cloneTable[y][x - 1]];
    }
    x--;
  }
};

const controller = () => {
  while (true) {
    console.clear();
    console.log(table.table(cloneTable));
    // console.log(startingTableIndexes);
    // console.log(startingTableIndexes.length / 2);
    console.log(numberCounter);
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
      if (isWin(numberCounter)) {
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

intro();
difficultySetter();
startingTableGenerator();
cloneTableGenerator();
startingPointSetter(startingElements.cursor);
numberPusher();
console.log(table.table(startingTable));

let go = readline.question('Are you ready? Yes "y" or exit "e": ');
if (go === 'y') {
  startingPointSetter(startingElements.cursor);
  numberPusher();
  controller();
} else {
  console.log('Bye!');
}
