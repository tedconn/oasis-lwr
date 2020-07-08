import { LightningElement, api } from 'lwc';

export default class Home extends LightningElement {

    @api title = "Cover your Page";

    onLearnMoreClick(event) {
        event.preventDefault();
    }
}