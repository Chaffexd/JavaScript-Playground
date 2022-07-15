// an initialization starts the loop and can also be used to declare the iterator variable.
// a stopping condition is the condition that the iterator variable is evaluated against— 
//  if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
// an iteration statement is used to update the iterator variable on each loop.

// for starts the loop, the let variable starts the counter at 5, counter < 11 means it will count from 5 to under 11
// the counter ++ is the indicator to count up to 11, not including

for (let counter = 5; counter < 11; counter++){
    console.log(counter);
};
  
// this is reverse loop, you start at the highest desired number and count backwards
for (let counter = 3; counter >= 0; counter--){
console.log(counter);
};


const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// this loop will count from index 0 to the length of the array so [0,1,2] and that's it, the stopping condition 
// is less than the max length, the counter is positive ++ and will list them out
// the key here is retrieving the i in the let variable to list each one individually 
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
};

// Write your code below
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};


// while loop

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
};


// do while loops, a piece of code that will run on a specific condition

// this will add a cup of sugar as long as it is less than cupsOfSugarNeeded

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);

// using the break keyword
// this will filter through the look until it finds BIG and then stop abd break, and console.log the comment
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i])
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
};
console.log("And if you don't know, now you know.");



