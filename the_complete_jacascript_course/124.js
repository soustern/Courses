// MAPS

// Creating a new map
const rest = new Map();

// .set method does not only add elements to the map, it also returns the map
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

// Chaining set method
rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
.set("open", 11)
.set("close", 23)
.set(true, "We are open :D")
.set(false, "We are closed :(");

// Getting the values from the map using get method and the key itself as an argument
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
rest.get(time > rest.get(`open`) && time < rest.get(`close`));

// The expression bellow returns true, making it son we are iterating over the map using the `true` key
// rest.get(true) = We are open :D
console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

// Has method
// Returns a boolean
console.log(rest.has("categories"));

// Deleting an element
rest.delete(2);
console.log(rest);

// Size property
console.log(rest.size);

// Purge all elements from the map
rest.clear();
console.log(rest);

// This is wrong
console.log(rest.set([1, 2], "Test"));

// Correct way
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));

// Using DOM elements
// This is matching exactly the DOM element as a MAP key
rest.set(document.querySelector("h1"), `heading`);

// This does not Match the exact DOM element as a Set position
console.log(new Set(document.querySelectorAll("h1")));