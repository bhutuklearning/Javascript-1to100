
// Here we will see the formatting of Date Object in different formats.

// Date()
console.log(new Date());

// Date().toString()
console.log(new Date().toString());

// Date().toLocaleString()
console.log(new Date().toLocaleString());

// Date().toDateString()
console.log(new Date().toDateString());



// Date().tolocaleDateString()
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleDateString("en-EN", "en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
}));

// Date().toLocaleTimeString()
console.log(new Date().toLocaleTimeString());


// Date().toJson()
console.log(new Date().toJSON());

// Date().toISOString()
console.log(new Date().toISOString());

// Date().toUTCString()
console.log(new Date().toUTCString());


// UTC Timings
console.log("UTC Timings:")
console.log("UTC Date:", new Date().getUTCDate());
console.log("UTC Day:", new Date().getUTCDay());