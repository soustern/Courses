/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. 
The values are the events themselves, and the keys are the minutes in which each event happened \
(a football game has 90 minutes plus some extra time).

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// gameEvents.values() creates an iterable object, which is an object meant to be looped once
// unpacking it into an array like: [...gameEvents.value()] is unnecessary here (it would be 
// less efficient and consume more memory)
// Because the Set constructor is Smart, meaning it can receive any iterable object and
// extract is unique values into a Set

// A set, by rule, MUST receive a iterable (an element that can be looped over) 
// as its value (arrays, strings, Map Iterator, etc)
// The same is true for for of loops, the spread syntax and etc.
// Remember, a string is a iterable, being a array of characters

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
// So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3. Print the following string to the console: 
// "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// 4. Loop over the events and log them to the console, marking whether it's in the
//  first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL
for (const [time, event] of gameEvents) {
    console.log(`${time < 45 ? `[First Half]` : `[Second Half`} ${time}: ${event}`);
};


// Method to easily transform a map in a array
console.log(Array.from(gameEvents));

const someObject = [1,2,3];
const iterator = someObject[Symbol.iterator]();
console.log(iterator);