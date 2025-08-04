// Using the spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, ...arr];

console.log(badNewArr);

// This deconstructs the array and logs its separate values without creating variables for them
console.log(...badNewArr); 

// Function to multiply all arguments using the rest parameter syntax
// This allows the function to accept any number of arguments as an array
function add(...args) {
  // Reduce the array of arguments to a single number by multiplying each element with the accumulator
  // The initial value of the accumulator is 1
  return args.reduce((acc, curr) => acc * curr, 1);
}

console.log(add(1, 2, 3, 4, 5)); 

// Deconstructing a string (Which is a array of characters) into separate values
const str = "Hello";
const decStr = [...str];
console.log(decStr);

// Make it so the separate values are logged without creating variables for them
console.log(...decStr);
console.log(str + " ", ...decStr); // This will log the string followed by its characters separated by spaces

/*
 * The spread operator (...) allows us to expand an expression into multiple elements,
 * for example when calling a function, or when creating an array.
 * It can also be used to deconstruct an array into separate values without creating variables for them.
 *
 * The rest parameter syntax (...) is used to specify a parameter that can accept any number of arguments as an array.
 * It can be used to create functions that accept any number of arguments as an array.
 *
 * The reduce() method reduces the elements of an array to a single element,
 * for example to multiply all elements of an array.
 *
 * The add() function demonstrates how to use the rest parameter syntax to create a function that accepts any number of arguments as an array,
 * and how to use the reduce() method to reduce the elements of the array to a single element.
 */
