const table = require('table');
const readline = require('readline-sync');
const chalk = require('chalk');
const CFonts = require('cfonts');
const creators = require('./creators');

module.exports = {
  intro: (memorysnake) => {
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
      console.log(chalk.bgRgb('213', '255', '175').inverse(' •••••••••••• Rules of the Game ••••••••••••\n'));
      console.log(chalk.bgRgb('213', '255', '175')(' -> Try to memorise the position of the numbers on the table.\n'));
      console.log(chalk.bgRgb('213', '255', '175')(' -> Start game and try to guess the numbers in the correct order.\n'));
      console.log(chalk.bgRgb('213', '255', '175')(' -> Use keyboard arrows (+ Enter) to navigate.\n'));
      console.log(chalk.bgRgb('213', '255', '175')(' -> Complete all 7 levels to win the game.\n'));
    } else {
      console.log(chalk.red('Cool! Proceed to the next level!\n'));
    }
    while (true) {
      let question1 = readline.question('Are you ready? [y/n]: ');
      if (question1 === 'y') {
        console.clear();
        console.log(chalk.bgKeyword('orange')('Level ' + memorysnake.difficultyLevel + '/' + memorysnake.tableSize + '\n'));
        console.log(chalk.bgRgb(213, 255, 175)(table.table(memorysnake.startingTable)));
        let question2 = readline.question('Ready to proceed? [y/n]: ');
        if (question2 === 'y') {
          break;
        } else if (question2 === 'n') {
          console.log('Ok. Bye!');
          process.exit(1);
        } else {
          console.log('Sorry, I do not understand. Please type "y" or "n"!');
        }
      } else if (question1 === 'n') {
        console.log('Ok. Bye!');
        process.exit(1);
      } else {
        console.log('Sorry, I do not understand. Please type "y" or "n"!');
      }
    }
  },

  intro2: (memorysnake) => {
    while (true) {
      let question1 = readline.question('Are you ready? [y/n]: ');
      if (question1 === 'y') {
        creators.nullifyer(memorysnake);
        creators.tableGenerator(memorysnake);
        creators.startingPointSetter(memorysnake.startingElements.cursor, memorysnake);
        creators.numberPusher(memorysnake);
        console.clear();
        console.log(chalk.bgKeyword('orange')('Level ' + memorysnake.difficultyLevel + '/' + memorysnake.tableSize + '\n'));
        console.log(chalk.bgRgb(213, 255, 175)(table.table(memorysnake.startingTable)));
        let question2 = readline.question('Ready to proceed?: ');
        if (question2 === 'y') {
          break;
        } else if (question2 === 'n') {
          console.log('Ok. Bye!');
          process.exit(1);
        } else {
          console.log(chalk.red('Sorry, I do not understand. Please type "y" or ""n"!'));
        }
      } else if (question1 === 'n') {
        console.log('Ok. Bye!');
        process.exit(1);
      } else {
        console.log(chalk.red('Sorry, I do not understand. Please type "y" or "n"!'));
      }
    }
  }
};
