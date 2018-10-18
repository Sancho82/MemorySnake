const table = require('./node_modules/table');
const readline = require('./node_modules/readline-sync');
const clear = require('./node_modules/axel');

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
  startingTable[0][0] = a;
};

let startingElements = {
  brush: '█',
  star: '*',
  cursor: 'X',
  number: 0
};
let startingTable = [];

const startingTableGenerator = () => {
  for (let i = 0; i < mapSize; i++) {
    startingTable.push([]);
    for (let j = 0; j < mapSize; j++) {
      startingTable[i].push(startingElements.brush);
    }
  }
};

const placeChecker = (a, b) => {
  if (startingTable[a][b] === '█') {
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

const numberPusher = () => {
  while (c <= difficultyLevel) {
    let x = Math.floor(Math.random() * mapSize);
    let y = Math.floor(Math.random() * mapSize);
    if ((x !== 0 || y !== 0) && placeChecker(x, y)) {
      startingTable[x][y] = c;
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
    [startingTable[x][y], startingTable[x - 1][y]] = [startingTable[x - 1][y], startingTable[x][y]];
    x--;
  }
};

const moveDown = () => {
  if (x !== 6) {
    [startingTable[x][y], startingTable[x + 1][y]] = [startingTable[x + 1][y], startingTable[x][y]];
    x++;
  }
};

const moveRight = () => {
  if (y !== 6) {
    [startingTable[x][y + 1], startingTable[x][y]] = [startingTable[x][y], startingTable[x][y + 1]];
    y++;
  }
};

const moveLeft = () => {
  if (y !== 0) {
    [startingTable[x][y - 1], startingTable[x][y]] = [startingTable[x][y], startingTable[x][y - 1]];
    y--;
  }
};

const controller = () => {
  while (true) {
    console.clear();
    console.log(table.table(startingTable));
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
startingPointSetter(startingElements.cursor);
numberPusher();
controller();

console.log(table.table(startingTable));
