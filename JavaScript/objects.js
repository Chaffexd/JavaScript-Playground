//Objects can be assigned to variables, we use {} to define aon object literal
//Note if a keyvalue has a space, use ' ' to type it
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  };

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
    };
  
// Write your code below - creating a variable to access crew numbers and flight path
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;

//bracket notation - access data using []
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  const isActive = spaceship['Active Mission'];
  console.log(isActive);


let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};
  
  // Write your code below - using dot notation to reassign the values and add values
  spaceship.color = 'glorious gold';
  spaceship.numEngines = 8;
  
  delete spaceship['Secret Mission'];
  console.log(spaceship);

//when the data is stored on an object is a function, we call that a method

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below - you can double up by using a comma to omit another function in the method
let alienShip = {
  retreat(){
    console.log(retreatMessage)
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();
alienShip.takeOff();


//accessing specific parts of data and using key values to update those values
let spaceship = {
    passengers: [{name: 'Space Dog'}],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0];
  let firstPassenger = spaceship.passengers[0];
  
// pass by reference, This means when we pass a variable assigned to an object into a function as an argument, 
//the computer interprets the parameter name as pointing to the space in memory holding that object
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  };
  
  let remotelyDisable = obj => {
    obj.disabled = true;
  };
  
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

//Looping through objects

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below - this will loop through and log that information
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let crewMembers in spaceship.crew) {
  console.log(`${crewMembers.crew[crewMembers].name}: ${spaceship.degree[crewMembers]}`)
}

//using .this to access the right scope 

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){
      return(`I am ${this.model} and my current energy level is ${this.energyLevel}.`);
    }
  };
  console.log(robot.provideInfo());


//this is an example of using a string that returns the string + number and undefined 
const robot = {
    _energyLevel: 'high',
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
console.log(robot.recharge());

//using the typeof operator to check whether energyLevel is a number
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if (typeof this._energyLevel === 'number'){
        return 'My current energy level is ' + this._energyLevel
      } else {
        return 'System malfunction: cannot retrieve energy level'
      }
    }
  };
  
  console.log(robot.energyLevel)


//prior example is using a getter, this is using a setter
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    set numOfSensors(num){
      if (typeof num === 'number' && num >= 0){
        this._numOfSensors = num;
      } else {
        return 'Pass in a number that is greater than or equal to 0';
      }
    },
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
  };
robot.numOfSensors = 100;
console.log(robot.numOfSensors);


const robotFactory = (model, mobile) => {
    return{
      model: model,
      mobile: mobile,
      beep(){
        console.log('Beep Boop')
      }
    }
  };
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();

//using shorthand technique if the value is the same as the model: model, you can do model, only
function robotFactory(model, mobile){
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

// using destructuring method to access functionality of the robot
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
const {functionality} = robot;
console.log(functionality);
  

//using object.assign()
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);