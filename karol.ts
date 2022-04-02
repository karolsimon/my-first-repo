const karol = "1,2,3,4,5";
const michal = karol.split(",");

const cezar = michal.map((element) => {
  return Number(element);
});
console.log(cezar);
