const flight = `LH234`;
const rafael = {
    name: `Rafael`,
    passport: 2001
}

const checkIn = function(flightNum, passenger) {
    flightNum = `LH999`;

    // Changing the original object
    // Since we only passed a memory address as argument
    passenger.name = `Mr. ${passenger.name}`;    
    if (passenger.passport === 2001) {
        console.log(`Checked in`);
    } else {
        console.log(`Wrong passport!`);
    }
};

checkIn(flight, rafael);
console.log(flight);
console.log(rafael);

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(rafael);
checkIn(flight, rafael);