
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