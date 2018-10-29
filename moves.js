const music = require('./music');

module.exports = {
  moveUp: (memorysnake) => {
    if (memorysnake.y !== 0) {
      if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.cursor) && (memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        music.soundStepPlayer.play();
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        music.soundStepPlayer.play();
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] === memorysnake.startingTable[memorysnake.y - 1][memorysnake.x])) {
        memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        music.soundStepPlayer.play();
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] === memorysnake.startingTable[memorysnake.y - 1][memorysnake.x])) {
        memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        music.soundStepPlayer.play();
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y - 1][memorysnake.x] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        music.soundStepPlayer.play();
      }
      memorysnake.y--;
    }
  },

  moveDown: (memorysnake) => {
    if (memorysnake.y !== memorysnake.tableSize - 1) {
      if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.cursor) && (memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        music.soundStepPlayer.play();
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        music.soundStepPlayer.play();
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] === memorysnake.startingTable[memorysnake.y + 1][memorysnake.x])) {
        memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        music.soundStepPlayer.play();
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] === memorysnake.startingTable[memorysnake.y + 1][memorysnake.x])) {
        memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        music.soundStepPlayer.play();
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y + 1][memorysnake.x] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        music.soundStepPlayer.play();
      }
      memorysnake.y++;
    }
  },

  moveRight: (memorysnake) => {
    if (memorysnake.x !== memorysnake.tableSize - 1) {
      if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.cursor) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        music.soundStepPlayer.play();
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        music.soundStepPlayer.play();
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] === memorysnake.startingTable[memorysnake.y][memorysnake.x + 1])) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        music.soundStepPlayer.play();
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] === memorysnake.startingTable[memorysnake.y][memorysnake.x + 1])) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        music.soundStepPlayer.play();
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x + 1] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        music.soundStepPlayer.play();
      }
      memorysnake.x++;
    }
  },

  moveLeft: (memorysnake) => {
    if (memorysnake.x !== 0) {
      if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.cursor) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        music.soundStepPlayer.play();
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        music.soundStepPlayer.play();
      } else if ((memorysnake.cloneTable[memorysnake.y][memorysnake.x] === memorysnake.startingElements.star) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] === memorysnake.startingElements.brush)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingElements.empty;
        music.soundStepPlayer.play();
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] === memorysnake.startingTable[memorysnake.y][memorysnake.x - 1])) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] = memorysnake.startingElements.cursor;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        music.soundStepPlayer.play();
      } else if (memorysnake.cloneTable[memorysnake.y][memorysnake.x] !== Object.values(memorysnake.startingElements) && (memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] === memorysnake.startingElements.empty)) {
        memorysnake.cloneTable[memorysnake.y][memorysnake.x - 1] = memorysnake.startingElements.star;
        memorysnake.cloneTable[memorysnake.y][memorysnake.x] = memorysnake.startingTable[memorysnake.y][memorysnake.x];
        music.soundStepPlayer.play();
      }
      memorysnake.x--;
    }
  }
};
