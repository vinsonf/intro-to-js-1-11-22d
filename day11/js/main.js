import {Player, sayHello} from './player.js';
import {Tree, sayHello as hello} from './tree.js';


new Player('red');
new Player('blue');
new Player('green');
new Player('yellow');
new Tree();
new Tree();


sayHello();
hello();

const myRegex = /\(?\d{3}[ \)-]\d{3}[- ]\d{4}/g;

const phone = prompt('what is your phone number?');

myRegex.test(phone) ? alert('Valid phone number') : alert('Invalid phone number');

const password = '123456';

/^[a-zA-Z]\w{6,20}/