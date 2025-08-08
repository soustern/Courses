const airline = 'Tap Air Portugal';

// Fix capitalization in name
const passenger = `RAfaEl`;
const passengerLower = passenger.toLowerCase();
const passengerCorrect= passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = `hello@jonas.io`;
const loginEmail = `Hello@Jonas.Io \n`;

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(loginEmail, trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Check if emails are equal
console.log(email === normalizedEmail);

// Challenge function
// Check if passed emails are equal
const checkEmails = (email1, email2) => email1 === email2;

console.log(checkEmails(`a`, `a`));

// Replacing parts of strings
const priceGB = `288,97`
const priceUS = priceGB.replace(/8/g, (word) => word = `hello`);
console.log(priceGB, priceUS);

// booleans 
const plane = `A320neo`
console.log(plane.includes(`A320`)); // TRUE
console.log(plane.startsWith(`A`)); // TRUE
console.log(plane.endsWith(`nk`)); // false
