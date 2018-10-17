const table = require('./node_modules/table');
const readlinesync = require('./node_modules/readline-sync');
// const axel = require('./node_modules/axel');

const mapSize = 7;
let difficultyLevel;

const intro = () => {
  console.log('Welcome to Memorysnake!');
};

const difficultySetter = () => {
  const d = readlinesync.question('Please set difficulty level (1 - 12): ');
  difficultyLevel = d;
};

const startingObject = [];
let startingTable = [];

const startingObjectGenerator = () => {
  for (let i = 0; i < mapSize; i++) {
    startingObject.push([]);
    for (let j = 0; j < mapSize; j++) {
      startingObject[i].push({element: '█'});
    }
  }
  // console.log(startingObject);
};

const startingTableGenerator = () => {
  for (let i = 0; i < startingObject.length; i++) {
    startingTable.push([]);
    for (let j = 0; j < startingObject[i].length; j++) {
      startingTable[i].push(startingObject[i][j].element);
    }
  }
  // console.log(table.table(startingTable));
};

const placeChecker = (a, b) => {
  if (startingTable[a][b] === '█') {
    return true;
  } else {
    return false;
  }
};

let c = 1;

const numberPusher = () => {
  while (c <= difficultyLevel) {
    let x = Math.floor(Math.random() * mapSize);
    let y = Math.floor(Math.random() * mapSize);
    if (placeChecker(x, y)) {
      startingTable[x][y] = c;
      c++;
    } else {
      numberPusher();
    }
  }
  console.log(table.table(startingTable));
};

intro();
difficultySetter();
startingObjectGenerator();
startingTableGenerator();
numberPusher();
