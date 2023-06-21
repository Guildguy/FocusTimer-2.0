/*Elementos*/

const btnPlay = document.querySelector('.btnPlay')
const btnPause = document.querySelector('.btnPause')
const btnStop = document.querySelector('.btnStop')
const btnMore = document.querySelector('.btnMore')
const btnLess = document.querySelector('.btnLess')
const btnRain = document.querySelector('.btnRain')
const btnForest = document.querySelector('.btnForest')
const btnCoffee = document.querySelector('.btnCoffee')
const btnFire = document.querySelector('.btnFire')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = minutesDisplay.textContent
let seconds = secondsDisplay.textContent

let timePause

const timeOver = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const btnPress = new Audio ("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const rainSound = new Audio('<iframe width="560" height="315" src="https://www.youtube.com/embed/PPFVedrMElY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
/********************************************************************* */

/*Funções*/

function rainAudio() {
    rainSound.play()
}

function playConfig() {
    btnPlay.classList.toggle('hide')
    btnPause.classList.toggle('hide')
    timeRun()
    btnPressSound()
}

function pauseConfig() {
    btnPause.classList.toggle('hide')
    btnPlay. classList.toggle('hide')
    clearTimeout(timePause)
    btnPressSound()
}

function resetConfig() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
}

function timeDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function timeRun() {
    timePause = setTimeout(()=>{
        let minutes = minutesDisplay.textContent
        let seconds = secondsDisplay.textContent

        if( minutes <= 0 && seconds <= 0) {
            resetTime()
            timeOverSound()
            return
        }

        if(seconds <= 0) {
            seconds = 60
            --minutes
        }

        timeDisplay(minutes, String(seconds)-1)

        timeRun()
    }, 1000)
}

function resetTime() {
    timeDisplay('10', '0')
    clearTimeout(timePause)
    resetConfig()
}

function addFiveMinutes() {
    timeDisplay(String(++minutes), seconds)
    timeDisplay(String(++minutes), seconds)
    timeDisplay(String(++minutes), seconds)
    timeDisplay(String(++minutes), seconds)
    timeDisplay(String(++minutes), seconds)
    btnPressSound()
}

function pullFiveMinutes() {
    if(minutes <= 0 && seconds <= 0) {
        return
    }
    timeDisplay(String(--minutes), seconds)
    timeDisplay(String(--minutes), seconds)
    timeDisplay(String(--minutes), seconds)
    timeDisplay(String(--minutes), seconds)
    timeDisplay(String(--minutes), seconds)
    btnPressSound()
}

function timeOverSound() {
    timeOver.play()
}

function btnPressSound() {
    btnPress.play()
}

/********************************************************************* */

/*Eventos*/

btnPlay.addEventListener('click', ()=>{
    playConfig()
})

btnPause.addEventListener('click', ()=>{
    pauseConfig()
})

btnStop.addEventListener('click', ()=>{
    resetTime()
    btnPressSound()
})

btnMore.addEventListener('click', ()=>{
    addFiveMinutes()
})

btnLess.addEventListener('click', ()=>{
    pullFiveMinutes()
})

btnRain.addEventListener('click', ()=>{ 
    btnRain.classList.toggle('sColor')
    btnPressSound()
    rainAudio()
})

btnForest.addEventListener('click', ()=>{
    btnForest.classList.toggle('sColor')
    btnPressSound()
})

btnCoffee.addEventListener('click', ()=>{
    btnCoffee.classList.toggle('sColor')
    btnPressSound()
})

btnFire.addEventListener('click', ()=>{
    btnFire.classList.toggle('sColor')
    btnPressSound()
})
