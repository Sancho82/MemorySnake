const table = require('table');
const readline = require('readline-sync');
const chalk = require('chalk');

const moves = require('./moves');
const music = require('./music');
const intros = require('./intros');

module.exports = {
  controller: (memorysnake) => {
    while (true) {
      console.clear();
      console.log(chalk.bgKeyword('orange')('Level ' + memorysnake.difficultyLevel + '/' + memorysnake.tableSize + '\n'));
      console.log(chalk.bgRgb(213, 255, 175)(table.table(memorysnake.cloneTable)));
      let direction = readline.keyIn();
      let integer = parseInt(direction);
      if (direction === 'w') {
        moves.moveUp(memorysnake);
      } else if (direction === 's') {
        moves.moveDown(memorysnake);
      } else if (direction === 'd') {
        moves.moveRight(memorysnake);
      } else if (direction === 'a') {
        moves.moveLeft(memorysnake);
      } else if (integer > 0 && integer < 10) {
        if (integer === memorysnake.startingTable[memorysnake.y][memorysnake.x] && integer === memorysnake.numberCounter + 1) {
          memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
          memorysnake.numberCounter++;
          music.soundGuessedPlayer.play();
        } else {
          music.soundGlassPlayer.play();
          console.log('Bad order! The table looked like this:');
          console.log(chalk.bgRgb(213, 255, 175)(table.table(memorysnake.startingTable)));
          console.log(chalk.red('Restart the Level ' + memorysnake.difficultyLevel + '...'));
          intros.intro2(memorysnake);
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
