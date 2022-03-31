const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

const things = ["desk", "chair", 5, "backpack", 3.14, 100];

const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});

console.log(onlyNumbers);

const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below

fruits.forEach((fruits) => console.log("I want to eat a " + fruits));

// new exercise

const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below - how to get the first letter of a string in an array and create the new one with .map()
const secretMessage = animals.map((animals) => animals[0]);

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below - how to devide numbers within an array and create the new one with .map()
const smallNumbers = bigNumbers.map((num) => num / 100);
console.log(smallNumbers);

/* new exercise
new exercise */

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below with a val<250 and create a new array
const smallaNumbers = randomNumbers.filter((randomNumbers) => {
  return randomNumbers < 250;
});

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

// Call .filter() on favoriteWords below that are longer than 7 characters and create a new array

const longFavoriteWords = favoriteWords.filter((favoriteWords) => {
  return favoriteWords.length > 7;
});
console.log(smallaNumbers);

const animalss = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

/*Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.*/

const foundAnimal = animalss.findIndex((animalss) => {
  return animalss === "elephant";
});
console.log(foundAnimal);

/*Let’s see if we can find the index of the first animal that starts with the letter 's'.

Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.*/

const startsWithS = animalss.findIndex((animalss) => {
  return animalss[0] === "s";
});
console.log(startsWithS);

/* new exercise
  new exercise */

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  /* While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator.
  
  Add a second argument of 10 to .reduce(). */
  return accumulator + currentValue;
}, 10);
console.log(newSum);

// new EXERCISE

const wordsss = ["unique", "uncanny", "pique", "oxymoron", "guise"];

console.log(
  wordsss.some((wordo) => {
    return wordo.length < 6;
  })
);

// Use filter to create a new array
const interestingWords = wordsss.filter((words) => {
  return words.length > 5;
});

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);

// new exercissssssssssssssssse :)

const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value (some for some, every for every item inside the array :))
nums.some((num) => num < 0);
console.log(nums.some((num) => num < 0));
// as the sallerNums contains SOME of the negative numbers there will be a TRUE forn the method 'some' but FALSE for the method 'every' :)
nums.some((smallerNums) => smallerNums < 0);
console.log(smallerNums.some((smallerNums) => smallerNums < 0));
