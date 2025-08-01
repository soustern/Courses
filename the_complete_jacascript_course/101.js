/**
 * Demonstrates the behavior of the `this` keyword in various JavaScript contexts, with a focus on strict mode and arrow functions.
 *
 * ---
 *
 * **Key Concepts:**
 *
 * 1. **Method Context:** When a function is called as a method of an object, `this` refers to that object.
 * 2. **Function Context (Strict Mode):** In strict mode, `this` inside a regular function (not a method) is `undefined`.
 * 3. **Event Handler Context:** In event handlers, `this` refers to the DOM element receiving the event.
 * 4. **Arrow Function Context:** Arrow functions do NOT have their own `this`; instead, they inherit `this` from their lexical (surrounding) scope.
 *
 * ---
 *
 * **Special Focus: Global Variable Access and Arrow Functions in Strict Mode**
 *
 * - When using an arrow function as a method (e.g., `calcAge` in the `test` object), `this` does not refer to the object itself, but to the value of `this` in the surrounding (lexical) scope.
 * - In strict mode, inside a regular function, `this` is `undefined`, so accessing properties like `this.year` would result in an error or `undefined`.
 * - However, for arrow functions, `this` is not bound to the function itself, but is inherited from the parent scope. At the top level of a script, the parent scope is the global object (`window` in browsers), even in strict mode.
 * - Therefore, when an arrow function tries to access `this.year`, it looks up `year` on the global object, which is accessible if declared globally (e.g., `var year = 1;`).
 * - **Why does strict mode let us access the global variable when using `this` in an arrow function and not otherwise?**
 *   - In strict mode, regular functions have `this` as `undefined`, so `this.year` is not accessible.
 *   - Arrow functions, however, inherit `this` from their lexical scope. If the lexical scope is the global scope, `this` refers to the global object, even in strict mode, allowing access to global variables via `this`.
 *   - This is a subtle but important distinction: arrow functions do not have their own `this`, so they do not get the `undefined` value that strict mode assigns to regular functions.
 *
 * ---
 *
 * @example
 * // Global variable declared with var
 * var year = 1;
 *
 * // Arrow function as object method
 * const test = {
 *   year: 1990,
 *   calcAge: () => {
 *     // In strict mode, 'this' is inherited from the global scope, so it's the global object (window)
 *     // This allows access to global variables like 'year' via 'this.year'
 *     // In contrast, a regular function in strict mode would have 'this' as undefined, so 'this.year' would be undefined
 *     console.log(this); // global object (window)
 *     console.log(2023 - this.year); // 2023 - window.year (1) = 2022
 *   }
 * }
 *
 * test.calcAge(); // Outputs: global object, 2022
 *
 * // This demonstrates that arrow functions should not be used as methods when you need `this` to refer to the object.
 */

"use strict";
// The 'this' keyword in JavaScript refers to the object that is executing the current function.

// Example 1: In a method, 'this' refers to the object
const person = {
    name: 'Alice',
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

person.greet(); // 'this' refers to 'person', outputs: Hello, my name is Alice

// Example 2: In a regular function (not a method), 'this' refers to the global object (window in browsers)
function showThis() {
    console.log(this);
}

showThis(); // In strict mode: undefined, otherwise: global object

// Example 3: Using 'this' inside an event handler
const button = document.createElement('button');
button.textContent = 'Click me';
button.onclick = function() {
    this.textContent = 1; // 'this' refers to the button element
};
document.body.appendChild(button);

// Example 4: Arrow functions do NOT have their own 'this'
const obj = {
    value: 42,
    show: function() {
        const arrow = () => {
            console.log(this.value); // 'this' is inherited from 'show' method, so it's 'obj'
        };
        arrow();
    }
};

obj.show(); // Outputs: 42

// Summary:
// - In a method, 'this' is the object before the dot.
// - In a function, 'this' is the global object (or undefined in strict mode).
// - In an event handler, 'this' is the element receiving the event.
// - Arrow functions inherit 'this' from their surrounding scope.

console.log(this); // In a module, 'this' is an empty object in strict mode, or the global object otherwise.

const calcAge = function(birthYear) {
    console.log(2023 - birthYear);
    console.log(this); // 'this' is undefined in strict mode, or the global object otherwise
}

const calcAgeArrow = (birthYear) => {
    console.log(2023 - birthYear);
    console.log(this); // 'this' is inherited from the surrounding scope, which is the global object in this case
}

calcAge(1990); // Outputs: 33, 'this' is undefined in strict mode
calcAgeArrow(1990); // Outputs: 33, 'this' is the global

let f = calcAgeArrow;
f(1990); // Outputs: 33, 'this' is still the global object

const a = calcAge;
a(1990); // Outputs: 33, 'this' is undefined in strict mode

var year = 1;

const test = {
    year: 1990,
    calcAge: () => {
        console.log(this); 
        console.log(2023 - this.year);
    }
}

f = test.calcAge;
f(); 

