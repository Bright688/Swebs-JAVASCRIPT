//program to display the month according to the number input
var prompt = require('prompt-sync')();
//get user input
let userInput =prompt('Enter number between 1 and 12: ');
//check the month that falls between 1 and 12
if (userInput == 1)console.log('January');
else if (userInput == 2)console.log('February');
else if (userInput == 3)console.log('March');
else if(userInput == 4)console.log('April');
else if (userInput == 5)console.log('May');
else if (userInput == 6)console.log('June');
else if (userInput == 7)console.log('July');
else if (userInput ==
8)console.log('August');
  else if (userInput == 9)console.log('September');
  else if (userInput == 10)console.log('October');
  else if (userInput == 11)console.log('November');
  else if (userInput == 12)console.log('December');
else console.log('Invalid input');