const table = require('table');
const readline = require('readline-sync');

const mapSize = 7;
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
  empty: ' ',
  number: 0
};
let startingTable = [];
let cloneTable = [];

const startingTableGenerator = () => {
  for (let i = 0; i < mapSize; i++) {
    startingTable.push([]);
    for (let j = 0; j < mapSize; j++) {
      startingTable[i].push(startingElements.brush);
    }
  }
};

const cloneTableGenerator = () => {
  for (let i = 0; i < mapSize; i++) {
    cloneTable.push([]);
    for (let j = 0; j < mapSize; j++) {
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

let c = 1;
let startingTableIndexes = [];

const numberPusher = () => {
  while (c <= difficultyLevel) {
    let a = Math.floor(Math.random() * mapSize);
    let b = Math.floor(Math.random() * mapSize);
    if ((a !== 0 || b !== 0) && placeChecker(a, b)) {
      startingTable[a][b] = c;
      startingTableIndexes.push(b, a);
      cloneTable[a][b] = startingElements.empty;
      c++;
    } else {
      numberPusher();
    }
  }
};

const equalityChecker = () => {
  let guess = readline.question('Type in your guess: ');
  if (parseInt(guess) === startingTable[x][y]) {
    return true;
  } else {
    return false;
  }
};

let x = 0;
let y = 0;

const moveUp = () => {
  if (x !== 0 && startingTable[x - 1][y] !== startingElements.brush) {
    [cloneTable[x - 1][y], cloneTable[x][y]] = [startingElements.star, startingTable[x][y]];
    x--;
  } else if (x !== 0) {
    [cloneTable[x - 1][y], cloneTable[x][y]] = [startingElements.cursor, startingTable[x][y]];
    x--;
  }
};

const moveDown = () => {
  if (x !== 6 && startingTable[x + 1][y] !== startingElements.brush) {
    [cloneTable[x + 1][y], cloneTable[x][y]] = [startingElements.star, startingTable[x][y]];
    x++;
  } else if (x !== 6) {
    [cloneTable[x + 1][y], cloneTable[x][y]] = [startingElements.cursor, startingTable[x][y]];
    x++;
  }
};

const moveLeft = () => {
  if (y !== 0 && startingTable[x][y - 1] !== startingElements.brush) {
    [cloneTable[x][y - 1], cloneTable[x][y]] = [startingElements.star, startingTable[x][y]];
    y--;
  } else if (y !== 0) {
    [cloneTable[x][y - 1], cloneTable[x][y]] = [startingElements.cursor, startingTable[x][y]];
    y--;
  }
};

const moveRight = () => {
  if (y !== 6 && startingTable[x][y + 1] !== startingElements.brush) {
    [cloneTable[x][y + 1], cloneTable[x][y]] = [startingElements.star, startingTable[x][y]];
    y++;
  } else if (y !== 6) {
    [cloneTable[x][y + 1], cloneTable[x][y]] = [startingElements.cursor, startingTable[x][y]];
    y++;
  }
};

const controller = () => {
  let direction = readline.question('?');
  switch (direction) {
    case ('[A'):
      moveUp();
      break;
    case ('[B'):
      moveDown();
      break;
    case ('[C'):
      moveRight();
      break;
    case ('[D'):
      moveLeft();
      break;
    default:
      console.log('???');
  }
};

const gamePlay = () => {
  while (true) {
    console.clear();
    console.log(table.table(startingTable));
    console.log(table.table(cloneTable));
    if (startingTable[x][y] !== startingElements.brush) {
      if (equalityChecker()) {
        cloneTable[x][y] = startingTable[x][y];
      } else {
        console.log('Game Over!!!');
        process.exit(1);
      }
    }
    controller();
  }
};

const game = () => {
  intro();
  difficultySetter();
  startingTableGenerator();
  cloneTableGenerator();
  startingPointSetter(startingElements.cursor);
  numberPusher();
  gamePlay();
};

game();
