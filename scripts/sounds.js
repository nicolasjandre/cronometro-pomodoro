export default function(unmuteButton, muteButton) {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
    
    function playAndPauseAudio() {
        buttonPressAudio.play()
    }

    function timerEnd() {
        kitchenTimer.play()
    }

    function bgAudioStart() {
        bgAudio.loop=true
        bgAudio.play()
    }

    function bgAudioPause() {
        bgAudio.pause()
        bgAudio.currentTime = 0;
    }

    function unmute() {
        bgAudioStart()
        unmuteButton.classList.toggle('hide')
        muteButton.classList.toggle('hide')
    }
    
    function mute() {
        bgAudioPause()
        unmuteButton.classList.toggle('hide')
        muteButton.classList.toggle('hide')
    }
    
    return {
        playAndPauseAudio,
        timerEnd,
        bgAudioStart,
        bgAudioPause,
        unmute,
        mute
    }
}