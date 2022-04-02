// Write your code below
const bobsFollowers = ["Joe", "Marta", "Sam", "Erin"];
const tinasFollowers = ["Sam", "Marta", "Elle"];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);

const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}
console.log(resultArray);
