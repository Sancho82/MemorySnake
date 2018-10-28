const table = require('table');
const readline = require('readline-sync');
const chalk = require('chalk');
// const play = require('play');

const memorysnake = require('./memorysnake_old4');
const moves = require('./moves');
const intros = require('./intros');

module.exports = {
  controller: () => {
    while (true) {
      console.clear();
      console.log(chalk.bgKeyword('orange')('Level ' + memorysnake.difficultyLevel + '/' + memorysnake.tableSize + '\n'));
      console.log(chalk.bgRgb(213, 255, 175)(table.table(memorysnake.cloneTable)));
      let direction = readline.question('?');
      let integer = parseInt(direction);
      if (direction === '[A') {
        moves.moveUp();
      } else if (direction === '[B') {
        moves.moveDown();
      } else if (direction === '[C') {
        moves.moveRight();
      } else if (direction === '[D') {
        moves.moveLeft();
      } else if (integer > 0 && integer < 10) {
        if (integer === memorysnake.startingTable[memorysnake.y][memorysnake.x] && integer === memorysnake.numberCounter + 1) {
          memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
          memorysnake.numberCounter++;
          // play.sound('./woho.mp3');
        } else {
          console.log(chalk.red('Bad order! Restart the Level ' + memorysnake.difficultyLevel + '...'));
          intros.intro2();
        }
        if (integer === (memorysnake.difficultyLevel + 2)) {
          console.clear();
          console.log(chalk.bgRgb(213, 255, 175)(table.table(memorysnake.cloneTable)));
          break;
        }
      } else {
        console.log(chalk.red('Bad key!'));
      }
    }
  }
};
