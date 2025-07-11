console.log("Starting Functions in Javascript.");

/*
JavaScript functions are defined with the function keyword.
You can use a function declaration or a function expression.
*/

// Function Declaration example
function sum(a, b) {
    return a + b;
}

console.log(sum(1, 3));

// It can also be defined using an expression.
const x = function (a, b) { return a + b }; // The function is an anonymous function as it has no name while declaration.
let z = x(4, 3);
console.log(z);
// In the above case, functions stored in variables do not need function names.


// The Function() Constructor
// Functions can also be defined with a built-in JavaScript function constructor called Function().
const myFunction = new Function("a", "b", "return a + b");
let myFunc1 = myFunction(4, 3);
console.log(myFunc1);
// The function constructor can be replaced by function creation using an expression.

// The Hoisting in Functions
test_Function(5, 6);

function test_Function(a, b) {
    console.log("The sum is:", a + b);
}

// Well hoisting is applied everywhere like in functions as well as in variables.


// Self-Invoking Functions
/*
A self-invoking expression is invoked (started) automatically, without being called.
Function expressions will execute automatically if the expression is followed by ().
*/

(function () {
    let x = "Hello User";
    console.log(x);
})();

(function (a, b, c) {
    console.log(`Sum is: ${a + b + c}`);
})(3, 3, 3);

// Datatype of Functions
console.log(`Datatype of functions: ${typeof (function () { })}`);
// JavaScript functions have both properties and methods
function myFunc2(a, b, c) {
    console.log("The numbers of Argumets: ", arguments.length);
}
myFunc2(1, 2, 3);

function myFunc3(a, b, c, d) {
    console.log("The numbers of Argumets: ", arguments.length);
}
myFunc3(1, 2, 3, 4);

// The arguments.length property returns the number of arguments received when the function was invoked.

// The toString() method returns the function as a string.
function myFunc4(a, b) {
    return a * b;
}

console.log(myFunc4(5, 9), typeof (myFunc4(5, 9)));

function myFunc5(a, b) {
    return a * b;
}

console.log(myFunc5(5, 9).toString(), typeof (myFunc5(5, 9).toString()));


/*
A function defined as the property of an object, is called a method to the object.
A function designed to create new objects, is called an object constructor.
*/

// Arrow Functions
// Arrow functions allows a short syntax for writing function expressions.
const arrowFunc = (x, y) => x * y;
console.log(arrowFunc(5, 6));

/*
Drawbacks of Arrow Functions:
Arrow functions do not have their own this. They are not well suited for defining object methods.
Arrow functions are not hoisted. They must be defined before they are used.
*/
