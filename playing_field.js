const table = require('./node_modules/table');

let tableSize = 7;

const startingObject = [];
const startingTable = [];

const startingObjectGenerator = () => {
  for (let i = 0; i < tableSize; i++) {
    startingObject.push([]);
    for (let j = 0; j < tableSize; j++) {
      startingObject[i].push({ element: '█' });
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

startingObjectGenerator();
startingTableGenerator()
