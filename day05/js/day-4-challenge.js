// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

let num1 = prompt("enter number 1");
let num2 = prompt("enter number 2");

num1 = parseInt(number1);
num2 = parseInt(number2);

if (num1 === num2) {
    alert('they are equal: ' + num1);
} else if (num1 > num2) {
    alert(`number 1: ${num1} is greater than number 2: ${num2}`);
} else {
    alert(`number 2: ${num2} is greater than number 1: ${num1}`)
}