// Javascript has 8 basic datatypes, which are categorized into primitive and non-primitive.
/*
Primitive Data Types:
1) Numbers
2) Strings
3) Bigint
4) Boolean
5) Null
6) Undefined
7) Symbol
Non Primitive Data Type:
8) Object
    Object represent complex data structures, it includes:
    *) Objects
    *) Arrays
    *) Functions
    *) Maps
    *) Dates
    *) Sets 
*/

// Numbers
let num1 = 3;
console.log(num1);

let num2 = "Hello World" / 3;
console.log(num2);

let num3 = 4.69;
console.log(num3);

let num4 = Infinity;
console.log(num4);

// Strings
let str1 = "Hello";
console.log(str1);

let str2 = `${str1} World`;
console.log(str2);

// Boolean
let b1 = true;
console.log(b1);

let b2 = false;
console.log(b2);

// Null
// The 'null' data type defines a special value that represents nothing, or empty value.
let a = null;
console.log(a);

// Undefined
// A variable that has been declared but not initialized with a value is automatically assigned the undefined value.
// It means the variable exists, but it has no value assigned to it.
let und1;
console.log(und1);

// Symbol(ES6)
//Symbols, introduced in ES6, are unique and immutable primitive values used as identifiers for object properties.
// They help create unique keys in objects, preventing conflicts with other properties.
const s1 = Symbol(12);
const s2 = Symbol(12);
console.log(s1 == s2);

const sym1 = Symbol("ABC");
const sym2 = Symbol("ABC");
console.log(sym1 == sym2);

// BigInt(ES2020)
// A built in object which is used to stire numbers greater than 2 to the power 53.
// The largest number that JavaScript can reliably represent with the Number primitive is 253,
// which is represented by the MAX_SAFE_INTEGER constant.
const bignum1 = BigInt("4458268410000445000122336559678859");
console.log(typeof (bignum1), ": ", bignum1);


// Object: Non Primitive Datatype
// The data types that are derived from primitive data types are known as non-primitive data types.
// It is also known as derived data types or reference data types.

// Objects: JavaScript objects are key-value pairs used to store data, created with {} or the new keyword.
// They are fundamental as nearly everything in JavaScript is an object.
let user = {
    name: "User1",
    email: "user1@gmail.com"
}
console.log(user);
console.log(user.name);
console.log(user.email);

// Arrays: An Array is a special kind of object used to store an ordered collection of values,
// which can be of any data type(in Js).
let arr1 = [1, 5, 6, 8, 3];
console.log(arr1);

let arr2 = [55, "Hello", 45, true, null];
console.log(arr2);

let arr3 = [15, "User", bignum1, { Name: "UserBoy" }];
console.log(arr3);

// Functions: A function in JavaScript is a block of reusable code designed to perform a specific task when called.
function hello(name) {
    return `Hello ${name}`;
}

console.log(hello("Javascript"));







