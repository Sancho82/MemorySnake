//let readline = require('readline-sync');
let table = require('table');
let ctx = require('axel');
let readlineSync = require('readline-sync');
let keypress = require('keypress');
const clear = require('console-clear');

//ctx.clear();

//let coordinate = [0, 0];
  

const tableBoxes = [
  {key: 'X'}, {key: ' '}, {key: ' '}, {key: ' '}
];

let tableDatas = [];
let x = 0;
let y = 0;
let temp = '';

const arrayPusher = () => {
  tableDatas.push([tableBoxes[0].key, tableBoxes[1].key, tableBoxes[2].key, tableBoxes[3].key]);
};

const stepperRight = () => {
  x++;
  tableDatas = [];
  temp = tableBoxes[x].key;
  tableBoxes[x].key = tableBoxes[x-1].key;
  tableBoxes[x-1].key = temp;
};

const stepperLeft = () => {
  x--;
  tableDatas = [];
  temp = tableBoxes[x].key;
  tableBoxes[x].key = tableBoxes[x+1].key;
  tableBoxes[x+1].key = temp;
};

arrayPusher();

let tableView = table.table(tableDatas);

console.log(tableView);

const tableConsole = () => {
  tableView = 0;
  tableView = table.table(tableDatas);
  clear();
  console.log(tableView);
};

while (true) {
  let keyboard = readlineSync.question();
  if (keyboard === '[C') {
    stepperRight();
    arrayPusher();
    tableConsole();
  }
  if (keyboard === '[C') {
    stepperLeft();
    arrayPusher();
    tableConsole();
  } else {
    break;
  }
}

//  for (let i = 0; i < tableBoxes.length; i++) {
//    tableDatas.push([tableBoxes[i].key]);
