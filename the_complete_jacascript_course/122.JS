// Sets

// A set gets hid of all duplicates, its elements are all unique
// So only the first three elements here will stay within the set
const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);
console.log(ordersSet);

const test = new Set(`pibo`);
console.log(test);
console.log(test.size);

// Check if an element is in the set
console.log(ordersSet.has(`Pizza`));
console.log(ordersSet.has(`Lasagna`));

// Add an element to the set and delete an element from the set
ordersSet.add(`Garlic Bread`);
ordersSet.delete(`Risotto`);
console.log(ordersSet);

// Empty the set
// ordersSet.clear();
console.log(ordersSet);

// Looping over a set
for (const order of ordersSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// Using a set to remove duplicates from an array
const staffUnique = [...new Set(staff)] // Convert the set to an array;
console.log(staffUnique);

// Count the number of unique elements in an array
console.log(new Set(staffUnique).size);

// Count amount of UNIQUE letters in a string
console.log(new Set(`normal string`).size);

// Count amount of all letters in a string
const string = `normal string`;
const array = [...string];
console.log(array.length);
