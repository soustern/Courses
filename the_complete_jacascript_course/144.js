// Closures

// We do not create closures, it happens automatically in certain situations
const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
};

const booker = secureBooking();

booker();
booker();
booker();   

console.dir(booker);