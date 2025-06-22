// Break and Continue keywords

// Break
// The break statement "jumps out" of a loop.

let num1 = 1;

while (num1 <= 10) {

    if (num1 === 5) {
        console.log("Break keyword applied.");
        break;
    }

    console.log(num1);
    num1++;
}

// Continue 
// The continue statement "jumps over" one iteration in the loop.

let num2 = 1;

// It created problem in while loop as it jumps one iteration.
// while (num2 < 10) {

//     if (num2 === 4) {
//         //console.log("Continue keyword applied.");
//         continue;
//     }

//     console.log(num2);
//     num2++;
// }

for (let i = num2; i <= 10; i++) {
    if (i === 4 || i === 8) {
        console.log("Continue keyword applied.");
        continue;
    }
    console.log(i);
}