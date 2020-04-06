class Timer {
    constructor( parentheader, parent ){
        this.PARENT = parent;
        this.parentheader = parentheader;
        this.DOM = null;

        this.render();
    }

    render () {
        const HTML = `<div class="counter timer">000</div>`;
        this.parentheader.insertAdjacentHTML('beforeend', HTML);
    }
}
export default Timer;