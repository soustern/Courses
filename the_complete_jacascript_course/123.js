"use strict";
// New operations to make sets useful

const italianFoods = new Set(['Pizza', 'Pasta', 'Risotto', 'Gnocchi', 'Polenta', 'Tomatoes', 'Garlic']);
const mexicanFoods = new Set(['Tacos', 'Quesadillas', 'Burritos', 'Sopes', 'Chiles Rellenos', 'Tomatoes', 'Garlic']);

// Intersection method
// The intersection method returns a new set that contains only the elements that are common to both sets
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);
console.log(new Set([...italianFoods].filter(el => mexicanFoods.has(el)))); // <= This is a terrible monster

// Convert set to array
console.log([...commonFoods]);

// Combine both sets using union method
// This ensures that there are no duplicates
// [..., ...] would produce duplicates
const italianMexican = italianFoods.union(mexicanFoods);
console.log([italianMexican]);

// Difference method
// The difference method returns a new set that contains only the elements that are unique to the first set
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

// Symmetric difference method
// The symmetric difference method returns a new set that contains only the elements that are unique to both sets
const uniqueFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueFoods);

// is subset of method
// Check inf one set contain another within it or not
console.log(italianFoods.isSubsetOf(mexicanFoods));
console.log(mexicanFoods.isSubsetOf(italianFoods));

// Check if one set does NOT contain any element also present in another set
console.log(italianFoods.isDisjointFrom(mexicanFoods));
