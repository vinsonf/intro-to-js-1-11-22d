// Javascript Classes


const dogNames = ['Lassie', "Spot", "Rover", "Buddy", "Snoopy"]


class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log('Woof! my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}


for(let i = 0; i < dogNames.length; i++) {
    let dog = new Dog(dogNames[i], i);
    dog.speak();

    console.log(dog);
}
