let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const registeredLate = true;
const age = 99;
if (registeredEarly === false && age > 18) {
  raceNumber += 1000;
  console.log(raceNumber);
} else if (registeredEarly === true && age > 18) {
  console.log(
    `${raceNumber} You are registered late and will race at 11:00 am.`
  );
} else if (age <= 18) {
  console.log(`Your number is ${raceNumber} You will race at 12:30 pm.`);
}
const getUserChoice = (userInput) => {
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};
