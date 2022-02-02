// string methods

const myString = 'Hello World';
const myIndexs = '0123456789';

console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

console.log(myString.substring(0, 5));
console.log(myString.substring(6, 11));

console.log(myString.concat(' ', 'is', 'awesome'));

console.log(myString.includes('World'));

// pop up methods
// alert(myString)
// const usersName = prompt('what is your name?');
// const confirmValue =  confirm('are you sure?');

// Math

console.log(Math.random()) // random number between 0 and 1
console.log(Math.random() * 10) // random number between 0 and 10

console.log(Math.floor(7.97383929)) // 7
console.log(Math.ceil(7.97383929)) // 8

console.log(Math.max(1, 2, 3, 4, 5)) // 5
console.log(Math.min(1, 2, 3, 4, 5)) // 1
// Date

const myDate = new Date();

console.log(myDate);
myDate.setMonth(myDate.getMonth() + 3)
console.log(myDate);