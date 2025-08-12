
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, 
    price = 199 * numPassengers) {

    
    const booking = {
        flightNum, 
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
};

createBooking(`rafael`, 2);
createBooking(`rafael`, undefined, 3);

