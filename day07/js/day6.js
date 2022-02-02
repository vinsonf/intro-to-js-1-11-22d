// promises
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(' this is the result or resolved data');
        reject('this is the error');
    }, 5000);
});

myPromise
.then((resolvedData) => { // resolvedData is the data that was passed into the resolve function
    console.log('good', resolvedData);
}).catch(err => console.log('bad', err));
// api
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then((resolvedData) => { console.log(resolvedData); return resolvedData.json(); })
.then((jsonData) => {console.log(jsonData)})
// json
const nonJsonObject = {
    name: 'pikachu',
    id: 25,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
};
const jsonObject = `{
    "name": "pikachu",
    "id": 25,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
}`;

