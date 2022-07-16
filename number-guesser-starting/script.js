let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
// Will provide a random whole number between 1 and 9
console.log(generateTarget())

// This will compare the guesses between the computer and human
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);

  return humanDifference <= computerDifference;
}
console.log(compareGuesses())

// This will update the score
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

// Will advance the round count
const advanceRound = () => {
  currentRoundNumber++;
}