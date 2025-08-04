// Exercise 1:
// Destructure the following object and log the values of `name` and `age` to the console.
const person = { name: 'John Doe', age: 30 };
const { name: a, age: b } = person;
console.log(a, b);

// Exercise 2:
// Destructure the following object and log the values of `title` and `author` to the console.
const book = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };

let title, author;
({ title, author } = book);
console.log(title, author);

// Exercise 3:
// Destructure the following object and log the values of `city` and `country` to the console.
const address = { city: 'New York', country: 'USA' };

let city, country;
({city, country} = address);
console.log(city, country);

// Exercise 4:
// Destructure the following object and log the values of `x` and `y` to the console.
const coordinates = { x: 10, y: 20 };

const { x, y } = coordinates;
console.log(x, y);

// Exercise 5:
// Destructure the following array and log the values of `firstName` and `lastName` to the console.
const arr = ['John', 'Doe'];

const [firstName, lastName] = arr;
console.log(firstName, lastName);
