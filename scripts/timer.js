export function Timer({
    minutesDisplay,
    secondsDisplay,
    buttonsConfig,
    sound
}) {
    let timerChoose
    let actualSeconds = 0
    let actualMinutes = 25
    let countdownInterval
    function time() {
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
            minutesDisplay.innerText = timerChoose
            secondsDisplay.innerText = '00'
            actualSeconds = 0
            actualMinutes = timerChoose
        } else {
            minutesDisplay.innerText = '0' + timerChoose
            secondsDisplay.innerText = '00'
            actualSeconds = 0
            actualMinutes = timerChoose
        }
    }

    function startCountdown() {

        if (actualSeconds == 0 && actualMinutes == 0) {
            alert('Você precisa escolher o minuto inicial.')
            return
        }

        buttonsConfig.playAndPause()

        countdownInterval = setInterval(countdown, 1000)
        function countdown() {
            if (actualSeconds <= 10 && actualSeconds >= 1) {
                actualSeconds--
                secondsDisplay.innerText = '0' + actualSeconds
            } else if (actualSeconds >= 11) {
                actualSeconds--
                secondsDisplay.innerText = actualSeconds
            } else if (actualSeconds == 0 && actualMinutes == 0) {
                pauseCountdown()
            } else if (actualSeconds == 0 && actualMinutes >= 10) {
                actualSeconds = 59
                actualMinutes = actualMinutes - 1
                minutesDisplay.innerText = actualMinutes
                secondsDisplay.innerText = actualSeconds
            } else if (actualSeconds == 0 && actualMinutes <= 9) {
                actualSeconds = 59
                actualMinutes = actualMinutes - 1
                minutesDisplay.innerText = '0' +  actualMinutes
                secondsDisplay.innerText = actualSeconds
            }
        }
    }

    function pauseCountdown() {
        buttonsConfig.playAndPause()
        clearInterval(countdownInterval)
    }

    function stopCountdown() {
        buttonsConfig.playAndPause()
        sound.timerEnd()
        clearInterval(countdownInterval)
        actualMinutes = 0
        actualSeconds = 0
        minutesDisplay.innerText = '00'
        secondsDisplay.innerText = '00'
    }

    return {
        time,
        startCountdown,
        pauseCountdown,
        stopCountdown
    }
}