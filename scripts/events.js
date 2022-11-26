import {     
    timerButton,
    playButton,
    pauseButton,
    stopButton,
    unmuteButton,
    muteButton } from "./elements.js"

export function Events(timer, sound) {
    timerButton.addEventListener('click', timer.time)
    playButton.addEventListener('click', timer.startCountdown)
    pauseButton.addEventListener('click', timer.pauseCountdown)
    stopButton.addEventListener('click', timer.stopCountdown)
    muteButton.addEventListener('click', sound.unmute)
    unmuteButton.addEventListener('click', sound.mute)
}