// In programming, operators are special symbols that perform operations on values (operands).
// JavaScript operators are symbols or keywords used to perform operations on values and variables.
// They are the building blocks of JavaScript expressions and can manipulate data in various ways.

/*
In Js, there are differnt types of operators are present, such as:
 *) Arithmetic Operators
 *) Assignment Operators
 *) Comparison Operators
 *) Bitwise Operators
 *) Ternary Operator(Logical Operator)
 *) Type Operators
 *) String Operators
 *) Logical Operators
*/


// Arithmetic Operators
console.log("Arithmetic Operators");
const sum = 3 + 2;
const difference = 3 - 2;
const multiply = 3 * 2;
const divide = 3 / 2;
const modulus = 3 % 2;
const exponent = 3 ** 2;
let increament = 3;
increament++;
let decreament = 3;
decreament--;
console.log("Operands used are 2 and 3.")
console.table([{ "Sum": sum }, { "Difference": difference }, { "multiply": multiply }, { "division": divide }, { "modulus": modulus }, { "exponent": exponent }, { "increament": increament }, { "decreament": decreament }]);

// Assignment Operators
console.log("Assignment Operators");
let x = 10;
console.log(x);
x += 5;
console.log(x);
x -= 5;
console.log(x);
x *= 2;
console.log(x);
x /= 2;
console.log(x);
x %= 7;
console.log(x);
x **= 2;
console.log(x);

// Comparsion Operator
console.log("Comparison Operators");
console.log("3==3", 3 == 3);
console.log("'2'==2", '2' == 2);
console.log("2===2", 2 === 2);
console.log("'2'===2", '2' === 2);
console.log("5!=5", 5 != 5);
console.log("5!=3", 5 != 3);
console.log("2!==7", 2 !== 7);
console.log("'2'!==7", '2' !== 7);
console.log("5>4", 5 > 4);
console.log("5<4", 5 < 4);
console.log("5>=5", 5 >= 5);
console.log("5<=2", 5 <= 2);
// Ternary Opeartor:
5 > 4 ? console.log("5 is greater than 4") : console.log("5 is lesser than 4");

// JavaScript uses 32-bit signed numbers.
// Bitwise Operators
console.log("Bitwise Operators");
console.log("5&1", 5 & 1);
console.log("5|1", 5 | 1);
console.log("~5", ~5);
console.log("5^1", 5 ^ 1);
console.log("5<<1", 5 << 1);
console.log("5>>1", 5 >> 1);
console.log("5>>>1", 5 >>> 1);
console.log("5<<2", 5 << 2);

// String Operators
console.log("String Operators")
let t1 = "A";
let t2 = "B";
let output1 = t1 < t2;
console.log('"A" < "B":', output1); // comaprison will be done in unicode values of the alphabets according to the ascii table,

let t3 = "20";
let t4 = "5";
let output2 = t3 < t4;
console.log('"20" < "5":', output2);
/*
Although "20" and "5" look like numbers, they are strings, so JavaScript compares them lexicographically,
like words in a dictionary. In this case, "2" from "20" is compared with "5",
and since "2" comes after "5" in Unicode ordering, "20" < "5" evaluates to false.
*/

let w1 = "Amritanshu";
let w2 = "Goutam";
console.log(w1 + " " + w2);

console.log(" '5' + 5 :", '5' + 5); // reslut is always a string.
console.log(" 'Alice' + 5 :", 'Alice' + 5); // reslut is always a string.


// Logical Operators
console.log("5&&3", 5 && 3);
console.log("5||3", 5 || 3);
console.log("5!=3", 5 != 3);
console.log("!3", !3);

// Type Operators
console.log("typeof() and instanceof() operators comes under the Type Operators of Js.")
console.log("typeof('Hello'):", typeof ('Hello'));