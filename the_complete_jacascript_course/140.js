const lufthansa = {
    airline: `Lufthansa`,
    iataCode: `LH`,
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, `rafael antoniassi`);
lufthansa.book(635, `jane doe`);
console.log(lufthansa);

const eurowings = {
    airline: `Eurowings`,
    iataCode: `EW`,
    bookings: [],
};

// Does not work because the this keyword points to undefined here
// the this keyword assignment depends on how the function is called
// on a regular function call like the one bellow, it is undefined
const book = lufthansa.book;

// Call a method of a function (which, by being a first class citizen, is also an object)
// This call method actually changes the this keyword
// By virtue of its first argument being the object on which the this keyword
// will point to
book.call(eurowings, 23, `rafael antoniassi`);
console.log(eurowings);

book.call(lufthansa, 239, `jane doe`);
console.log(lufthansa);

const swiss = {
    airline: `Swiss Air Lines`,
    iataCode: `LX`,
    bookings: [],
};

book.call(swiss, 583, `rafael antoniassi`);
console.log(swiss);

// Apply Method
// This method only exists for historical reasons
// It was implemented in the early days of JavaScript
// Before the spread operator was a thing
// It is useful to know for legacy code debugging
const flightData = [583, `George Cooper`];
book.apply(swiss, flightData);
console.log(swiss);