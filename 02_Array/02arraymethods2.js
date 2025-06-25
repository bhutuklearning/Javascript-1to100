// Merging Arrays
// Concatenation
// In programming languages, concatenation means joining strings end-to-end.

// The concat() method creates a new array by merging (concatenating) existing arrays.

const str1 = ["grapes", "apple", "mango"];
const str2 = ["banana", "litchi", "kiwi"];

const orgstr = str1.concat(str2);
console.log(orgstr);

/*
The concat() method does not change the existing arrays. It always returns a new array.
The concat() method can take any number of array arguments.
*/
const str3 = ["Blueberry", "Jaggery"];
const originalstr = str1.concat(str2, str3);
console.log(originalstr);

// The concat() method can also take strings as arguments
const newstr = str3.concat("Cashwenuts");
console.log(newstr);


// Array copyWithin(): copyWithin() copies array elements to another position in an array, overwriting existing values.
let fruits = ["Banana", "Orange", "Apple", "Mango", "kiwi"];
console.log(fruits);
fruits.copyWithin(2, 0);
console.log(fruits);
fruits = ["Banana", "Orange", "Apple", "Mango", "kiwi"];
fruits.copyWithin(0, 2);
console.log(fruits);
/*
The copyWithin() method overwrites the existing values.
The copyWithin() method does not add items to the array.
The copyWithin() method does not change the length of the array.
*/


//Array flat(): The flat() method creates a new array with sub-array elements concatenated to a specified depth.
/*
Flattening an array is the process of reducing the dimensionality of an array.
Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
*/
const myArr = [[1, 2], [3, 4], [5, 6]];
console.log(myArr);
const newArr = myArr.flat();
console.log(newArr);

// Array flatMap(): The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr1 = [1, 2, 3, 4, 5];
console.log(myArr1);
const newArr1 = myArr1.flatMap(x => [x, x ** 2]);
console.log(newArr1);

// Array splice(): The splice() method can be used to add new items to an array.
const names1 = ["abc", "def", "ghi", "xyz"];
console.log(names1);
names1.splice(3, 0, "jkl", "mno");
console.log(names1);

names1.splice(5, 1, "pqr", "stu");
console.log(names1);

// Array toSpliced()
/*
The difference between the new toSpliced() method and the old splice() method is tha
 the new method creates a new array, keeping the original array unchanged,
 while the old method altered the original array.
*/

const names2 = ["mno", "pqr", "stu"];
console.log(names2);
const newNames2 = names2.toSpliced(0, 1);
console.log(newNames2);



// Array slice(): The slice() method slices out a piece of an array into a new array.
const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits1);
const citrus = fruits1.slice(1);
console.log(citrus);

/*
The slice() method creates a new array.
The slice() method does not remove any elements from the source array.
*/

const anotherFruit1 = fruits1.slice(1, 4);
console.log(anotherFruit1);


// All JavaScript objects have a toString() method.