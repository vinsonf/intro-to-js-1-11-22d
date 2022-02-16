import {treeImg} from './images.js';
export class Tree {
    constructor(imgAddress) {
        this.div = document.createElement('img');
        this.div.src = treeImg;
        document.body.appendChild(this.div);
        console.log(this.div)
    }
}

export function sayHello() {
    console.log('Hello');
}