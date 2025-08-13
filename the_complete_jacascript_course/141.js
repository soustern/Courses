const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
};

const book = function(flightNum, passengerName) {
    const booking = {
        flight: this.airline + flightNum,
        passengerName,
    };
    this.bookings.push(booking);
    console.log(`${passengerName} booked a seat on ${this.airline} flight ${flightNum}`);
};

// bind method
// As the name suggests, this bind method returns a new function
// that is bound to a specific object
// associating its this keyword to it
// We can say the object the this keyword points to is set in stone
const bookEW = book.bind(eurowings);
bookEW(23, 'Rafael Antoniassi');
console.log(eurowings);

const bookLH = book.bind(lufthansa);
bookLH(23, 'Rafael Antoniassi');
console.log(lufthansa);

// We can also use the bind function to set in stone the function arguments
// On the example bellow, we have set in stone the flightNum argument to 23
// Meaning the actual call on has to pass one argument, the passengerName
// This pattern of specifying an argument is common and called partial application
// That means a part of the original function is already applied
const bookEW23 = book.bind(eurowings, 43);
bookEW23('Rafael Antoniassi');
console.log(eurowings); 

//With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);  
}

// Remember that the this keyword points to the element on which the event listener is attached
// In this case, the button being select with the id buy
// For the this keyword to point to the object the method exists within, we must use the bind method
// That creates and returns a new function that i permanently bound to the object 
// (or arguments (see partial application)) passed as an argument
// Call must not be used here because it would call the function immediately
// Here we only has to pass one to act as a callback. being called when the event is fired
document.querySelector(`#buy`).addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// Partial application example and another big use case for the bind method
// Partial application means we can preset parameters of a function
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

// This is not binding an object, only the `rate` argument (presetting it)
// null is being passed where the object would be (the this keyword)
// the same as: addvat = value => value + value * 0.23
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); // 123

const challenge1 = (rate) => (tax = rate ?? 1 ,value) => value + (tax === 1 ? 0 : value) * tax;

// To skip an argument assignment so it can use its default value
// We can passa undefined as an argument
console.log(challenge1(0.2)(undefined, 100));