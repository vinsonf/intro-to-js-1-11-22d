// what are js functions?

getNumber(); // function call
// function declaration
function getNumber() { // function name
    console.log(1); // function body
    return 1; // return value
}
getNumber(); // function call

// function expression
;
let getANumber = function(num1) {
    console.log(num1);
    return num1 + 100
};

let myANumber = getANumber(8);


// arrow functions

let myArrowFunction = (num1, num2) => {
    console.log(num1, num2);
    return num1 + num2;
};

['a', 'b', 'c'].forEach( (item) => {
    console.log(item);
    return item;
});


// difference between function declaration and function expression
// function declaration
// hoisting
// function expression
// not hoisting

// functions
// name but not always(anonymous)
// function body
// return value (optional: undefined if not specified);
// parameters (optional: no parameters or many parameters)
// arguments (optional: no arguments or many arguments)

let myNumber = getNumber();
console.log(myNumber);

console.log(myANumber);


function getRealNumber(numberOfTries) {
    let myNumber = prompt('give me a number');
    let myNumberParse = parseInt(myNumber);
    if (isNaN(myNumberParse) ) {
        console.log('you did not give me a number');
        return getRealNumber(numberOfTries + 1);
    } else {
        console.log('you gave me a number', 'after ' + numberOfTries + ' tries');
        return myNumberParse;
    }
}

// let actualNumber = getRealNumber(1);

// console.log("the real number you gave me is:" + actualNumber);


// writing code is like writing a recipe

function step1GetBowl(color) {
    console.log('step 1: get bowl');
    return color + ' bowl';
}

function step2getCereal(kind) {
    console.log('step 2: get cereal');
    return kind + ' cereal';
}

function step3getMilk(type) {
    console.log('step 3: get milk');
    return type + ' milk';
}

function step4pourCereal(cereal) {
    console.log('step 4: pour cereal into bowl');
    return  cereal;
}

function step5pourMilk(milk) {
    console.log('step 5: pour milk into bowl');
    return milk;
}

function step6eatCereal(mood) {
    console.log('step 6: eat cereal');
    return 'we are ' + mood;
}

function actuallyDoTheAction() {
    let bowl = step1GetBowl('red');
    let cereal = step2getCereal('frosted flakes');
    let milk = step3getMilk('skim');
    let cerealPoured = step4pourCereal(cereal);
    let milkPoured = step5pourMilk(milk);
    let mood = step6eatCereal('happy');
    console.log(mood);
}

// actuallyDoTheAction();