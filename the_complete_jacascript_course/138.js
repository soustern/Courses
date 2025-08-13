const oneWord = function(str) {
    return str.replace(/ /g, ``).toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(` `);
    return [first.toUpperCase(), ...others].join(` `);
};

const transformer = function(str, fn) {
    console.log(fn(str));

    // To get the name of the function
    // console.log(fn.name);
    // A function Method!
    console.log(`transformed by: ${fn.name} `);
};

transformer(`js is the best`, oneWord);

[`js`, `is`, `the`, `best`].forEach((str, index, array) => console.log(`${str} + ${index} + ${array} + Hello`));