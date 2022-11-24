import {
    btnPlay,
    btnPause,
    btnStop,
    btnMore,
    btnLess,
    btnForest,
    btnRain,
    btnCoffee,
    btnFire,
    minutesDisplay
} from "./elements.js"

export function Events({
    time,
    buttons,
    sounds
}) {
    btnPlay.addEventListener('click', ()=>{
        time.TimeRun()
        buttons.Play()
        sounds.Click()
    })
    
    btnPause.addEventListener('click', ()=>{
        time.Pause()
        buttons.Pause()
        sounds.Click()
    })
    
    btnStop.addEventListener('click', ()=>{
        time.Reset()
        buttons.Reset()
        sounds.Click()
    })
    
    btnMore.addEventListener('click', ()=>{
        time.TimeUp()
        sounds.Click()
    })
    
    btnLess.addEventListener('click', ()=>{
        time.TimeDown()
        sounds.Click()
    })
    
    btnForest.addEventListener('click', ()=>{
        buttons.ForestColorChange()
        sounds.Click()
        sounds.btnForest.play()
    })
    
    btnRain.addEventListener('click', ()=>{
        buttons.RainColorChange()
        sounds.Click()
        sounds.btnRain.play()
    })
    
    btnCoffee.addEventListener('click', ()=>{
        buttons.CoffeeColorChange()
        sounds.Click()
        sounds.btnCoffee.play()
    })
    
    btnFire.addEventListener('click', ()=>{
        buttons.FireColorChange()
        sounds.Click()
        sounds.btnFire.play()
    })

    minutesDisplay.addEventListener('click', ()=>{
        time.Select()
    })
    
    return {
        btnPlay,
        btnPause,
        btnStop,
        btnMore,
        btnLess,
        btnForest,
        btnRain,
        btnCoffee,
        btnFire
    }
}
