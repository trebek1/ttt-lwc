import { LightningElement, track } from 'lwc';
import Player from 'models/player';

export default class Game extends LightningElement {
    activePlayer1 = true;
    @track
    squares = [];
    player1;
    player2;
    squareclickhandler(e) {
        console.log('clicked!', e);
    }
    constructor() {
        super();
        this.player1 = new Player('X');
        this.player2 = new Player('O');
        this.squares = [
            { value: null, position: 1 },
            { value: null, position: 2 },
            { value: null, position: 3 },
            { value: null, position: 4 },
            { value: null, position: 5 },
            { value: null, position: 6 },
            { value: null, position: 7 },
            { value: null, position: 8 },
            { value: null, position: 9 }
        ];
    }
}
