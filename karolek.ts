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
