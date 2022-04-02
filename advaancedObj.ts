const robot = {
  model: "B-4MI",
  mobile: true,
  greeting() {
    console.log(`I'm model ${this.model}, how may I be of service?`);
  },
};

const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greeting() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    },
  };
};

const shinyNewRobot = massProdRobot("TrayHax", true);

const chargingStation = {
  _name: "Electrons-R-Us",
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ["Low N Slow", "Middle of the Road", "In and Output"],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === "number") {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`);
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  },
};

//lesson 2

/*Let’s create a new object to practice using this.

In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100. */
const robotI = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    /* Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation:

I am MODEL and my current energy level is ENERGYLEVEL.  
Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. Remember, to get the access to the calling object’s properties inside a method, you have to use the this keyword!*/
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
  },
};
/* Now to check .provideInfo() has access to the internal properties of robot. Log the result of calling .provideInfo() method on robot to the console.*/
console.log(robotI.provideInfo());

// lesson 3

const robotII = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robotII.checkEnergy();

// lesson 4

const robotIII = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return "My current energy level is " + this._energyLevel;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

console.log(robotIII.energyLevel);

// lesson 5

const robotIIII = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};
robotIIII.numOfSensors = 100;
console.log(robotIIII.numOfSensors);

// lesson 5

const robotFactory = (model, mobile, beepSound) => {
  return {
    model: model,
    mobile: mobile,
    beepSound: beepSound,
    beep() {
      console.log(this.beepSound);
    },
  };
};

const tinCan = robotFactory("P-500", true, "lllllaaaaa");

tinCan.beep();

//  lesson 6
function robotFactoryI(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactoryI("P-501", false);
console.log(newRobot.model);
console.log(newRobot.mobile);

// lesson 7

const robot0 = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    },
  },
};
/* DUse destructured assignment to create a const variable named functionality that extracts the functionality property of robot.
  
  If you need a reminder on how to use destructured assignment, review the example in the narrative or check the hint.*/
const { functionality } = robot0;

/* Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality.
  
  Take advantage of this shortcut and call the .beep() method on functionality.*/
functionality.beep();

// lesson 8

const robotS = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRoboti = Object.assign(
  { laserBlaster: true, voiceRecognition: true },
  robot
);

console.log(newRoboti);
