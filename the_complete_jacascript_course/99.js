// variables
console.log(me); 
// console.log(job);
// console.log(year);

var me = "rafael";
let job = "unemployed";
const year = 2025;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

// 
var addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// Example
// This code will not run as expected
// because of the hoisting behavior of JavaScript.  
// The variable `numProducts` is used before it is declared,
// which will result in `undefined` being logged.
// Making it so the if statement checks as true (Since it wants to see if 
// ()`numProducts` is falsy or, in other words, zero).
// Receiving the value !undefined even though the numProducts variable
// Is later defined as having the value of 10
if(!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
    console.log("Shopping cart deleted");
}

var x = 1;
let y = 2;
const z = 3;

