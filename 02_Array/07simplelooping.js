// This file discuss more in simple looping techniques in Arrays of js.

// While loop
let num = [1, 2, 3, 4, 5];

console.log("While loop");
let i = 0;
while (i < num.length) {
    console.log(num[i]);
    i++;
}

// Do-while loop
console.log("Do-while loop");
let j = 0;
do {
    console.log(num[j]);
    j++;
} while (j < num.length);


// For of loop: Best for reading values directly from arrays.
console.log("For Of loop");
let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
}


// For in loop: Loops through the indexes/keys of an array. Use it carefully—it’s meant more for objects.
console.log("For In loop");
for (let index in colors) {
    console.log(index, colors[index]);
}


// For loop
console.log("For loop");
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
