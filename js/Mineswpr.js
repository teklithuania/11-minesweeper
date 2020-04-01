class Minesweeeper {
    constructor(target, width, height, bombsPercentage) {
        this.target = target;
        this.DOM = null;
        this.width = width;
        this.height = height;
        this.bombsPercentage = bombsPercentage;
        this.bombsPercentageCount = 1;
        
        this.init();
    }

    init(){
        this.validate();
        this.render();
    }
    validate() {
        // check if valid target selector
        const DOM = document.querySelector(this.target);
        if ( !DOM ) {
            throw 'Kritine klaida, reikia nurodyti tinkama selectoriu kur generuoti zaidima!';
        }
        this.DOM = DOM;

        // check for correct size
        if ( typeof(this.width) !== 'number' || this.width < 1 ||
        this.width % 1 > 0 ) {
            throw 'Netinkamas plotis!';
        }
        if ( typeof(this.height) !== 'number' || this.height < 1 ||
        this.height % 1 > 0 ) {
            throw 'Netinkamas aukstis!';
        }
        if ( this.width * this.height < 2 ) {
            throw 'Bendras lentos plotis yra per mazas.';
        }
        if ( typeof(this.bombsPercentage) !== 'number' || this.bombsPercentage <= 0 || this.bombsPercentage >= 100 ) {
            throw 'Netinkamas bombu kiekis!';
        }

        // calculate bombs count
        const bombsCount = Math.floor(this.width * this.height * this.bombsPercentage / 100);
        if ( bombsCount > 0 ) {
            this.bombsCount = bombsCount;
        }
    }
    render() {
        let HTML = `<div class="header">
                        <div class="bombs">099</div>
                        <div class="smile">:)</div>
                        <div class="timer">000</div>
                    </div>
                    <div class="field">
                        <div class="cell">c</div>
                        <div class="cell">c</div>
                        <div class="cell">c</div>
                        <div class="cell">c</div>
                        <div class="cell">c</div>
                        <div class="cell">c</div>
                    </div>`;
        this.DOM.classList.add('minesweeper')
        this.DOM.innerHTML = HTML;
    }
}


const game = new Minesweeeper('#game', 10, 10, 47);

console.log(game);
