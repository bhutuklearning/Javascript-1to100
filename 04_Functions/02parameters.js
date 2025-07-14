// Function Parameters and Arguments

function myFunc1(param1, param2) {
    return param1 + param2;
}

myFunc1(45, 55);


// Function parameters are the names listed in the function definition.
/*
In the case of Function myFunc1, param1 and param2 are parameters.
*/

// Function arguments are the real values passed to (and received by) the function.
/*
In the case of Function myFunc1, when myFunc1 is called like, myFunc1(45, 55),
45 and 55 are arguments passed to the function.
*/

/*
Parameter Rules:
JavaScript function definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the passed arguments.
JavaScript functions do not check the number of arguments received.
*/

// Default Parameters
// If a function is called with missing arguments (less than declared), the missing values are set to undefined.
function myFunc2(x, y) {
    console.log(typeof (y));
}
myFunc2(55);
// In such case assign value to that parameters.
function myFunc3(x, y = 10) {
    console.log(typeof (y));
}
myFunc3(55);

// Function Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);


// The Arguments Object
/*
JavaScript functions have a built-in object called the arguments object.
The argument object contains an array of the arguments used when the function was called (invoked).
*/



function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

let y = sumAll(1, 123, 500, 115, 44, 88);
console.log(y);




// Important to remember for me.
/*
Arguments are Passed by Value
The parameters, in a function call, are the function's arguments.
JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
If a function changes an argument's value, it does not change the parameter's original value.
Changes to arguments are not visible (reflected) outside the function.


Objects are Passed by Reference
In JavaScript, object references are values.
Because of this, objects will behave like they are passed by reference:
If a function changes an object property, it changes the original value.
Changes to object properties are visible (reflected) outside the function.
*/

