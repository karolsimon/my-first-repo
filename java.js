console.log("karol");
const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 7;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 7;
      break;
    case "saturday":
      return 7;
      break;
    case "sunday":
      return 7;
      break;
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
