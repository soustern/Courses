let f;

// This is a closure being formed without returning a function
const g = function () {
    let a = 23;
    f = function () {
        a *= 2;
        console.log(a);
    };
};

g();
f();
f();
f();
console.dir(f);

// Another closure example
// The console.logs within setTimeout are still able to access the relevant variables
// even after the mother function is taken out of the call stack
const boardingPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(() => {
        console.log(`boarding ${n} passengers`);
        console.log(`divided in 3 groups of ${perGroup} passengers each`)
    }, wait * 1000);

    console.log(`passengers will come aboard in ${wait} seconds`);
}

// Closures have priority over the global scope in the scope chain
// The value of pergroup to be used in the function will still be that of the context
// being pointed to by the closure, not this new one being initialized in the global scope
const perGroup = 1000;

boardingPassengers(255, 6);