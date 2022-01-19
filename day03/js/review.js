        //************* */
        // Data types

        // primitive data types
        const myString = 'Hello World'; // normal string
        const myStringB = "Hello World"; // normal string;
        const myStringC = `Hello World`; // template string
        const myNumber = 10;
        const myBoolean = true;

        // other primitives
        const myNull = null;
        const myUndefined = undefined;
        const mySymbol = Symbol(); // fancy unique identifier
        const myBigInt = BigInt(10); // big integer number

        // complex data types
        const myArray = [1, 2, 3, 4, 5];
        const myObject = {};


        //************* */
        // Type Casings;

        // type casings in js
        // camelCase - used for variables or function names
        // PascalCase - used for classes
        // snake_case - used for functions
        // kebab-case - used for css classes - not used in js
        // CONSTANT_CASE - used for constants
        //************* */

        //************* */
        // Variable Declarations Types
        // let, const, var
        var myVar = 'hello'; // vars can be reassigned and redeclared
        let myVariable = 'hello'; // let can be reassigned but not redeclared
        const myConstant = 'hello'; // const cannot be reassigned or redeclared

        var myVar = 'goodbye';
        myVariable = 'goodbye';
        // myConstant = 'goodbye';
        console.log(myVariable);

        //************* */

        //************* */
        // Operators
        // ==, ===, !=, !==, >, <, >=, <=
        // + - * / %
        // ++, --
        // +=, -=, *=, /=, %=

        // Arithmetic Operators
        // +, -, *, /, %

        // Assignment Operators
        // =, +=, -=, *=, /=, %=

        let a = 0;
        a = 1;
        a += 5;
        a + 10;
        console.log(a);

        // Logical Operators
        // &&, ||, !

        // Comparison Operators
         1 == 1; // true
         2 == 1; // false
         2 == 2 && 1 == 5; // false
         2 == 2 || 1 == 5; // true
        !(2 == 2); // false
        2 !== 3; // true

        //************* */


        // Assign STRING VALUES ONLY to all of the following variables.
// Assign an adjective
let adj1 = 'big';
// Assign an adjective
let adj2 = 'blue';
// Assign an adjective
let adj3 = 'happy';
// Assign an adjective
let adj4 = 'tired';
// Assign an adjective
let adj5 = 'hungry';
// Assign an adjective
let adj6 = 'sad';
// Assign an adverb
let adverb = 'quickly';
// Assign a color
let color = 'blue';
// Assign a noun
let noun1 = 'dog';
// Assign a noun
let noun2 = 'cat';
// Assign a noun
let noun3 = 'car';
// Assign a noun
let noun4 = 'tree';
// Assign a noun
let noun5 = 'house';
// Assign a noun
let noun6 = 'ball';
// Assign a number
let num = 5;
// Assign a plural noun
let pnoun1 = 'dogs';

// Open your console to see the results!
// SPOILER ALERT: KEEP SCROLLING TO VIEW THE REST OF THE CODE


































//Using template literals to plug in the values
let story = `It has often been said that a dog is a man's best ${noun1}. Dogs are very ${adj1} and can be taught many ${adj2}
tricks. A dog can be trained to carry a ${noun2} in his mouth.
If you throw his ${noun3}, he will run and fetch it. Dogs
will also bark ${adverb} if someone tries to break into your
${noun4} during the night. One of the most popular canine pets
today is the ${noun5} Spaniel. Spaniels have curly ${color}
coats and ${adj3} ears. They also have very ${adj4}
dispositions and live to be ${num} years old. Other popular dogs
are ${adj5} Terriers, German ${pnoun1}, and the
${adj6} Poodle. Every ${noun6} should have a loyal dog.`;

//Console log the completed story
console.log(story);


let myStringA = 'Buddy';
let myTemplateString = `Hello ${myStringA} ${noun5}`;
console.log(myTemplateString);