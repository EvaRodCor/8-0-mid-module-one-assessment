/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */
function getTotalCount(animals) {
// It will add the count key of each animal in the array
//Input: An array of animal objects
//Output: it returns the total of all animal counts
let totalAnimals = [];
let totalCount = 0;
for (const i of animals) {
// Accumulate
if (i.count) {
  totalCount = totalCount + i.count
 }
}
return totalCount;
// it returns a number with the total 
}
console.log(getTotalCount(animals)); //> 28

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
function getAllKinds(animals) {
  // Returns the kind for each object
  //Input: it has one parameter and is an array of object 
  //Output: all the kinds of animals in a array
let animalKind = [];
for (const i of animals) {
  if (i.kind) {
    animalKind.push(i.kind)
  }
}
return animalKind
  //return an array with all the kinds of animals
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
function filterByCountMinimum(animals, minimum) {
  if (animals.length === 0) {
    return [];
}
let minimumCount = animals[0];
for (i = 0; i < animals.length; i ++) {
    const animal = animals[i];
if (animal.count < minimumCount.count) {
    minimumCount = animal;
    }
  }
  return minimumCount;
}
// console.log(filterByCountMinimum(animals, 5)); //> [
  //   { kind: "Pig", count: 5 },
  //   { kind: "Cow", count: 7 },
  //   { kind: "Chicken", count: 11 },
  // ];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
function getMostCommonAnimal(animals) {
  if (animals.length === 0) {
    return null;
}
let highestCount = animals[0];
for (i = 0; i < animals.length; i ++) {
    const animal = animals[i];
if (animal.count > highestCount.count) {
    highestCount = animal;
    }
  }
  return highestCount;
}
// console.log(getMostCommonAnimal(animals)); //> { kind: "Chicken", count: 11 }


// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
