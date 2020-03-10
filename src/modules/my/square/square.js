import { LightningElement, api } from 'lwc';

export default class Square extends LightningElement {
    @api
    value = '';

    @api
    position = -1;
}
