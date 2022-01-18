// how to look for an element in the DOM
const button = document.querySelector('button');
const input = document.querySelector('input');
const body = document.querySelector('body');

let howManyClicks = 0; // create variable to hold number of clicks

button.addEventListener('click', function() { // add event listener to button for click
    howManyClicks += 100; // add 1 to howManyClicks the variable
    button.innerText = input.value; // change the text of the button to howManyClicks
    input.style.color = input.value; // change the background color of the button to the value of the input
});
console.log(button);