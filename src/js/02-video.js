import {throttle} from "lodash";
import Player from "@vimeo/player";

const KEY_SAVE_CURRENT_TIME = 'videoplayer-current-time'; 

const iframe = document.querySelector('iframe');

const player = new Player(iframe);


player.on('timeupdate', throttle(videoTimeUpDate, 1000));

function videoTimeUpDate(data) {
    localStorage.setItem(KEY_SAVE_CURRENT_TIME, data.seconds);
}

const savedCurrentTime = localStorage.getItem(KEY_SAVE_CURRENT_TIME);

if (savedCurrentTime) {
    player.setCurrentTime(savedCurrentTime);
}
