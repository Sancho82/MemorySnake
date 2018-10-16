//let readline = require('readline-sync');
let table = require('table');
let ctx = require('axel');
let readlineSync = require('readline-sync');
let keypress = require('keypress');
const clear = require('console-clear');

//ctx.clear();

let coordinate = 0;

const tableBoxes = [
  {key: 'X'},
  {key: ' '},
  {key: ' '},
  {key: ' '}
];

let tableDatas = [];
let x = '';

tableDatas.push([tableBoxes[0].key, tableBoxes[1].key, tableBoxes[2].key]);

let tableView = table.table(tableDatas);

console.log(tableView);

function stepperRight() {
  coordinate++;
  tableDatas = [];
  x = tableBoxes[coordinate].key;
  tableBoxes[coordinate].key = tableBoxes[coordinate + 1].key;
  tableBoxes[coordinate + 1].key = x;
  for (i = 0; i < tableBoxes.length; i++) {
    tableDatas.push([tableBoxes[i].key]);
  }
  tableView = 0;
  tableView = table.table(tableDatas);
  clear();
  console.log(tableView);
}

while (true) {
  let location = readlineSync.question();
  if (location === '[C') {
    stepperRight();
  } else {
    break;
  }
}