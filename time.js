import { Sounds } from "./sounds.js"

let sounds = Sounds()

export function Time({
    minutesDisplay,
    secondsDisplay,
    buttons
}) {
    let timeFreeze

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
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        
        TimeDisplaySet((minutes + 5), seconds)
    }
    
    function TimeDown() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        
        let minimumTime = (minutes > 0) || (minutes == 5 && seconds > 0);
        
        if(minimumTime) {
            TimeDisplaySet((minutes - 5), seconds);
        }
        if (minutes <= 0 && seconds <= 0) {
            return
        }
    }

    function Select() {
        let minutes = prompt("Selecione o tempo")

        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        if(!Number(minutes)) {
            Reset()
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
