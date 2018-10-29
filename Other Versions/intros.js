const table = require('table');
const readline = require('readline-sync');
const chalk = require('chalk');
const CFonts = require('cfonts');

const memorysnake = require('./memorysnake_old4');
const creators = require('./creators');

module.exports = {
  intro: () => {
    if (memorysnake.difficultyLevel === 1) {
      CFonts.say('Welcome to Memorysnake!', {
        font: 'chrome',
        align: 'left',
        colors: ['black', 'red', 'black'],
        background: 'transparent',
        letterSpacing: 0.5,
        lineHeight: 0.5,
        space: true,
        maxLength: '0'
      });
      console.log(chalk.bold.bgRgb('0', '0', '128').inverse(' •••••••••••• Rules of the Game ••••••••••••\n'));
      console.log(chalk.bold.bgRgb('0', '0', '128').inverse(' -> Try to memorise the position of the numbers on the table.\n'));
      console.log(chalk.bold.bgRgb('0', '0', '128').inverse(' -> Start game and try to guess the numbers in the correct order.\n'));
      console.log(chalk.bold.bgRgb('0', '0', '128').inverse(' -> Use keyboard arrows to navigate.\n'));
      console.log(chalk.bold.bgRgb('0', '0', '128').inverse(' -> Complete all 7 levels to win the game.\n'));
    } else {
      console.log(chalk.green.bold('Cool! Proceed to the next level!\n'));
    }
    while (true) {
      let question1 = readline.question(chalk.green.bold('Are you ready? [y/n]: '));
      if (question1 === 'y') {
        console.clear();
        console.log(chalk.bgRgb('0', '0', '128').inverse('Level ' + memorysnake.difficultyLevel + '/' + memorysnake.tableSize + '\n'));
        console.log(chalk.bgRgb('0', '0', '128').inverse(table.table(memorysnake.startingTable)));
        let question2 = readline.question(chalk.green.bold('Ready to proceed? [y/n]: '));
        if (question2 === 'y') {
          break;
        } else if (question2 === 'n') {
          console.log(chalk.red.bold('Ok. Bye!'));
          process.exit(1);
        } else {
          console.log(chalk.red.bold('Sorry, I do not understand. Please type "y" or "n"!'));
        }
      } else if (question1 === 'n') {
        console.log(chalk.red.bold('Ok. Bye!'));
        process.exit(1);
      } else {
        console.log(chalk.red.bold('Sorry, I do not understand. Please type "y" or "n"!'));
      }
    }
  },

  intro2: () => {
    while (true) {
      let question1 = readline.question(chalk.green.bold('Are you ready? [y/n]: '));
      if (question1 === 'y') {
        creators.nullifyer();
        creators.tableGenerator();
        creators.numberPusher();
        console.clear();
        console.log(chalk.bgRgb('0', '0', '128').inverse('Level ' + memorysnake.difficultyLevel + '/' + memorysnake.tableSize + '\n'));
        console.log(chalk.bgRgb('0', '0', '128').inverse(table.table(memorysnake.startingTable)));
        let question2 = readline.question(chalk.green.bold('Ready to proceed?: '));
        if (question2 === 'y') {
          break;
        } else if (question2 === 'n') {
          console.log(chalk.red.bold('Ok. Bye!'));
          process.exit(1);
        } else {
          console.log(chalk.red.bold('Sorry, I do not understand. Please type "y" or ""n"!'));
        }
      } else if (question1 === 'n') {
        console.log(chalk.red.bold('Ok. Bye!'));
        process.exit(1);
      } else {
        console.log(chalk.red.bold('Sorry, I do not understand. Please type "y" or "n"!'));
      }
    }
  }
};
