import { LightningElement } from 'lwc';

export default class Products extends LightningElement {
    products = [
        {label: "A", css: "box a"},
        {label: "B", css: "box b"},
        {label: "C", css: "box c"},
        {label: "D", css: "box d"},
        {label: "E", css: "box e"},
        {label: "F", css: "box f"},
        {label: "G", css: "box g"},
        {label: "H", css: "box h"},
        {label: "I", css: "box i"},
        {label: "J", css: "box j"},
        {label: "K", css: "box k"},
        {label: "L", css: "box l"},
        {label: "M", css: "box m"},
        {label: "N", css: "box n"},
        {label: "O", css: "box o"},
    ]

    onHover(e) {
        console.log(e.target.innerText);
    }
}