function first() {
    console.log('first');
}

function second() {
    console.log('this is the second function');
}

// second();
// first();
// second();


// call back function
function someFunction(string, number, callback) {
    console.log(string, number);
    callback();
}

someFunction(1, 'string', () => {console.log('run me later')});

// console.log(1,2,3,4,5,6,7,8,9,10);


function doWork(someFunction) {
    someFunction();
}

doWork(function() {console.log('i am a callback function')});

first();
// xmlhttprequest
// const myXMLHttpRequest = new XMLHttpRequest();
// myXMLHttpRequest.onreadystatechange = function() {
//     console.log('state', myXMLHttpRequest.readyState);
//     if (myXMLHttpRequest.readyState === 4) {
//         console.log(myXMLHttpRequest.responseText);
//     }
// }

// console.log(myXMLHttpRequest.readyState);
// myXMLHttpRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
// console.log(myXMLHttpRequest.readyState)
// myXMLHttpRequest.send();
// console.log(myXMLHttpRequest.readyState)

second();


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response => response.json())
.then(data => console.log(data))
.then( data => console.log('done with all of this'));