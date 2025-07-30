'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}.`;

        if (birthYear >= 1981 && birthYear <= 1996) {
            const firstName = 'Steven'; // This firstName is block scoped
            const str = `Oh, and you're a millennial, ${firstName}.`;
            
            // This is just reassigning the outer scope variable output value
            //output += ` ${str}`;

            // Try to guess what the following code does
            // Although output was defined as a let in the parent scope
            // We can create a new variable with the same name that
            // belongs to the scope of this if block
            const output = "New output"; 
           
            function add(a, b)
            {
                console.log(output);
                return a + b;
            }
            
            console.log(add(12, 3)); // This will log 15
        }
        console.log(output);
        // This will throw an error if add is not defined in the global scoped
        // Unless you are not using strict mode, in this case it will work
        // because functions will not be block scoped anymore
        // console.log(add(2, 3));   
    }
    printAge();
    return age;
}

const firstName = 'John';
calcAge(1990);