const table = require('table');
const readline = require('readline-sync');
const keypress = require('keypress');

let fieldSize = 7;
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
};

let difficulty = 12; // readline.question('How many numbers do you wish to guess?')

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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
      guessIndex.push([index1, index2]);
      i++;
      console.clear();
      console.log(table.table(taskTable));
    }
  }
};

let x = 0;
let y = 0;
let guessNum = 0; 

const guess = () => {
  guessNum = readline.question('Guess the number: ');
  return guessNum;
}

// move-ok nem működnek!!!
const moveUp = () => {
  if (y !== 0) {
    if (guessTable[y][x] === 'X' && guessTable[y - 1][x] === ' ') {
      guessTable[y - 1][x] = 'X';
      guessTable[y][x]= ' ';
      reDrawGuess();
    } else if (guessTable[y][x] === 'X' && guessTable[y - 1][x] === '*') {
      guessTable[y][x] = ' ';
      guessTable[y - 1][x] = 'X';
      reDrawGuess();
      guessTable[y - 1][x] = guess();
      reDrawGuess();
    }
  }
  y--;
}


const moveDown = () => {
  if (y !== fieldSize - 1 && guessTable[y + 1][x] === ' ') {
    guessTable[y + 1][x] = 'X';
    guessTable[y][x] = ' ';
    y++;
  }
}

const moveRight = () => {
  if (x !== fieldSize - 1 && guessTable[y][x + 1] === ' ') {
    guessTable[y][x + 1] = 'X';
    guessTable[y][x] = ' ';
    x++;
  }
}

const moveLeft = () => {
  if (x !== 0 && guessTable[y][x - 1] === ' ') {
    guessTable[y][x - 1] = 'X';
    guessTable[y][x] = ' ';
    x--;
  }
}

const reDrawGuess = () => {
  console.clear();
  console.log(table.table(guessTable));
}

const step = () => {
  while (true) {
    let direction = readline.question('Where?')
    if (direction === '[A') {
      moveUp();
    } else if (direction === '[B') {
      moveDown();
    } else if (direction === '[C') {
      moveRight();
    } else if (direction === '[D') {
      moveLeft();
    }
    reDrawGuess();
  }
};


playField();
taskNumbers();
step();
