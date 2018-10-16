const table = require('./node_modules/table');
const readlinesync = require('./node_modules/readline-sync');
const axel = require('./node_modules/axel');

let difficultyLevel = 3;

const startingObject = [];

let startingTable = [];

const startingObjectGenerator = () => {
  for (let i = 0; i < difficultyLevel; i++) {
    startingObject.push([]);
    for (let j = 0; j < difficultyLevel; j++) {
      startingObject[i].push({element: '█'});
    }
  }
  console.log(startingObject);
};

const startingTableGenerator = () => {
  for (let i = 0; i < startingObject.length; i++) {
    startingTable.push([]);
    for (let j = 0; j < startingObject[i].length; j++) {
      startingTable[i].push(startingObject[i][j].element);
    }
  }
  console.log(table.table(startingTable));
};

const numberPusher = () => {
  for (let i = 0; i < difficultyLevel; i++) {
    let x = Math.floor(Math.random() * difficultyLevel);
    let y = Math.floor(Math.random() * difficultyLevel);
    const placer = () => {
      if (startingTable[x][y] !== '█') {
        startingTable[x][y] = i + 1;
      }
    };
    placer();
  }
  console.log(table.table(startingTable));
};

startingObjectGenerator();
startingTableGenerator();
numberPusher();
