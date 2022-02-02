const baseUrl = 'https://cat-fact.herokuapp.com';
const endpoints = {
    facts: '/facts/random',
    users: '/users',
};

function getFact(animal, count) {
    const myUrl = baseUrl + endpoints.facts + "?animal_type=" + animal + "&amount=" + count;
    fetch(myUrl)
    .then(function(response) {
        return response.json();
    }).then( (data) => {
        console.log('facts', data);
        const randomNumber = Math.floor(Math.random() * data.length); // how to get random out of an array
        (data.length > 0) ? console.log(data[randomNumber].text) : console.log('no facts');
    }) // do something with the data
}
const animal = prompt('what animal would you like to get facts about?');
const count = prompt('how many facts would you like?');
getFact(animal, count);