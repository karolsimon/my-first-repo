let userName = "Karol";
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");
const userQuestion = "How old are you?";
console.log(`${userQuestion} ${userName}.`);

let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const registeredLate = true;
const age = 18;
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
