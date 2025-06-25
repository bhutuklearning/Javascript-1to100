// Different kinds of Array methods

// Array length: It is used to know the size of the array.
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array1.length);

// Array toString(): method returns the elements of an array as a comma separated string.
const ar1 = [1, 2, 3, 4, 5];
console.log(ar1);
const newar1 = ar1.toString();
console.log(newar1);

// ------- New Contribution --------------------
//  Array at(): The at() method returns an indexed element from an array.
const carBrands = ["BMW", "AUDI", "Mclaren", "Mercedez"];
let car1 = carBrands.at(3);
console.log(car1);

// Array join(): The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator.
const heroes = ["Batman", "Spiderman", "Superman", "Hulk"];
console.log(heroes.join("---"));

// Array pop()
// This method remove an element from the array.
// It generally removes the last element of the array.
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums);
console.log(nums.pop());
console.log(nums.pop());
console.log(nums.pop());
console.log(nums);


// Array push()
// This method adds an element to the array.
// It generally adds an element at the end.
console.log(nums);
nums.push(20);
nums.push(21);
nums.push(22);
console.log(nums);

// Array shift()
// It is similar to pop() but it removes the first element of the array.
const nums1 = ["one", "two", "three", "four", "five"];
console.log(nums1);
nums1.shift();
nums1.shift();
console.log(nums1);


// Array unshift()
// It is similar to push but it adds an element at the beginning of the array.
// The unshift() method returns the new array length.
nums1.unshift("two");
nums1.unshift("one");
console.log(nums1);

// Array delete()
// Using delete() leaves undefined holes in the array.
//Use pop() or shift() instead.

const nums2 = [44, 55, 66, 77, 88];
console.log(nums2);
delete nums2[4];
console.log(nums2);


