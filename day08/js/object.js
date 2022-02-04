const myObject = {
    name: 'John',
    "age-one": 30,
    name: 'joe',
    favoriteFoods: ['pizza', 'burgers', 'ice cream'],
    isPresent: true,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: {
            name: 'California',
            abbreviation: 'CA',
            thingsToDo: ['eat', 'sleep', 'code']
        },
        postal: {
            code: '12345',
            country: 'USA'
        }
    },
    sayHello: function() {
        console.log('Hello from', this.address.state.name );
        return true;
    }
};

console.log(myObject.sayHello());