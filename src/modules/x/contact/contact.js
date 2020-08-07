import { LightningElement } from 'lwc';

export default class Contact extends LightningElement {
    connectedCallback() {
        console.log(window.location.search);
    }
}