import { LightningElement, api } from 'lwc';

export default class Board extends LightningElement {
    @api
    squares;

    handleClick(e) {
        e.stopPropagation();
        const { position, value } = e.target;
        const clickEvent = new CustomEvent('squareclick', {
            cancelable: false,
            composed: true,
            bubbles: true,
            detail: {
                position,
                value
            }
        });
        this.dispatchEvent(clickEvent);
    }
}
