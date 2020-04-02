class Cell {
    constructor(index, parentDOM) {
        this.index = index;
        this.parentDOM = parentDOM;
        this.DOM = null;

        this.init();
    }

    init(){
        const HTML = `<div class="cell" data-index="${this.index}">${this.index}</div>`;
        // this.parentDOM.innerHTML += HTML;

        this.parentDOM.insertAdjacentHTML('beforeend', HTML);
        
        this.DOM = this.parentDOM.querySelector(`.cell[data-index="${this.index}"]`);

        this.DOM.addEventListener('click', (event) => this.click(event));
        
    }

    click(){
        console.log('Paspausta cele: '+this.index);
    }
}

export default Cell;