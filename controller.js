const table = require('table');
const readline = require('readline-sync');
const chalk = require('chalk');

const moves = require('./moves');
const memorysnake = require('./memorysnake');

module.export = {
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
        if (integer === memorysnake.startingTable[memorysnake.y][memorysnake.x] && integer === numberCounter + 1) {
          memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
          numberCounter++;
          soundGuessedPlayer.play();
        } else {
          soundGlassPlayer.play();
          console.log('Bad order! The table looked like this:');
          console.log(chalk.bgRgb(213, 255, 175)(table.table(memorysnake.startingTable)));
          console.log(chalk.red('Restart the Level ' + memorysnake.difficultyLevel + '...'));
          intro2();
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
