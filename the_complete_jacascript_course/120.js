// Looping objects
const restaurant = {
    name: "The Fancy Italian",
    location: "Via del Corso, Roma, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

// Property NAMES
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

console.log(`we are open on ${properties.length} days`);

for (const day of properties) {
    console.log(day);
};

// Property VALUES
const values = Object.values(restaurant.openingHours);
console.log(values);

// Property Entries
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

const text = document.querySelector('h1');
for (const [day, {open: opening, close: closing}] of entries) {
    console.log(`On ${day}, we open at ${opening} and close at ${closing}`);
    text.textContent = `On ${day}, we open at ${opening} and close at ${closing}`;
};

console.log(text);