const table = require('table');

let tableElements = {
  brush: '█',
  star: '*',
  cursor: 'X',
  number: 0
};

let startingTable = [];
let tableSize = 7;

const startingTableGenerator = () => {
  for (let x = 0; x < tableSize; x++) {
    startingTable.push([]);
    for (let y = 0; y < tableSize; y++) {
      startingTable[x].push(tableElements.brush);
    }
  }
};

startingTableGenerator();
startingTable[0][0] = tableElements.cursor;
let tableView = table.table(startingTable);
console.log(tableView);
