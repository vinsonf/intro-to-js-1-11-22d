
let x = 'test';

// logical control flow
// if statement
if (x == 1) {
    console.log('this code runs')
}

// if else statement
if (x == 1) {
    console.log('this code runs if true')
} else {
    console.log('this code runs if false');
}

// if else if statement

if (x == 1) {
    console.log('this code runs if true')
} else if (x == 2) { 
    console.log('this code runs if the first condition is false and the second is true');
} else if (x == 3) {
    console.log('this code runs if the first and second conditions are false and the third is true');
} else {
    console.log('this code runs if all conditions are false');
}

// switch statement

switch(x) {
    case 1:
        console.log('this code runs if x is 1');
        break;
    case 2:
        console.log('this code runs if x is 2');
        break;
    case 3:
        console.log('this code runs if x is 3');
        break;
    case 'test':
        console.log('this code runs if x is test');
        break;
    default:
        console.log('this code runs if x is not 1, 2, or 3');
}

// ternary operator
// shorthand for if else statement
x == 1 ? console.log('x is 1') : console.log('x is not 1');


const bday = prompt('what is your birthday?'); // 1/20

if (Number(bday)) {
    console.log('great, you entered a number');
} else {
    console.log('please enter a number');
}
const birthday = new Date(bday); // 1/20/2020


const month = birthday.getMonth() === new Date().getMonth(); // true
const day = birthday.getDate() === new Date().getDate(); // true
console.log(birthday)
const correctBday = month && day; // true

if (correctBday) {
    console.log('happy birthday!');
} else {
    console.log('very happy unbirthday!');
}

// gather information from the user // read
// store the information in variables // write
// compare the information/ process the information // update
// display the result to the user // write
// delete the information from the variable // delete

// crud: create, read, update, delete