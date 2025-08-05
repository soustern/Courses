// Optional Chaining

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const restaurant = {
    name: "The Fancy Italian",
    location: "Via del Corso, Roma, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        [weekdays[3]]: {
            open: 12,
            close: 22,
        },
        [`day ${1 + 4}`]: {
            open: 11,
            close: 23,
        },
        [weekdays[2]]: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    // Any function that does not explicitly return a value will return undefined
    // returning "console.log" in a function will return undefined since it does not give back a value
    // If you dont see the return keyword, the function will return undefined
    orderDelivery({time, address, mainIndex, starterIndex}) {
        return `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
    },
};

// If we did not use the optional chaining here, a reference error would be returned
// Since we are using ? on mon, undefined is returned instead of an error
console.log(restaurant.openingHours?.mon?.open);

for (const day of weekdays) {
    console.log(restaurant.openingHours[day]?.open ?? "closed");
};


// Using optional chaining on a method
// If the method being called exists, the parameters will be passed accordingly
console.log(restaurant.orderDelivery?.({time:1, address: "home", mainIndex:1, starterIndex:0}) ?? "Method does not exist");
console.log(restaurant.delivery?.({time:1, address: "home", mainIndex:1, starterIndex:0}) ?? "Method does not exist");


// Using optional chaining in arrays
const users = [{name: "Joao", email: "j@j.com"}, {name: "rafael", email: "m@m.com"}];
console.log(users[2]?.name ?? "User does not exist");
console.log(users[1]?.name ?? "User does not exist");