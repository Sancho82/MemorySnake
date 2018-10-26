const readline = require('readline');

// Allows us to listen for events from stdin
readline.emitKeypressEvents(process.stdin);

// Raw mode gets rid of standard keypress events and other
// functionality Node.js adds by default
process.stdin.setRawMode(true);

// Start the keypress listener for the process
process.stdin.on('keypress', (str, key) => {

// "Raw" mode so we must do our own kill switch
if(key.sequence === 'u') {
  process.exit();
}
