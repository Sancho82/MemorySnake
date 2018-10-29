const memorysnake = require('./memorysnake_old4');

module.exports = {
  tableGenerator: () => {
    for (let i = 0; i < memorysnake.tableSize; i++) {
      memorysnake.startingTable.push([]);
      memorysnake.cloneTable.push([]);
      for (let j = 0; j < memorysnake.tableSize; j++) {
        memorysnake.startingTable[i].push(memorysnake.startingElements.brush);
        memorysnake.cloneTable[i].push(memorysnake.startingElements.brush);
      }
    }
  },

  placeChecker: (a, b) => {
    if (memorysnake.startingTable[a][b] === memorysnake.startingElements.brush) {
      return true;
    } else {
      return false;
    }
  },

  getRandomInteger: (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  },

  startingPointSetter: (a) => {
    memorysnake.cloneTable[0][0] = a;
  },

  numberPusher: () => {
    // memorysnake.cloneTable[0][0] = memorysnake.startingElements.cursor;
    while (memorysnake.ascendingNumber <= memorysnake.difficultyLevel + 2) {
      let y = module.exports.getRandomInteger(0, memorysnake.tableSize);
      let x = module.exports.getRandomInteger(0, memorysnake.tableSize);
      if ((y !== 0 || x !== 0) && module.exports.placeChecker(y, x)) {
        memorysnake.startingTable[y][x] = memorysnake.ascendingNumber;
        memorysnake.cloneTable[y][x] = memorysnake.startingElements.empty;
        memorysnake.ascendingNumber++;
      }
    }
  },

  nullifyer: () => {
    memorysnake.ascendingNumber = 1;
    memorysnake.numberCounter = 0;
    memorysnake.startingTable = [];
    memorysnake.cloneTable = [];
    memorysnake.x = 0;
    memorysnake.y = 0;
  }
};
