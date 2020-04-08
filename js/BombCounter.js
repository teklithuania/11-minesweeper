class BombCounter {
    constructor( parentHeader, bombCount ){
        this.parentHeader = parentHeader;
        this.bombCount = bombCount;
        this.DOM = null;

        this.render();
    }

    render() {
        const HTML = `<div class="counter bombs">${this.convert(this.bombCount)}</div>`;
        this.parentHeader.insertAdjacentHTML('beforeend', HTML);
        this.DOM = this.parentHeader.querySelector('.counter.bomb');
    }

    update (value) {
        if (value === -1 && value === 1) {
            this.bombCount += value;
            this.DOM.innerText = this.convert(this.bombCount);
        }
    }
    convert( number ) {
        let newNumber = number;
        if (number < 100) {
            newNumber = '0'+newNumber;
        }
        if (number < 10) {
            newNumber = '0'+newNumber;
        }
        return newNumber;
    }
}
export default BombCounter;