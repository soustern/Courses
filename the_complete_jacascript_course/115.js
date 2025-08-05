// Logical Assignment Operators

const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// rest2.numGuests === 10
// As usual, the value of 0 is treated as falsy here, making it so it is skipped
// rest2.numGuests = rest1.numGuests || 10;

// rest2.numGuests === 0
// this happens because of the nullish (null, undefined) coalescing operator
// That does not evaluates falsy values such as 0
// making it so 0 here is assigned instead of being skipped 
rest2.numGuests = rest1.numGuests ?? 10;
console.log(rest2);

// OR assignment operator
// Assigns a value to a variable if the current value is falsy
// The following line is the exact same as = rest1.numGuests = rest1.numGuests || 10
// rest1.numGuests ||= 10;
// console.log(rest1);

// Nullish Assignment Operator
// Here rest1.numGuests will be 0
rest1.numGuests ??= 10;
console.log(rest1);

// The and operator short circuits when the first value is falsy
// Not the case of the code bellow, making it so the second options is returned
// rest2.owner = rest2.owner && 'anonymous';
rest2.owner &&= 'anonymous';


// The and operator short circuits when the first value is falsy
// rest1.owner will be undefined instead of 'anonymous'
// rest1.owner = rest1.owner && 'anonymous';

// Doing it in this way will not even create the property owner, instead of initializing it as undefined
rest1.owner &&= 'anonymous';


console.log(rest2);
console.log(rest1);