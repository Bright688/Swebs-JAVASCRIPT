//program to check vowels and consonant sounds
var prompt =require("prompt-sync")()
//get user input
let userInput = prompt("Enter a character: ")
//check if the character is a vowel or consonant
if (userInput == "a" || userInput == "e" || userInput == "i" || userInput == "o" || userInput == "u"){
  console.log(`${userInput} is a vowel`);
}
else{
  console.log(`${userInput} is a consonant`);
}
