import { LightningElement, track } from 'lwc';
import Player from 'models/player';
import TTT from 'models/ttt';
import { allUsed, checkGameOver } from './gameUtils';

const X = 'X';
const O = 'O';
const CAT = 'CAT';

export default class Game extends LightningElement {
    activePlayer;
    player1;
    player2;
    gameOver = false;

    @track
    squares = [];

    constructor() {
        super();
        this.player1 = new Player(X);
        this.player2 = new Player(O);
        this.squares = new TTT().value;
        this.activePlayer = this.player1;
    }

    updateBoard({ detail: { position, value } }) {
        const target = this.squares[position - 1];
        if (target.value === null) {
            target.value = this.activePlayer.value;
            this.gameOver = checkGameOver(this.squares, position - 1);
            if (allUsed(this.squares) && !this.gameOver) {
                this.activePlayer = { value: CAT };
                this.gameOver = true;
            }
            if (!this.gameOver) {
                this.switchPlayers();
            }
        }
    }

    switchPlayers() {
        if (this.activePlayer.value === X) {
            this.activePlayer = this.player2;
        } else {
            this.activePlayer = this.player1;
        }
    }

    resetGame() {
        this.squares = new TTT().value;
        this.activePlayer = this.player1;
        this.gameOver = false;
    }

    squareclickhandler(e) {
        if (!this.gameOver) {
            this.updateBoard(e);
        }
    }
}
