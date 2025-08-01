"use strict"
const rafael = {
    firstName: 'Rafael',
    year: 2001,
    calcAge: function() {
        console.log(2023 - this.year);

        // Solution 1
        const self = this; // 'self' is used to capture 'this' in the surrounding scope
        const isMillenial = function() {
         console.log(self);
         console.log(self.year >= 1981 && self.year <= 1996); // 'this' is the global object or undefined in strict mode
        }

        // Solution 2
        const isNotMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996); // 'this' is inherited from the surrounding scope, which is rafael
        }
        
        // As the rules go, any conventional function call must always have its this keyword
        // referencing the global object or undefined in strict mode. It does not matter where it is 
        // located within the object.
        // Unless we do something about as seem with the creation of the self variable
        isMillenial(); // 'this' is not the rafael object, but the global object or undefined in strict mode
        isNotMillenial(); // 'this' is the rafael object
        this.calcAge.isMillenial();
    }
}

rafael.calcAge(); // Outputs: 22, 'this' in isMillenial is not rafael
