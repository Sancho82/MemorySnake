const keypress = require('keypress');

keypress(process.stdin);

process.stdin.on('keypress', function (key) {
  if (key === 'u') {
    console.log('Go up');
  } else if (key === 'd') {
    console.log('Go down');
  } else if (key === 'r') {
    console.log('Go right');
  } else if (key === 'l') {
    console.log('Go left');
  } else {
    console.log('Exit');
    process.stdin.pause();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
