// Immediately invoked function expression

const runOnce = function () {
    console.log(`This will never run again`);
};
runOnce();

// This function has no name, must be wrapped in parenthesis
// to not throw an error and will be executed only once
// This was invented as a way to protect/encapsulate a variables
// that are defined inside the IIFE
// Since they only exist inside the IIFE and will cease existing once the function is executed
(function() {
    console.log(`This will never run again`);
    const isPrivate = 23;
})();

// A IIFE but in an arrow function
(() => {
    console.log(`This will never run again`);
})();


// In the bellow code we can see scoping in action
// Since const and let variables create their own scope/
// Wrapping them in {} makes it so they are not accessible outside of the block
// But variables declared with var do not have their own scope, they are global
// Making it so they are accessible outside of the block
{
    const isPrivate = 23;
    var notPrivate = 46;
}