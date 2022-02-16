import {Deck} from './deck.js';

const deck = new Deck();

setInterval(() => {
    deck.shuffle();
}, 3000);



