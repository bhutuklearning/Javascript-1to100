// In JavaScript, shallow copy and deep copy refer to how data is duplicated,
// especially when dealing with objects and arrays.

// ----------------  Shallow Copy  ------------------------------------
// A shallow copy copies only the top-level of the array or object.
// If it contains other objects or arrays inside (nested), those inner references are still shared.

let original1 = [1, 2, [3, 4]];
let shallow = [...original1];
shallow[2][0] = 99;
console.log(original1);
console.log(shallow);
// The nested array changed in both!

// ----------------------- Deep Copy ------------------------------------
// A deep copy duplicates everything, including nested arrays or objects, so the new copy is completely separate.

let original2 = [1, 2, [3, 4]];
let deep = JSON.parse(JSON.stringify(original2));
deep[2][0] = 98;
console.log(original2);
console.log(deep);

/*
Note: JSON.stringify() doesn't work well with functions, undefined, or circular references.
For complex structures, libraries like lodash (_.cloneDeep) are safer.
*/