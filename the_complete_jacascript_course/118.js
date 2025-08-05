// Enhanced object literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant = {
    name: "The Fancy Italian",
    location: "Via del Corso, Roma, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
        // We can create property names like this
        // the property name here is "thu"
        [weekdays[3]]: {
            open: 12,
            close: 22,
        },
        // The property name here is "day 5"
        [`day ${1 + 4}`]: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    // This is a way of defining a function declaration within and object
    // Without using the function keyword and :
    orderDelivery({time, address, mainIndex, starterIndex}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};

console.log(restaurant.openingHours);
