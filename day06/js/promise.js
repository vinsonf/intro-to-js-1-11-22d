// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('failed');
//     }, 10000);
// });

// myPromise
// .then((data) => {console.log('good', data)})
// .catch(err => console.log('bad', err));

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')

// .then(function(data) {console.log(data)} )
// .then( data => console.log('done with all of this'))
// .catch(err => console.log('error', err));



function getPokemon(name) {
    // fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then(function(data) {
        return data.json();
    }).then(function(data) {
        console.log(data);
        pokemonName.innerHTML = data.name;
        pokemonID.innerHTML = data.id;
        img.src = data.sprites.front_shiny;
        return data;
    });
}

getPokemon('mewtwo');



const input = document.querySelector('input'); // get element by tag name (first match)
const button = document.querySelector('button'); // get element by tag name (first match)

const pokemonName = document.querySelector('#pokemon-name'); // get element by id
const img = document.querySelector('img'); // get element by tag name (first match)
const pokemonID = document.querySelector('#pokemon-id'); // get element by id

console.log( input, button, pokemonName, img, pokemonID );



button.addEventListener('click', function() {
    getPokemon(input.value);
})
