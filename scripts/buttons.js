export function Buttons({
    playButton,
    pauseButton,
    stopButton,
    timerButton,
    sound
}) {
    function playAndPause() {
        playButton.classList.toggle('hide')
        pauseButton.classList.toggle('hide')
        stopButton.classList.toggle('hide')
        timerButton.classList.toggle('hide')
        sound.playAndPauseAudio()
    }

    return {
        playAndPause
    }
}