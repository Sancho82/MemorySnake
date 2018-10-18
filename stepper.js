const table = require('table');
//const keypress = require('keypress');
const readline = require('readline-sync');
const clear = require('axel');
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
 // console.log(startingObject);
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
startingObject[0][0] = { element: "X" };
startingTableGenerator()


let x =0;
let y = 0;
while (true) {
  clear.clear();
  console.log(table.table(startingTable));
  let direction = readline.question("?")
  switch (direction) {
    case ('[A'): 
      if (x != 0) {
        [startingTable[x][y], startingTable[x - 1][y]] = [startingTable[x - 1][y], startingTable[x][y]];
        x--;     //array matching
      }
      break;
    case ('[B'): 
      if (x != 6) {
        [startingTable[x][y], startingTable[x + 1][y]] = [startingTable[x + 1][y], startingTable[x][y]];
        x++;
      }
      break;
    case ('[C'): 
      if (y != 6) {
        [startingTable[x][y + 1], startingTable[x][y]] = [startingTable[x][y], startingTable[x][y + 1]];
        y++;
      }
      break;
    case ('[D'): 
      if (y != 0) {
        [startingTable[x][y - 1], startingTable[x][y]] = [startingTable[x][y], startingTable[x][y - 1]];
        y--;
      }
      break;
    default:
      console.log("???");
      return;
  } 
}
