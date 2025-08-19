/* 
Let's go back to Julia and Kate's study about dogs. This time, 
they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'),
 and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// This is not a good way of doing this, too much method chaining decreases readability
// and makes it difficulty to asses the state of the data
// It is much better to divide the code using well named variables 
// Then to force everything to be a one-liner 
// One use case for one liners is when you have to filter or shape(.map) your data
// Then you divide the operation that achieve its final form (.reduce)
const calcAverageHumanAge = (dogAges = []) => {
    // return Math.trunc(dogAges
    // .map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)
    // .filter(dogAge => dogAge >= 18)
    // .reduce((accumulator, dogAge, _, arr) => accumulator + dogAge / arr, 0));

    const humanAge = dogAges
        .map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)
        .filter(dogAge => dogAge >= 18);

    return Math.trunc(humanAge.reduce((acc, age) => acc + age, 0) / humanAge.length);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));