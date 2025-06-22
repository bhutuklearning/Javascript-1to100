// In simple terms, conditionals are tools in any programming language like JavaScript that let your program
//  make decisions. They check if a condition is true or false, and based on that,
//  they decide which block of code should run.


// In Js, generally there are four types of conditionals:
// if statement, if-else statement, else if statement, switch case statement.

// There is a conditional Operater called ternary operator.


// For prompt,
// npm install prompt-sync
const prompt = require('prompt-sync')();

// if statement
console.log("If statement.");
let a = 10;
if (a > 9) {
    console.log("a is greater than 9.");
}

// if-else statement
console.log("If-else statement.");
let b = prompt("Enter the value for b between 1 and 10: ");

if (b > 5) {
    console.log(`${b} is greater than 5.`)
}
else {
    console.log(`${b} is less than 5.`)
}

// else if statement
console.log("Else-if statement.");
let c = prompt("Enter the value for C between 1 and 100: ");

if (c >= 67) {
    console.log("It is greater than 2/3 of the 100.");
}
else if (c >= 33) {
    console.log("It is greater than 1/3 of the 100.");
}
else {
    console.log("It is less than 1/3 of 100.")
}


// switch case
console.log("Switch-case statement.");
let d = prompt("Enter the value between 1 and 5: ");

switch (d) {
    case "1":
        console.log("You rating is 1.");
        break;

    case "2":
        console.log("You rating is 2.");
        break;

    case "3":
        console.log("You rating is 3.");
        break;

    case "4":
        console.log("You rating is 4.");
        break;

    case "5":
        console.log("You rating is 5.");
        break;

    default:
        break;
}

// Nested if-else
console.log("Nested If-else statement");
let x = prompt("Enter the value between 1-20: ");

if (x > 10) {
    if (x > 15) {
        console.log(`${x} is greater than 15.`);
    }
    else {
        console.log(`${x} is less than or equal to 15.`);
    }
}
else {
    if (x > 5) {
        console.log(`${x} is greater than 5.`);
    }
    else {
        console.log(`${x} is less than or equal to 5.`);
    }
}


// Ternary Operator
console.log("Ternary Operator.");
let y = 16;
let z = 14;

y > z ? console.log(`${y} is greater than ${z}`) : console.log(`${y} is lesser than ${z}`);