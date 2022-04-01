// Write your fasterShip object literal below
let fasterShip = {
  "Fuel Type": "Turbo Fuel",
  color: "silver",
};

/* Accessing Properties by dot notation:
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

If we try to access a property that does not exist on that object, undefined will be returned.

spaceship.favoriteIcecream; // Returns undefined */

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

// Write your code below
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

console.log(crewCount);
console.log(planetArray);

/* this is how to access a key’s value is by using bracket notation, [ ]. */

let spaceeship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

// Write your code below

let isActive = spaceeship["Active Mission"];

console.log(spaceeship[propName]);

let spaceeeship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

//reassign the color property of the spaceship object to have a value of 'glorious gold'

spaceeeship.color = "glorious gold";

// Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.

spaceeeship.numEngines = 9;
console.log(spaceeeship.numEngines);

// Use the delete operator to remove the 'Secret Mission' property from the spaceship object.

delete spaceeeship["Secret Mission"];

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// create an alienShip object. It should contain a method .retreat() which will console.log() the retreatMessage.

const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  // Add another method to your object literal. This method, .takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

// console log :))))
alienShip.retreat();
alienShip.takeOff();

// NEW :)

let spaciship = {
  /*Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.*/
  passengers: [{ name: "Space Dog" }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};
/*Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)*/
let capFave = spaciship.crew.captain["favorite foods"][0];
/*Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!)*/
let firstPassenger = spaciship.passengers[0];

// new exerciseeeeeeee :)

let spaceshipp = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

// Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.

let greenEnergy = (object) => {
  object["Fuel Type"] = "avocado oil";
};

// Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.

let remotelyDisable = (objectt) => {
  objectt.disabled = true;
};

// Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.

greenEnergy(spaceshipp);
remotelyDisable(spaceshipp);
console.log(spaceshipp);

// exercise ;;;;;;

let spaceshipi = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

// Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.

for (let crewMember in spaceshipi.crew) {
  console.log(`${crewMember}: ${spaceshipi.crew[crewMember].name}`);
}

// Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.

for (let crewMember in spaceshipi.crew) {
  console.log(
    `${spaceshipi.crew[crewMember].name}: ${spaceshipi.crew[crewMember].degree}`
  );
}
