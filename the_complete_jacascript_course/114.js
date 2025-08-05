// Nullish Coalescing Operator ??
// Instead of evaluating falsy values, it evaluates nullish values (null and undefined, not 0 or "")

restaurant = {};

restaurant.numGuests = 0;

// This will return the value of 10 since it is evaluating falsy values (0 being falsy)
const guest = restaurant.numGuests || 10;
console.log(guest);

// This will correctly return the value of 0 since it is not evaluating falsy values
const guest2 = restaurant.numGuests ?? 10;
console.log(guest2);