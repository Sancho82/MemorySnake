// const play = require('play');

const memorysnake = require('./memorysnake_old4');

module.exports = {
  moveUp: () => {
    if (memorysnake.y !== 0) {
      if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.cursor) && (memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        // play.sound('./step.mp3');
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        // play.sound('./step.mp3');
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] === memorysnake.startingTable[memorysnake.y - 1][memorysnake.x])) {
        memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        // play.sound('./step.mp3');
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] === memorysnake.startingTable[memorysnake.y - 1][memorysnake.x])) {
        memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        // play.sound('./step.mp3');
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        // play.sound('./step.mp3');
      }
      memorysnake.y--;
    }
  },

  moveDown: () => {
    if (memorysnake.y !== memorysnake.tableSize - 1) {
      if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.cursor) && (memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        // play.sound('./step.mp3');
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        // play.sound('./step.mp3');
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] === memorysnake.startingTable[memorysnake.y + 1][memorysnake.x])) {
        memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        // play.sound('./step.mp3');
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] === memorysnake.startingTable[memorysnake.y + 1][memorysnake.x])) {
        memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        // play.sound('./step.mp3');
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        // play.sound('./step.mp3');
      }
      memorysnake.y++;
    }
  },

  moveRight: () => {
    if (memorysnake.x !== memorysnake.tableSize - 1) {
      if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.cursor) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        // play.sound('./step.mp3');
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        // play.sound('./step.mp3');
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] === memorysnake.startingTable[memorysnake.y][memorysnake.x + 1])) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        // play.sound('./step.mp3');
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] === memorysnake.startingTable[memorysnake.y][memorysnake.x + 1])) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        // play.sound('./step.mp3');
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        // play.sound('./step.mp3');
      }
      memorysnake.x++;
    }
  },

  moveLeft: () => {
    if (memorysnake.x !== 0) {
      if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.cursor) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        // play.sound('./step.mp3');
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        // play.sound('./step.mp3');
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] === memorysnake.startingElements.brush)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        // play.sound('./step.mp3');
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] === memorysnake.startingTable[memorysnake.y][memorysnake.x - 1])) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        // play.sound('./step.mp3');
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        // play.sound('./step.mp3');
      }
      memorysnake.x--;
    }
  }
};
