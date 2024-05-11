//program to check century
var prompt = require('prompt-sync')();
//get user input
let userInput = prompt('Enter a year: ');
if (userInput%100 ==0) console.log(`${userInput} is a century`)
else console.log(`${userInput} is not a century`);