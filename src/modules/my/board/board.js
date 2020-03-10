import { LightningElement, track } from 'lwc';

export default class Board extends LightningElement {
    @track
    squares = [
        { value: '', position: 1 },
        { value: '', position: 2 },
        { value: '', position: 3 },
        { value: '', position: 4 },
        { value: '', position: 5 },
        { value: '', position: 6 },
        { value: '', position: 7 },
        { value: '', position: 8 },
        { value: '', position: 9 }
    ];
}
