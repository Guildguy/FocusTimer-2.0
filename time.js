import { Sounds } from "./sounds.js"

let sounds = Sounds()

export function Time({
    minutesDisplay,
    secondsDisplay,
    buttons
}) {
    let timeFreeze
    let minutes = minutesDisplay.textContent
    let seconds = secondsDisplay.textContent

    function TimeDisplaySet(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, '0') 
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }
    
    function Pause() {
        clearTimeout(timeFreeze)
    }

    function Reset() {
        TimeDisplaySet('10', '0')
        clearTimeout(timeFreeze)
    }
    
    function TimeRun() {
        timeFreeze = setTimeout(()=>{
            let seconds = secondsDisplay.textContent
            let minutes = minutesDisplay.textContent
    
            if(minutes <=0 && seconds <= 0) {
                sounds.timeOver()
                Reset()
                buttons.Reset()
                return
            }
    
            if(seconds <= 0) {
                seconds = 60
        
                --minutes
            }
    
    
            TimeDisplaySet(minutes, String(seconds -1))
    
            TimeRun()
        }, 1000)
    }
    
    function TimeUp() {
        TimeDisplaySet(String(++(minutes)), seconds)
        TimeDisplaySet(String(++(minutes)), seconds)
        TimeDisplaySet(String(++(minutes)), seconds)
        TimeDisplaySet(String(++(minutes)), seconds)
        TimeDisplaySet(String(++(minutes)), seconds)
    }
    
    function TimeDown() {
        if(minutes <= 0 && seconds <=0) {
            return
        }
        TimeDisplaySet(String(--minutes), seconds)
        TimeDisplaySet(String(--minutes), seconds)
        TimeDisplaySet(String(--minutes), seconds)
        TimeDisplaySet(String(--minutes), seconds)
        TimeDisplaySet(String(--minutes), seconds)
    }

    function Select() {
        let minutes = prompt("Selecione o tempo")
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        if(!minutes) {
            Reset
        }
    }

    return {
        Pause,
        Reset,
        TimeUp,
        TimeDown,
        TimeRun,
        Select
    }
}
