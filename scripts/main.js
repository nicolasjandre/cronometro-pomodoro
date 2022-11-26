import Sound from "./sounds.js"
import { Buttons } from "./buttons.js"
import { Timer } from "./timer.js"
import { Events } from "./events.js"
import {     
    timerButton,
    playButton,
    pauseButton,
    stopButton,
    minutesDisplay,
    secondsDisplay,
    unmuteButton,
    muteButton } from "./elements.js"

const sound = Sound(unmuteButton, muteButton)

const buttonsConfig = Buttons({
    playButton,
    pauseButton,
    stopButton,
    timerButton,
    sound
})

const timer = Timer({  
    minutesDisplay,
    secondsDisplay,
    buttonsConfig,
    sound
})


Events(timer, sound)