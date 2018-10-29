const Soundplayer = require('sound-player');

const soundTrack = {
  filename: './sound/popcorn.mp3',
  gain: 8,
  debug: false,
  player: 'mpg123'
};

const soundStep = {
  filename: './sound/step.mp3',
  gain: 8,
  debug: false,
  player: 'mpg123'
};

const soundGuessed = {
  filename: './sound/woho.mp3',
  gain: 8,
  debug: false,
  player: 'mpg123'
};

const soundGlass = {
  filename: './sound/glass.mp3',
  gain: 8,
  debug: false,
  player: 'mpg123'
};

const soundCongrat = {
  filename: './sound/congrat.mp3',
  gain: 8,
  debug: false,
  player: 'mpg123'
};

const soundTrackPlayer = new Soundplayer(soundTrack);
const soundStepPlayer = new Soundplayer(soundStep);
const soundGuessedPlayer = new Soundplayer(soundGuessed);
const soundGlassPlayer = new Soundplayer(soundGlass);
const soundCongratPlayer = new Soundplayer(soundCongrat);

module.exports = {
  soundTrackPlayer,
  soundStepPlayer,
  soundGuessedPlayer,
  soundGlassPlayer,
  soundCongratPlayer
};
