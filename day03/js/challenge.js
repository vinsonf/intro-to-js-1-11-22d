// Prompt the user for their first name
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string

// const firstName  = prompt('what is your firt name?');
// console.log(firstName);
// const nameArray = firstName.split('');
// console.log(nameArray);
// const reverseName = nameArray.reverse();
// console.log(reverseName);
// const reversedName = reverseName.join('');
// console.log(reversedName);



// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result


let number1 = prompt('give me a number between 1 and 10', '10');
let number2 = prompt('give me a number between 1 and 10', '10');

let number1Parse = parseInt(number1);
let number2Parse = parseInt(number2);

console.log(typeof number1Parse, typeof number2Parse);

alert(number1Parse + number2Parse);