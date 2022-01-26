// what is scope?
// scope is the area in which a variable is accessible.
// what kinds of scope are there?
// global scope
// function scope
// block scope
// local scope

// scope analogy
// global scope

// giving parents
// stingy siblings and kids

// you will always look in your own scope first
// you will look in the parent scope if you cannot find it in your own scope
// you will look in the grandparent scope if you cannot find it in your own or parent scope

const public = 'anyone can see this';
let car = 'public transportation';

function GreatGrandFather() {
    let GreatGrandFathersCar = 'Toyota';
    let car = 'private transportation';
   
  

    function GrandFather() {
        let GrandFathersCar = 'Honda';
 
      

        function Father() {
            let FathersCar = 'BMW';
            let car = 'Fathers private transportation'

            function Child() {
                let ChildsCar = 'Ford';
                
                console.log(car);
              
            }
            function Sibling() {
                let SiblingsCar = 'Chevy';
            }
            Child();
            Sibling();
        }
        Father();
        function Uncle() {
            let UnclesCar = 'Jeep';
            
        }

        Uncle();
    }
    GrandFather();
    function GreatUncle(){
        let GreatUnclesCar = 'Dodge';

        function SecondCousin() {
            let SecondCounsinsCar = '2 Counsins Chevy';
            console.log(public);
        }

        SecondCousin()
    }
    GreatUncle();

}

GreatGrandFather();


