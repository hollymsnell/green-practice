//node practice.js

// 1. Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

// var number = 10;
// if (number === 10) {
//   console.log(0);
// } else {
//   console.log(-1);
// }

//2. Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

// var number = 10;
// if (number < 10) {
//   console.log(-1);
// } else if (number > 10) {
//   console.log(1);
// } else {
//   console.log(0);
// }

// 3. Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

// var num1 = 3;
// var num2 = 5;
// if (num1 && num2 < 10) {
//   console.log(1);
// } else {
//   console.log(0);
// }

// 4. Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

// var number = 89;
// if (number > 9000) {
//   console.log(1);
// } else {
//   console.log(-1);
// }

// # 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

var first = "holly";
var last = "snell";
console.log(first + " " + last);

// # 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

var firstName = "Joe";
var lastName = "Satriani";
console.log(`${first} ${last}`);

// # 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

// var word = window.prompt("Enter a word:");
// if (word === "marco") {
//   console.log("polo");
// }

// # 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

var col1 = "yellow";
var col2 = "red";
var col3 = "blue";
console.log("Primary colors include " + col1 + ", " + col2 + ", and " + col3 + ".");

// # 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

var colo1 = "yellow";
var colo2 = "red";
var colo3 = "blue";
console.log(`Primary colors include ${col1}, ${col2}, and ${col3}.`);
