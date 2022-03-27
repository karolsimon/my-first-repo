const kelvin = 300;
//the forecast today is 293 klevin
const celsius = kelvin - 273;
//celsius = kelvin - 273 degrees
let fahrenheit = celsius * (9 / 5) + 32;
//fahrenheits = celsius*(9/5)+32
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
