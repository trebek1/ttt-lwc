import { LightningElement } from 'lwc';
import Player from 'models/player';

export default class Game extends LightningElement {
    player1;
    player2;
    activePlayer1 = true;
    constructor() {
        super();
        this.player1 = new Player('X');
        this.player2 = new Player('O');
    }
}
