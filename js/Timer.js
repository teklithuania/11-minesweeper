class Timer {
    constructor( parentheader, parent ){
        this.PARENT = parent;
        this.parentheader = parentheader;
        this.DOM = null;

        this.render();
    }

    render () {
        const HTML = `<div class="counter timer" id="countdown">000</div>`;
        this.parentheader.insertAdjacentHTML('beforeend', HTML);
    }
}
export default Timer;

let seconds = document.getElementById("countdown");
let countdown = setInterval(function() {
    seconds++;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);