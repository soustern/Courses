 const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
 }

 const marriedJessica = jessica;
 marriedJessica.lastName = 'Davis'; // This will change the lastName property of jessica as well

 console.log(jessica.lastName); // Outputs: 'Davis'
 console.log(marriedJessica.lastName); // Outputs: 'Davis'

 const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
 }

 const jessicaCopy = { ...jessica2 }; // This creates a shallow copy of jessica2
 jessicaCopy.lastName = 'Davis'; // This will not change the lastName property of jessica2

 console.log(jessica2.lastName); // Outputs: 'Williams'
 console.log(jessicaCopy.lastName); // Outputs: 'Davis'
 
 jessicaCopy.family.push('Mary'); // This will change the family array in both objects because it's a shallow copy

 console.log(jessicaCopy.family); // Outputs: ['Alice', 'Bob', 'Mary
 console.log(jessica2.family); // Outputs: ['Alice', 'Bob', 'Mary']
 
 // Deep copy example
 const JessicaClone = structuredClone(jessica2); // This creates a deep copy of jessica2
 JessicaClone.family.push('John'); // This will not change the family array in jessica2
 console.log(jessica2.family); // Outputs: ['Alice', 'Bob', 'Mary']
 console.log(JessicaClone.family); // Outputs: ['Alice', 'Bob', 'Mary', 'John']