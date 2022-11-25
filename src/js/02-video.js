import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const player = new Player('vimeo-player');

const throttledTimeUpdate = throttle(timeUpdate, 1000);

function timeUpdate({ seconds }) {
  //   console.log(seconds);
  localStorage.setItem(STORAGE_KEY, seconds);
}

const savedCurrentTime = localStorage.getItem(STORAGE_KEY);

player
  .setCurrentTime(savedCurrentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on('timeupdate', throttledTimeUpdate);
