import { Buttons } from "./button.js"
import { Events } from "./events.js"
import { Sounds } from "./sounds.js"
import { Time } from "./time.js"
import {
    btnPlay,
    btnPause,
    minutesDisplay,
    secondsDisplay,
    btnForest,
    btnRain,
    btnCoffee,
    btnFire
} from "./elements.js"
 
let buttons = Buttons({
        btnPlay, 
        btnPause, 
        btnCoffee, 
        btnFire, 
        btnForest, 
        btnRain
})

let sounds = Sounds()

let time = Time({
    minutesDisplay, 
    secondsDisplay,
    buttons
})

Events({
    time,
    buttons,
    sounds
})
  

