const greet = function(greeting) {
    return function(name) {
        console.log(greeting, name);
    };
};

const greeterHey = greet('Hey');
greeterHey('rafael');

greet('Hello')('hey');

const greet2 = greeting => name => console.log(greeting, name);

greet(`Arrow`)(`Function`);