// Array Search Methods

// Array indexOf(): The indexOf() method searches an array for an element value and returns its position.
const alphabets = ["abc", "def", "ghi", "jkl", "mno"];
let aplha1 = alphabets.indexOf("ghi");
console.log("Index of the array: ", aplha1);
console.log("Position of the element in the array: ", aplha1 + 1);

// Array lastIndexOf(): Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
let alpha2 = alphabets.lastIndexOf("jkl");
console.log("Index of the array: ", alpha2);
console.log("Position of the element in the array: ", alpha2 + 1);


// Array includes(): This allows us to check if an element is present in an array (including NaN, unlike indexOf).
console.log(alphabets.includes("abc"));
console.log(alphabets.includes("xyz"));
// Array.includes() allows to check for NaN values.


// Array find(): The find() method returns the value of the first array element that passes a test function.
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(first);
/*
Note that the function takes 3 arguments:
The item value
The item index
The array itself
*/


// Array findIndex(): The findIndex() method returns the index of the first array element that passes a test function.
const numbers1 = [4, 9, 16, 25, 29];
let first1 = numbers1.findIndex(myFunction1);

function myFunction1(value, index, array) {
    return value > 18;
}
console.log(first1);

// The function also takes three parameters: The item value, The item index, The array itself


// Array findLast(): the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high);


// Array findLastIndex(): findLastIndex() method finds the index of the last element that satisfies a condition.
let pos = temp.findLastIndex(x => x > 40);
console.log(pos);