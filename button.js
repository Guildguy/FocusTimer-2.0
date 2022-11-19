export function Buttons({
    btnPlay,
    btnPause,
    btnCoffee,
    btnFire,
    btnForest,
    btnRain
}) {
    function Play() {
        btnPlay.classList.toggle('hide')
        btnPause.classList.toggle('hide')
    }

    function Pause() {
        btnPause.classList.toggle('hide')
        btnPlay.classList.toggle('hide')
    }

    function Reset() {
        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')
    }

    function CoffeeColorChange() {
        btnCoffee.classList.toggle('sColor')
    }

    function FireColorChange() {
        btnFire.classList.toggle('sColor')
    }

    function ForestColorChange() {
        btnForest.classList.toggle('sColor')
    }

    function RainColorChange() {
        btnRain.classList.toggle('sColor')
    }

    return {
        Play,
        Pause,
        Reset,
        CoffeeColorChange,
        FireColorChange,
        ForestColorChange,
        RainColorChange
    }
}
