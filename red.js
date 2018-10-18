const table = require('./node_modules/table');
const readline = require('./node_modules/readline-sync');
const clear = require('./node_modules/axel');

let startingObject = [];
let startingTable = [];

const mapSize = 7;
let difficultyLevel;

const startingObjectGenerator = () => {
  for (let i = 0; i < mapSize; i++) {
    startingObject.push([]);
    for (let j = 0; j < mapSize; j++) {
      startingObject[i].push({element: '█'});
    }
  }
};

startingObjectGenerator();
console.log(table.table(Object.keys(startingObject.element)));
