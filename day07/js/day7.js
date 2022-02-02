

const animalType = 'dog';
const count = 5;

function getFact(animalType, count) {
    const myUrl = `https://cat-fact.herokuapp.com/facts/random?animal_type=${animalType}&amount=${count}`;
    return fetch(myUrl).then( res => res.json() );
}

// random item out of array
// getFact(animalType, count).then( data => {
//     console.log(data);
//     const randomNumber = Math.floor(Math.random() * data.length);
//     (data.length > 0) ? console.log(data[randomNumber].text) : console.log('no facts');
// });

// sort array by function (ascending)
// getFact(animalType, count).then( data => {
//     console.log(
//         data.sort( (item1, item2) => item1.text.length > item2.text.length ?  -1 : 1 )
//     );
//     data.forEach( item => console.log(item.text.length, item.text) );
// });
// filter an array by function (returns true or false)
// getFact(animalType, count).then( data => {
    
//     const myArray = data.filter((item) => {
//         return item.text.includes('dogs');
//     });
//     myArray.forEach( item => console.log(item.text.length, item.text) );
// });

['a', 'b', 'c', 'd', 'e'].forEach( item => console.log(item) );

for(let i = 0; i < 100; i++){
    console.log(i);
}

let x = 5;
while(x <= 10) {
    console.log('x', x);
    x += 5;
}

do{
    console.log('x do', x);
    x++;
} while (x <= 20);