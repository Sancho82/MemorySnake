//let readline = require('readline-sync');
let pista = require('table');
let ctx = require('axel');

//ctx.clear();

const tableBoxes = [
  {box1: 'X'},
  {box2: ' '},
  {box3: ' '}
];

let tableData = [];

tableData.push([tableBoxes[0].box1, tableBoxes[1].box2, tableBoxes[2].box3]);

let tableView = pista.table(tableData);

console.log(tableView);
