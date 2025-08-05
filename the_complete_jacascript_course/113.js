"use strict";

// Use ANY data type, return ANY data type, Short Circuiting
// Short circuiting works with any data type, it will return the first truthy value
// if the first value is truthy, it will return the first value
// if the first value is falsy, it will return the second value
console.log(3 || "Rafael");
console.log("" || "Rafael");
console.log(true || 0);

console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || true || null);

// Creating an empty object and using a ternary operation to see if it has a numGuests property
// If not, one is created with a value of 10
let restaurant = {};

// The following line would make it so all the guest variables received the value of 21
// REMEMBER, 0 is a falsy value, initializing the numGuests property to 0 would make it so
// the guest variables received the value of 10
// restaurant.numGuests = 21;

const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("--- and ---");

// Short circuiting with &&
// If the first value is falsy, it will return the first value
// if the first value is truthy, it will return the second value
console.log(0 && "Rafael");
console.log(7 && "Rafael");

// First falsy value returned
console.log("Hello" && 23 && null);

var drink;
const party = {
    drink,

    orderDrink: function ()  {
        const test = () => console.log("voce pediu um " + this.drink);
        test();
    },

    orderDrink1: function ()  {
        console.log("voce pediu um " + this.drink);
    },

    // It is important to point that this will access the global object window
    // if it is executed in the browser console, making it so this drink = window.drink
    // if this was executed in a JS Module, this.drink would be undefined.drink
    orderDrink2: () => console.log("voce pediu um " + this.drink),
};

drink = "leite";
party.drink = "agua";
party.orderDrink();
party.orderDrink1();
party.orderDrink2();

// party.orderDrink3 || console.log("n existe");
// if the party.orderDrink3 method does not exist, the code after the || will be executed
// if the party.orderDrink3 method does exist, the code after the || will not be executed
// same as if (typeof party.orderDrink3 !== "function") console.log("n existe");
party.orderDrink3 || console.log("n existe");

// party.orderDrink && console.log("existe");
// if the party.orderDrink method exists, the code after the && will be executed
// if the party.orderDrink method does not exist, the code after the && will not be executed
// same as if (typeof party.orderDrink === "function") console.log("existe");
party.orderDrink && console.log("existe");