const keypress = require('keypress');
const getTimestamp = () => Math.round(new Date().getTime() / 1000);
let lastKeyPress = getTimestamp();

keypress(process.stdin);

process.stdin.on('keypress', function (ch, key) {
  let currentKeyPress = getTimestamp();
  if (lastKeyPress + 1 > currentKeyPress) return;
  lastKeyPress = currentKeyPress;
  console.log(key.name);
});

process.stdin.setRawMode(true);
process.stdin.resume();
