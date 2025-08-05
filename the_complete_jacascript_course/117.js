const restaurant = {
  starterMenu: [
    'Fried Calamari',
    'Bruschetta',
    'Garlic Bread',
    'Caprese Salad'
  ],
  mainMenu: [
    'Pizza',
    'Pasta',
    'Risotto',
    'Steak'
  ]
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Destructuring arrays inside the for loop
// This is amazing
// menu.entries is a method that returns an iterator
// which return a arrays o arrays containing the value of that position and the index (a number representing)
for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
}

const test = menu.entries();
console.log(test.next());