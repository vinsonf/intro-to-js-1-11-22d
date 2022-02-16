import {playerImg} from './images.js';
export class Player {
    constructor(color) {
        this.div = document.createElement('img');
        this.div.src = playerImg;
        this.div.style.height = '100px';
        this.div.style.width = '100px';
        this.div.style.borderRadius = '50%';
        document.body.appendChild(this.div);
        console.log(this.div)
    }
}

export function sayHello() {
    console.log('Hello!');
}