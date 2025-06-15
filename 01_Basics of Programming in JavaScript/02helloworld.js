// Hello World as well as different console methods.

// Generally it can be practiced in browser's console as well as in IDE in your system.
// In local system program going to get executed by nodejs. (Please install node if not installed)

console.log("Hello World");

// Different types of console methods

// console.log()
console.log("Hello, World!");

// console.error()
console.error("This is an error message.");

// console .warn()
console.warn("This is a warning message.");

// console.table()
console.table([{ name: "Amrit", age: 21 }, { name: "Anshu", age: 22 }]);

// console .group() and console.groupEnd()
console.group('My credentials');
console.log('Username: Amritanshu');
console.log('Password: amritanshugt@gmail.com');
console.groupEnd();

// console.info()
// This works well on browsers console
// console.info('%cThis is a styled info message!', 'color: blue; font-size: 16px; font-weight: bold;');

// console.assert()
console.assert(5 > 10, "This assertion failed");
console.assert(10 > 5, "This assertion failed");

// console.clear()
// console.clear():-> It is used to clear the console.