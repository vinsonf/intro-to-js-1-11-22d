class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
  
    display() {
        const body = document.querySelector('body');
        const div = document.createElement('div');
        div.style.background = this.color;
        div.style.color = 'white';
        div.style.display = 'inline-block';
        div.style.width = '200px';
        div.style.textAlign = 'center';
        div.style.margin = '10px'
        div.style.border = '5px solid black';
        div.innerHTML = `
        <hr>
        Make: ${this.make} <br>
        Model: ${this.model} <br>
        Year: ${this.year} <br>
        Color: ${this.color} <br>
        <hr>
        `;
        body.append(div);
    }
}

const myCar = new Car('Chevy', 'Corvette', '1955', 'red');
myCar.display();

const myOtherCar = new Car('Ford', 'Mustang', '1964', 'blue');
myOtherCar.display();