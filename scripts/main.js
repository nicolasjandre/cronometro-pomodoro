import Sound from "./sounds.js"

let timerChoose
let actualSeconds = 0
let actualMinutes = 25
let countdownInterval
const sound = Sound()
const timerButton = document.getElementById('timer-button')
const playButton = document.getElementById('play-button')
const pauseButton = document.getElementById('pause-button')
const stopButton = document.getElementById('stop-button')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const unmuteButton = document.getElementById('unmute-button')

timerButton.addEventListener('click', timerTime)
playButton.addEventListener('click', startCountdown)
pauseButton.addEventListener('click', pauseCountdown)
stopButton.addEventListener('click', stopCountdown)
unmuteButton.addEventListener('click', sound.bgAudioStart)


function timerTime() {
    timerChoose = Number(prompt('Escolha o o tempo do temporizador (em minutos)'))

    if (isNaN(timerChoose - 1)) {
        alert('O valor digitado não é um número.')
    } else if (Number.isInteger(timerChoose) === false) {
        alert('O número precisa ser inteiro.')
    } else if (timerChoose == "") {
        alert('O campo não pode estar vazio e o número precisa ser maior que 0.')
    } else if (timerChoose < 0) {
        alert('O número escolhido precisa ser positivo.')
    } else if (timerChoose >= 10){
        minutes.innerText = timerChoose
        seconds.innerText = '00'
        actualSeconds = 0
        actualMinutes = timerChoose
        console.log(actualMinutes, actualSeconds)
    } else {
        minutes.innerText = '0' + timerChoose
        seconds.innerText = '00'
        actualSeconds = 0
        actualMinutes = timerChoose
        console.log(actualMinutes, actualSeconds)
    }
}

function startCountdown() {

    if (actualSeconds == 0 && actualMinutes == 0) {
        alert('Você precisa escolher o minuto inicial.')
        return
    }

    playToPauseButton()

    countdownInterval = setInterval(countdown, 1000)
    function countdown() {
        if (actualSeconds <= 10 && actualSeconds >= 1) {
            actualSeconds--
            seconds.innerText = '0' + actualSeconds
        } else if (actualSeconds >= 11) {
            actualSeconds--
            seconds.innerText = actualSeconds
        } else if (actualSeconds == 0 && actualMinutes == 0) {
            pauseCountdown()
        } else if (actualSeconds == 0 && actualMinutes >= 10) {
            actualSeconds = 59
            actualMinutes = actualMinutes - 1
            minutes.innerText = actualMinutes
            seconds.innerText = actualSeconds
            console.log('ola')
        } else if (actualSeconds == 0 && actualMinutes <= 9) {
            actualSeconds = 59
            actualMinutes = actualMinutes - 1
            minutes.innerText = '0' +  actualMinutes
            seconds.innerText = actualSeconds
            console.log('ola')
        }
    }
}

function playToPauseButton() {
    playButton.classList.toggle('hide')
    pauseButton.classList.toggle('hide')
    stopButton.classList.toggle('hide')
    timerButton.classList.toggle('hide')
    sound.playAndPauseAudio()
}

function pauseCountdown() {
    playToPauseButton()
    clearInterval(countdownInterval)
}

function stopCountdown() {
    playToPauseButton()
    sound.timerEnd()
    clearInterval(countdownInterval)
    actualMinutes = 0
    actualSeconds = 0
    minutes.innerText = '00'
    seconds.innerText = '00'
}