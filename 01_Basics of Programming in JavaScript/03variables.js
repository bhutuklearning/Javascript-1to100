// Variables are Containers for Storing Data.

// In common practices variables can be declared in Js using three ways "var", "let", and "const".
// But they can be declared automatically.

// At first, lets see how variables get declared automatically.
// Supose variables a, b and c. They get automatically declared when they get used.
a = 3;
b = 7;
c = a * b;

// Variable declaration using "var"
var aa = 55;
var bb = 66;
var cc = 77;

// Variable declaration using "let"
let a0 = 100;
let b0 = 200;
let c0 = 300;

// Variable declaration using "const"
const a1 = 500;
const b1 = 1000;
const c1 = 1500;


// It is considered good programming practice to always declare variables before use.

// var
/*
var is the original way to declare variables in JavaScript, offering function-level scope rather than block-level.
It gets hoisted with an initial value of undefined and allows redeclaration, which can sometimes lead to bugs if you accidentally overwrite a variable.
*/

// let
/*
let provides block-level scope, meaning the variable exists only within the nearest set of curly braces.
Although it is hoisted, it remains uninitialized until its actual declaration, preventing usage beforehand, and it does not permit redeclaration within the same block.
*/

// const
/*
const also offers block-level scope but is used to declare variables that shouldn’t be reassigned after their initial assignment.
While you must assign a value immediately, note that for objects and arrays, their contents can still be modified even though the binding remains constant.
*/