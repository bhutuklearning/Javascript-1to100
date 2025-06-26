// Array Sort Methods
// Alphabetic Sort and Numeric Sort

// Alphabetic Sort
// Array sort()
const arr1 = ["one", "two", "three", "four"];
console.log(arr1);
arr1.sort();
console.log(arr1);

// Array reverse(): The reverse() method reverses the elements in an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.reverse();
console.log(fruits);

// Array toSorted(): toSorted() method as a safe way to sort an array without altering the original array.
// The difference between toSorted() and sort() is that the first method creates a new array,
// keeping the original array unchanged, while the last method alters the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months);
const sorted1 = months.toSorted();
console.log(sorted1);

// Array toReversed(): toReversed() method as a safe way to reverse an array without altering the original array.
// The difference between toReversed() and reverse() is that the first method creates a new array,
// keeping the original array unchanged, while the last method alters the original array.
const reversed1 = months.toReversed();
console.log(reversed1);


// Numeric Sort
/*
By default, the sort() function sorts values as strings.
This works well for strings but not for numbers.
If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
You can fix this by providing a compare function.
*/

// Ascending Order
let points = [40, 100, 1, 5, 25, 10];
console.log(points);
points.sort(function (a, b) { return a - b });
console.log(points);

// Descending order
points = [40, 100, 1, 5, 25, 10];
console.log(points);
points.sort(function (a, b) { return b - a });
console.log(points);



/*
The purpose of the compare function is to define an alternative sort order.
The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}

The compare function compares all the values in the array, two values at a time (a, b).
When comparing 40 and 100, the sort() method calls the compare function(40, 100).
The function calculates 40 - 100 (a - b), and since the result is negative (-60),
the sort function will sort 40 as a value lower than 100.
*/
