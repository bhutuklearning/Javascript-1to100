// Array Iteration

// Array forEach(): The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];
console.log(numbers);

function myfunc(value, index, array) {
    // value = value ** 2;
    array[index] = value ** 2;
}

numbers.forEach(myfunc);
console.log(numbers);
// The function takes 3 arguments:
// The item value
// The item index
// The array itself

const num1 = [22, 33, 44, 55, 66];
console.log(num1);

function func1(value, index, array) {
    console.log("Value:", value);
    console.log("Index:", index);
    console.log("Array:", array);
    array[index] = value * 2;
}

num1.forEach(func1);
console.log(num1);



// Array map(): The map() method creates a new array by performing a function on each array element.
/*
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.
*/
console.log("Array Map() Method");
const num2 = [11, 22, 33, 44, 55];
console.log(num2);
function myfunc1(value, index, array) {
    return value ** 2;
}

const num3 = num2.map(myfunc1);
console.log(num3);


// Array flatMap(): The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
console.log("Array flatMap()");
const myArr = [1, 2, 3, 4, 5, 6];
console.log(myArr);
const newArr = myArr.flatMap((x) => x ** 2);
console.log(newArr);


// Array reduce(): The reduce() method runs a function on each array element to produce a single value.
// The reduce() method works from left-to-right in the array.

/*
It takes four arguments:
The total (the initial value / previously returned value)
The item value
The item index
The array itself
*/

console.log("Array Reduce()")
const num4 = [45, 4, 9, 16, 25];
console.log(num4)

function myfunc2(total, value, index, array) {
    return total + value;
}

let sum = num4.reduce(myfunc2);
console.log(sum);

// Array reduceRight()
/*
The reduceRight() method runs a function on each array element to produce a single value.
The reduceRight() works from right-to-left in the array. 
*/
console.log("Array ReduceRight()")
const num5 = [45, 4, 9, 16, 25];
console.log(num5)

function myfunc2(total, value, index, array) {
    return total + value;
}

let sum1 = num5.reduce(myfunc2);
console.log(sum1);

// Array every()
/*
The every() method checks if all array values pass a test.
*/

/*
The function takes 3 arguments:

The item value
The item index
The array itself
*/

const age_first = [12, 45, 75, 36, 19, 18, 25];
console.log(age_first);
let allOver18 = age_first.every(ageCheckFunction);

function ageCheckFunction(value, index, array) {
    return value > 18;
}
console.log(allOver18);


// Array some()
// The some() method checks if some array values pass a test.
console.log("Array some()");
console.log(age_first);
let someOver18 = age_first.some(ageCheckFunction);
console.log(someOver18);

/*
The function takes 3 arguments:

The item value
The item index
The array itself
*/


// Array.from()
/*
The Array.from() method returns an Array object from:
Any iterable object
Any object with a length property
*/

let text = "ABCDEFG";
console.log(text);

const newArr1 = Array.from(text);
console.log(newArr1);

// Array.from() has an optional parameter which allows you to execute a function on each element of the new array:
const myNumbers = [1, 2, 3, 4];
console.log(myNumbers);
const myArr2 = Array.from(myNumbers, (x) => x * 2);
console.log(myArr2);


// Array keys()
// The Array.keys() method returns an Array Iterator object with the keys of an array.
console.log("Array keys()");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
    console.log(x);
}


// Array entries()
console.log("Array Entries Method");
const f = fruits.entries();

for (let x of f) {
    console.log(x);
}


// Array with() 
console.log("Array With() Method")
const months = ["Januar", "Februar", "Mar", "April"];
console.log(months);
const myMonths = months.with(2, "March");
console.log(myMonths);