// In programming, loops are a way to repeat a block of code multiple times,
// either a specific number of times or until a certain condition is no longer true.
// They help automate repetitive tasks and keep your code clean and efficient.

// In Js there are mainly five types of loops:
// For loop, While loop, do-while loop, For of loop, For in loop

// While loop
let num = 5;

while (num <= 10) {
    console.log(`${num}`);
    num++;
}

// Do-while loop
let num0 = 1;

do {
    console.log(`${num0 * num0}`);
    num0++;
} while (num0 <= 10);

// For loop
let num1 = 10;

for (let i = 0; i < 5; i++) {
    console.log(`${num1} x ${i + 1} = ${num1 * (i + 1)}`);
}

// In for loop, there are three expressions as discussed above.
// Remember, expression 1 and 3 are optional.

// For In Loop
// The JavaScript for in statement loops through the properties of an Object.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

for (x in person) {
    console.log(x, ":", person[x]);
}

/*
The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]
*/

// For of Loop
// The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, and more.

let language = "JavaScript";

for (x of language) {
    console.log(x);
}

let arr1 = ["one", "two", "three"];
for (x of arr1) {
    console.log(x);
}