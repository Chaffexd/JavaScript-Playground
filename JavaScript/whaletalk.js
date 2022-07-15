//Example phrase to translate
let input = 'turpentine and turtles';

// Whale vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// results are stored in this array
let resultArray = [];

//place this inside the loop if you want to test
// console.log(input[i]) this checks the loop
// console.log('i is ' + i); this counts the characters in the loop
for (let i = 0; i < input.length; i++){
  if (input[i] === 'e'){
    resultArray.push(input[i]);
  }
  if (input[i] === 'u'){
    resultArray.push(input[i]);
  }

//place this inside the loop to test
// console.log('j is ' + j);}
//this logs the vowels and compars the string and array to match
  for (let j = 0; j < vowels.length; j++){
      if (input[i] === vowels[j]){
        // console.log(input[i]){
          resultArray.push(input[i])
        }
    }
};

// console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);

