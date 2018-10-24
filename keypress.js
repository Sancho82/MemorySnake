const keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();

process.stdin.resume();
got "keypress" { name: 'up',
  ctrl: false,
  meta: false,
  shift: false,
  sequence: '\u001b[A',
  code: '[A' }
got "keypress" { name: 'down',
  ctrl: false,
  meta: false,
  shift: false,
  sequence: '\u001b[B',
  code: '[B' }
got "keypress" { name: 'right',
  ctrl: false,
  meta: false,
  shift: false,
  sequence: '\u001b[C',
  code: '[C' }
got "keypress" { name: 'left',
  ctrl: false,
  meta: false,
  shift: false,
  sequence: '\u001b[D',
  code: '[D' }








var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function(key){
    if (key == '\u001B\u005B\u0041') {
        process.stdout.write('up'); 
    }
    if (key == '\u001B\u005B\u0043') {
        process.stdout.write('right'); 
    }
    if (key == '\u001B\u005B\u0042') {
        process.stdout.write('down'); 
    }
    if (key == '\u001B\u005B\u0044') {
        process.stdout.write('left'); 
    }

    if (key == '\u0003') { process.exit(); }    // ctrl-c
});