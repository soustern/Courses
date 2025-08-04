// Object Destructuring

'use strict'

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // We can also destructure the parameters of a function
    // This is useful when we want to pass an object with properties that match the function parameters
    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
        console.log("order received " + this.starterMenu[starterIndex] + " and " + this.mainMenu[mainIndex] + 
            " will be delivered to " + address + " at " + time);
    },
};

restaurant.orderDelivery({
    time: "22:30",
    address: "here",
    mainIndex: 2,
    starterIndex: 2,
})

// We can destructure and object simply by utilizing the name of its properties
const {name, mainMenu, categories} = restaurant;
console.log(name, mainMenu, categories);

// Specifying a different name
const {name: restaurantName, mainMenu: menuossa, categories: tags} = restaurant;
console.log(restaurantName, menuossa, tags);

// Specifying a default value as well as a different name to the properties
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters)

// Mutating variables

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

// An object literal is a way to create an object using curly braces {} with key-value pairs.
// For example: const person = { name: "Alice", age: 25 };
// In the code below, we use object destructuring to assign values from obj to variables a and b.
({a, b} = obj);
console.log(a,b);

