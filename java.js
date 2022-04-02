console.log("karol");
const dayList = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
const numbers = [1, 9, 2];
const users = ["karol", "michal"];
const value = users.forEach((user) => {
  console.log(user);
});
const usersWithAge = users.map((user) => user.toUpperCase());
console.log({ usersWithAge: usersWithAge, users });
const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 7;
    case "wednesday":
      return 7;
    case "thursday":
      return 7;
    case "friday":
      return 7;
    case "saturday":
      return 7;
    case "sunday":
      return 7;
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");
const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log(".perfect");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("too much");
  } else {
    console.log("sleep more");
  }
};
calculateSleepDebt();
