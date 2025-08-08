// Working with strings pt1

const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);

const iterator = airline[Symbol.iterator]();
console.log(airline[Symbol.iterator]());
console.log(airline.toUpperCase);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

// This returns -1 if word is not found
console.log(airline.indexOf('Portugal'));

// The index passed as an argument to the slice function is the position where the slice will start
// It returns a sub string and does not change the original string
// Since they are primitives and not mutable
console.log(airline.slice(4));

// We can also specify and end parameter
// Where the slice will start and where it will end
console.log(airline.slice(4, 7));

// Extract the first word
console.log(airline.slice(0, airline.indexOf(' ')));

// Extract the last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Define a negative begin argument
// It will start from the end
// Right to left
console.log(airline.slice(-2));

// This will cut off the last character
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const seatLetter = seat.slice(-1, ).toUpperCase();
    (seatLetter ===  `B` || seatLetter === `E` ) ? console.log(`middle seat`) : console.log(`Lucky`);

};

checkMiddleSeat(`11`);

