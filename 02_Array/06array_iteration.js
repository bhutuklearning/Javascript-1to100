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


