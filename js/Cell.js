class Cell {
    constructor(index, parent) {
        this.index = index;
        this.parent = parent;
        this.parentDOM = this.parent.DOMfield;
        this.DOM = null;
        this.hasBomb = false;

        this.init();
    }

    init(){
        const HTML = `<div class="cell" data-index="${this.index}"></div>`;
        // this.parentDOM.innerHTML += HTML;

        this.parentDOM.insertAdjacentHTML('beforeend', HTML);
        
        this.DOM = this.parentDOM.querySelector(`.cell[data-index="${this.index}"]`);

        this.DOM.addEventListener('click', (event) => this.click(event));
        
    }

    click(event){
        this.parent.checkCell(this.index);
    }

    addBomb() {
        this.hasBomb = true;
    }
}

export default Cell;