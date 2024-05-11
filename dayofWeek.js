//program to check the day of the week
var prompt = require('prompt-sync')();
let userInput =prompt('Enter a number betwwen 1 and 7: ')
if (userInput == 1)console.log('Monday');
else if (userInput == 2)console.log('Tuesday');
else if (userInput == 3)console.log('Wednesday');
else if(userInput == 4)console.log('Thursday');
else if (userInput == 5)console.log('Friday');
else if (userInput == 6)console.log('saturday');
else if (userInput == 7)console.log('Sunday');
else console.log('Invalid input');