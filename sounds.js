export function Sounds() {
    const btnForest = new Audio("https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/view?raw-true")
    const rainSound = new Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view?raw-true")
    const coffeeSound = new Audio("https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view?raw-true")
    const fireSound = new Audio("https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view?raw-true")
    const btnPress = new Audio ("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const timeOverSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    function timeOver() {
        timeOverSound.play()
    }

    function Click() {
        btnPress.play()
    }

    btnForest.loop
        
    rainSound.loop

    coffeeSound.loop

    fireSound.loop

    return {
        timeOver,
        Click,
        btnForest,
        rainSound,
        coffeeSound,
        fireSound
    }
}
