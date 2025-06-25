/*
An array is a special variable used to store multiple values in a single place.
In Js, Array is an object which is used to store multiple values.
An array is a list of values called elements.The elements are ordered based on their index.
Arrays can store elements of different data types (numbers, strings, objects and other arrays).
*/

// It is a common practice to declare arrays with the const keyword.

// Array declaration
const a1 = [1, 2, 3, 4, 5];
const s1 = ["abc", "def", "ghi", "jkl"];

const a2 = Array("25", "50", 75, "100");

console.log(a1);
console.log(s1);

a1[4] = 15;
console.log(a1);

// Arrays are objects and it is a derived datatype.
console.log(typeof (a1));
/*
In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.
*/

const arr1 = [16, 32, 48, 64, 96, 80];

// Array length and sort method 
console.log(arr1);
console.log("Length of the Array: ", arr1.length);
arr1.sort();
console.log("Sorted Array");
console.log(arr1);

// Array indexing starts from 0, which means the first elemet can be accessed with 0 index.
// Simple demonstration of looping to access all the elements in the array.