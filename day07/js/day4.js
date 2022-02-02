// control flow

// if
// if (condition) { do something ( code block ) }
let age = 30;
// let age = prompt('What is your age?'); // prompt is a function
if (age == 31) {
  console.log('your age is 31');
}


// if else

if (age !== 31) {
  console.log('your age is not 31');
} else {
    console.log('your age is 31');
}

// if else if

if (age < 18) {
    console.log('you are a minor');
} else if (age >= 18 && age < 21) {
    console.log('you are a adult but not able to do certain things');
} else if (age >= 21 && age < 55) {
    console.log('you are an adult but not a senior citizen');
} else {
    console.log('you are a senior citizen');
}

// switch

const grade = 'A';

switch (grade) {
    case 'A':
        console.log('you got an A! you are awesome and will get a large surprise');
        break;
    case 'B':
        console.log('you got a B! you are good but you will get a small surprise');
        break;
    case 'C':
        console.log('you got a C! you are not good but you will have to work hard');
        break;
    case 'D':
        console.log('you got a D! you are not trying hard but you will have to work hard');
        break;
    case 'F':
        console.log('you got an F! you are not trying hard and you will fail');
        break;
    default:
        console.log('you did not get a grade but you get an E for effort');
}


// ternary operator

// condition ? true : false
(age >= 18) ? console.log('you are an adult') : console.log('you are a minor'); // basically a if else statement

