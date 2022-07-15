// Example of variable and let in JS

var Example = 'This is an example variable';
console.log(Example)


let changeMe = true;
changeMe = false;

console.log(changeMe);

const entree = 'Enchiladas';
entree = 'Tacos'
console.log(entree);



let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below: 

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//Increment and Decrement symbol

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar ++;
console.log(gainedDollar);
lostDollar --;
console.log(lostDollar);

//String concatenation

var favoriteAnimal = 'dog';

console.log('My favorite animal: ' + favoriteAnimal);

//Interpolation, here we are using `${}` to access the data in the variable and insert it without concatenation 

var myName = 'Shane';
var myCity = 'Taichung';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);


// Weather program

// This is the forecast today
const kelvin = 0;
// This is kelvin converted to celsius
const celsius = kelvin - 273;
// Celcius to fahrenheit
let fahrenheit = Math.floor(celsius * (9/5) + 32);
// Round the number down/up


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


// Dog age program

// This is my age
const myAge = 25;
// These are early years?
let earlyYears = 2;
earlyYears *= 10.5;
// this is myAge - 2
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

var myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

const myName = 'Shane Chaffe'.toLowerCase();
// This is using all the current info using interloping
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

// If statements in JS have a statement so if something () then curly brackets {}
let sale = true;
sale = false;
if (sale) {
  console.log('Time to buy!')
}
else {
    console.log('Time to wait for a sale.')
  }

// Using comparison operators
let hungerLevel = 9;

if (hungerLevel > 7){
  console.log('Time to eat!')
}
else {
  console.log('We can eat later!')
}

// Logical operators && for checking if 2 statements are true || which is OR and the NOT operator !

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep')
}
else {
  console.log('not bed time yet')
}

// Truthy and falsy

let wordCount = 2;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


let tool = 'marker';
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary Operator - allows us to remove the if statement, will execute the first statement as true and second as false
let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// Else if statements come before else

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} 
else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.')
}
else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!')
}
else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
}
else {
  console.log('Invalid season.');
}

// Using the switch case
let athleteFinalPosition = 'third place';

switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

//Magic 8 Ball using JS
const userName = 'Shane';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello there!');

const userQuestion = 'Is this a question?';
console.log(`${userName} has asked - ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(eightBall)

// Race day project
let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

let early = false;
let age = 18;

if (early && age > 18){
  raceNumber += 1000
}
console.log(raceNumber);

if (early && age > 18){
  console.log(`Adults who registered early, your race will commence at 9:30am. Your race number is: ${raceNumber}`)
}
else if (!early && age > 18){
  console.log(`Adults who registered late, your race will commence at 11:00am. Your race number is: ${raceNumber}`)
}
else if (age < 18){
  console.log(`Contestants under the age of 18, your race will commence at 12:30pm. Your race number is: ${raceNumber}`)
}
else {
  console.log('Please see the registration desk.')
}


// Example function

function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.')
  }
  
  sayThanks();
  sayThanks();
  sayThanks();

// Using a parameter in the function

function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  sayThanks('Cole')

// You can add a default value to parameters 

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  
  makeShoppingList();

// Using the return function

function monitorCount(rows, columns){
    return rows * columns
  }
  const numOfMonitors = monitorCount(5, 4);
  console.log(numOfMonitors);

  function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows, columns){
    return monitorCount (rows, columns) * 200
  }
  const totalCost = costOfMonitors(5, 4);
  
  console.log(totalCost);

// Using return with True/False - function expressions

const plantNeedsWater = function(day){
    if (day === 'Wednesday') 
    return true
    else{
      return false;
    }
  }
  plantNeedsWater('Tuesday');
  console.log(plantNeedsWater('Tuesday'));

// Using the fat arrow () => operator, this removes the need to use a function expression, shorter way to exlucde expression 

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  console.log(plantNeedsWater('Wednesday'))

// Refactoring the above example to a single line

const plantNeedsWater = day => day === 'Wednesday' ? true : false;
