const table = require('table');
const readlineSync = require('readline-sync');

let fieldSize = 6;
let taskTable = [];
let guessTable = [];

const playField = () => {
 for (let i = 0; i < fieldSize; i++) {
   taskTable.push([]);
   guessTable.push([]);
   for (let j = 0; j < fieldSize; j++) {
     taskTable[i].push(' ');
     guessTable[i].push(' ');
   }
 }
}

let difficulty = 12;   //readline.question('How many numbers do you wish to guess?')

const getRndInteger = (min, max) => {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

const taskNumbers = () => {
 let index1;
 let index2;
 let i = 1;
 let guessIndex = [];
 
 while (i <= difficulty) {
   index1 = getRndInteger(0, fieldSize - 1);
   index2 = getRndInteger(0, fieldSize - 1);
   if (taskTable[index1][index2] === ' ' && (index1 !== 0 || index2 !== 0)) {
     taskTable[index1][index2] = i;
     guessTable[index1][index2] = '*';
     guessIndex.push([index1, index2])
     i++;
     console.clear();
     console.log(table.table(taskTable));
     console.log(guessIndex);
   }
 }
}

const guess = () => {
 guessTable[0][0] = X;
 //to be continued
}


playField();
taskNumbers();