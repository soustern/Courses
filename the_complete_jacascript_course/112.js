// SPREAD operator because on right side of =
const arr = [7, 8, 9, ...[10, 11, 12]];

// REST because on left side of =
const [a, b, ...rest] = [7, 8, 9, 10, 11, 12];

console.log(arr);
console.log(a, b, rest);    