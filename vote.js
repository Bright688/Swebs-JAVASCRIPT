//program to check the eligibility of voting
var prompt =require("prompt-sync")()
age = prompt("Enter your age: ");
if (age >=18) console.log("you are not eligible to vote");
else console.log("you are eligible to vote");
