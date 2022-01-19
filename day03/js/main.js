// useful string methods
let myString = 'Hello World 123abc';
console.log(myString.length); // length of string
console.log(myString[1]); // retrieve character at index
console.log(myString[myString.length - 1]); // retrieve last character
// check to see if a string contains a substring
console.log(myString.includes('world')); // true
// lowercase, uppercase
console.log(myString.toLowerCase()); // hello world 123abc
console.log(myString.toUpperCase()); // HELLO WORLD 123ABC
console.log(myString.toLowerCase().includes('world')); // combine methods

// extract substring
console.log(myString.substring(0, 5)); // Hello
console.log(myString.substring(6, 11)); // World

// replace substring
console.log(myString.replace('World', 'Earth')); // Hello Earth 123abc

// split string into array
console.log(myString.split(' ')); // ['Hello', 'World', '123abc']

// trim whitespace
console.log('   Hello World   '.trim()); // Hello World

//************* */


// ************* */
// PopUp Methods
// alert('Hello World');
const myAlertValue = alert('Hello World'); // no return value
// confirm('Are you sure?');
const myConfirmValue = confirm('Are you sure?'); // returns true (ok) or false (cancel);
// prompt('What is your name?');
const myPromptValue = prompt('What is your name?'); // returns string

console.log(myAlertValue);
console.log(myConfirmValue);
console.log(myPromptValue);


// ************* */
// Useful Math Methods
console.log( Math );

console.log(   Math.floor(2.3)   ); // 2
console.log(   Math.ceil(2.3)   ); // 3
console.log(   Math.round(2.3)   ); // 2
console.log(   Math.round(2.5)   ); // 3
console.log(   Math.min( 400, 22, 21, 88)   ); // 21
console.log(   Math.max( 400, 22, 21, 88)   ); // 400
console.log(   Math.max('a', 'b', 'c')   ); // NaN
console.log(   Math.max(null, {}, 'abc', [], 1, 200)   );
console.log(   Math.random() ); // random number between 0 and 1 but not including 1
console.log(   Math.random() * 10 ); // random number between 0 and 10 but not including 10


console.log(  Math.floor(Math.random() * 100 + 1)    ) // random number between 1 and 100 but not including 0;

// ************* */
// Useful Date Methods
console.log(  new Date()  ); // current date and time
console.log(  new Date(2020, 0, 1)  ); // January 1st 2020
console.log(  new Date(2020, 0, 1, 12, 0, 0)  ); // January 1st 2020 at 12:00:00
console.log(  new Date(2020, 0, 1, 12, 0, 0, 0)  ); // January 1st 2020 at 12:00:00:00
// new date from string
console.log(  new Date('2020-01-01')  ); // January 1st 2020
console.log(  new Date('2020-01-01T12:00:00')  ); // January 1st 2020 at 12:00:00
console.log(  new Date('2020-01-01T12:00:00.000')  ); // January 1st 2020 at 12:00:00:00
console.log( new Date( '1-27-1991' ) ); // 1-27-1991

const myDate = new Date();
console.log( myDate.getFullYear() ); // 2020
console.log( myDate.getMonth() ); // 0 (January)
console.log( myDate.getDate() ); // 18
console.log( myDate.getDay() ); // 0 (Sunday), 1 (Monday), 2 (Tuesday), 3 (Wednesday), 4 (Thursday), 5 (Friday), 6 (Saturday)
console.log( myDate.getHours() ); // 12 (12:00 AM)
console.log( myDate.getMinutes() ); // 0
console.log( myDate.getSeconds() ); // 0
console.log( myDate.getMilliseconds() ); // 0
console.log( myDate.getTime() ); // 1580588800000  milliseconds since January 1st 1970

console.log( myDate.setDate(myDate.getDate() + 130));
console.log(myDate)