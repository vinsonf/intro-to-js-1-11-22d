// functions

// function declaration

// keyword function
// function name
// (parameters: optional) 
// { code block: do work}
// functions return a value
function add(a, b) {
    return a + b;
}
console.log(add(21, 21));
// methods
// are just functions that are part of an object ( in javascript everything is an object )

'hello world'.toUpperCase();
['hello', 'world'].join(' ');
console.log('console.log is a method');

// scope

// global scope
// local scope
// local scope is only available inside a function
// global scope is available everywhere


const scope = {
    myScopedVariable: 'Goodbye',
    global: {
        name: 'global scope',
        add(a) {
            console.log(this)
            return a + this.subtract.myPrivateVariable;
        },
        subtract() {
            const myPrivateVariable = 'goodbye';
            return a - b;
        },
        localScope : {
            name: 'local scope',

            whoAmI() {
                console.log(this)
            }
        }
    },
};
const myGlobalVariable = 'hello';
console.log(scope.global.localScope.whoAmI());

const myButton = document.querySelector('button');
myButton.addEventListener('click', function() {
    console.log(this);
    this.innerHTML = scope.myScopedVariable;

})