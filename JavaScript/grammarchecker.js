//This is our story in a string
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a dazzling 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';
// this converts the story into an array then join at the end makes it readable
let storyWords = story.split(' ');

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
//this is a counter for the amount of words in the story
let count = 0;
storyWords.forEach((word) => {
  count++;
});
//this returns the story by removing the unecessary words
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});
// this corrects the badwords
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) return 'beautiful';
  else return word;
});
// this tells us the index position of the bad word
let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});
console.log(badWordIndex);
// this manually replaces the bad word to really
storyWords[78] = 'really';

console.log(count);  
// this checks if all the words are under 10 characters which isn't true
let lengthCheck = storyWords.every((word) => {
  return word.length < 10;
});
//this then returns what word is greater than 10 characters
storyWords.forEach((word) => {
  word.length > 10 && console.log(word);
});

console.log(lengthCheck);

console.log(storyWords.join(' '));
