// Maps: Iteration

const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const question = new Map([
    [`question`, `What is the best programming language`],
    [1, `c`],
    [2, `java`],
    [3, `js`],
    [`correct`, 3],
    [true, `Correct`],
    [false, `try again`],
]);

console.log(question);

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
console.log(hoursMap.get(`thu`));

// QUIZ App ---------------------------------
console.log(question.get(`question`));

// Iteration over maps
for (const [key, value] of question) {
    if(typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}

// We need to convert the answer from a string to a number
const answer = Number(prompt(`Your answer`));

// Printing the correct string
console.log(question.get(question.get(`correct`) === answer));
 
// ------------------------------------------

// Convert Map to Array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
