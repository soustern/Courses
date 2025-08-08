// This returns an array based on the argument passed
console.log(`a+very+long+word`.split(`+`));

const [firstName, lastName] = `John Smith`.split(` `);

// This will log 'Smith John'
// the join method will join the elements of the array into a string
// based on the argument passed
const newName = [lastName, firstName].join(` `);
const anotherName = [`Mr.`, firstName, lastName].join(` `);
console.log(newName, anotherName);

// Capitalizing a name within a string
const capitalizeName = function (name) {
    const names = name.split(` `);
    const namesUpper = [];

    for (const word of names) {
        namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
    }

    console.log(namesUpper.join(` `));
};

capitalizeName(`jessica ann smith davis`);
capitalizeName(`rafael antoniassi`);

// Padding a string
// Adding characters to a string until it has a certain length
const message = `go to gate 23`;
console.log(message.padStart(25, `+`));
console.log(`Rafael`.padStart(100, `UTIL`).padEnd(300, `ola`));

function maskCreditCard(number) {
    // Convert a number to a string
    number += ``;
    const lastFourDigits = number.slice(-4);
    return lastFourDigits.padStart(number.length, `*`);
}

console.log(maskCreditCard(999999999999999));

// Repeat 
const message2 = `bad weather departures delayed`;
console.log(message2.repeat(5));