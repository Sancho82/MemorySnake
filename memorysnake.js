const table = require('table');
const readline = require('readline-sync');
const axel = require('axel');

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
  empty: ' '
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
  if ((startingTable[a][b] === startingElements.brush) || (cloneTable[a][b] === startingElements.brush)) {
    return true;
  } else {
    return false;
  }
};

const cursorSwitcher = () => {
  for (let i = 0; i < startingTable.length; i++) {
    for (let j = 0; j < startingTable[i].length; j++) {
      if (startingTable[i][j].element === startingElements.brush) {
        startingTable[i][j].element = startingElements.star;
      }
    }
  }
};

let c = 1;
let startingTableIndexes = [];

const numberPusher = () => {
  while (c <= difficultyLevel) {
    let x = Math.floor(Math.random() * mapSize);
    let y = Math.floor(Math.random() * mapSize);
    if ((x !== 0 || y !== 0) && placeChecker(x, y)) {
      startingTable[y][x] = c;
      startingTableIndexes.push(x, y);
      cloneTable[y][x] = startingElements.empty;
    } else {
      numberPusher();
    }
    c++;
  }
};

let x = 0;
let y = 0;

const moveUp = () => {
  if (x !== 0) {
    [cloneTable[x][y], cloneTable[x - 1][y]] = [cloneTable[x - 1][y], cloneTable[x][y]];
    x--;
  }
};

const moveDown = () => {
  if (x !== 6) {
    [cloneTable[x][y], cloneTable[x + 1][y]] = [cloneTable[x + 1][y], cloneTable[x][y]];
    x++;
  }
};

const moveRight = () => {
  if (y !== 6) {
    [cloneTable[x][y + 1], cloneTable[x][y]] = [cloneTable[x][y], cloneTable[x][y + 1]];
    y++;
  }
};

const moveLeft = () => {
  if (y !== 0) {
    [cloneTable[x][y - 1], cloneTable[x][y]] = [cloneTable[x][y], cloneTable[x][y - 1]];
    y--;
  }
};

const controller = () => {
  while (true) {
    console.clear();
    console.log(table.table(cloneTable));
    console.log(startingTableIndexes);
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
  }
};

intro();
difficultySetter();
startingTableGenerator();
cloneTableGenerator();
startingPointSetter(startingElements.cursor);
numberPusher();
//controller();
console.log(table.table(startingTable));

let go = readline.question('Mehet?');
if (go === 'g') {
  //intro();
  //difficultySetter();
  startingTableGenerator();
  cloneTableGenerator();
  startingPointSetter(startingElements.cursor);
  numberPusher();
  controller();
}

console.log(table.table(startingTable));