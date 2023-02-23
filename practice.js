//node practice.js ***

// # 1. Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

var number = 34;
if (number === 10) {
  console.log(0);
} else {
  console.log(-1);
}

// # 2. Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

var grade = 56;
if (grade < 10) {
  console.log(-1);
} else if (grade > 10) {
  console.log(1);
} else {
  console.log(0);
}

// # 3. Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

var num1 = 5;
var num2 = 23;
if (num1 && num2 < 10) {
  console.log(1);
} else {
  console.log(0);
}

// # 4. Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

var lucky = 9;
if (lucky > 9000) {
  console.log(1);
} else {
  console.log(-1);
}

// # 5. Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

var nums = 69;
if (nums < 10) {
  console.log(9);
} else if (nums < 20) {
  console.log(19);
} else if (nums < 30) {
  console.log(29);
} else {
  console.log(-1);
}

// # 6. Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

var number1 = 6;
var number2 = 19;
if (number1 || number2 > 10) {
  console.log(100);
} else {
  console.log(-100);
}

// # 7. Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

var numbers = -2;
if (numbers < 0) {
  console.log(1776);
} else {
  console.log(1979);
}

// # 8. Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

var numero = 67;
if (numero === 100) {
  console.log(100);
} else if (numero === 99) {
  console.log(99);
} else {
  console.log(0);
}

// # 9. Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

var numero1 = -56;
var numero2 = 3;
if (numero1 < 0 && numero2 > 0) {
  console.log(1);
} else {
  console.log(0);
}

// # 10. Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

var rate = 6;
if (rate > 80) {
  console.log(5);
} else if (rate > 60) {
  console.log(4);
} else if (rate > 40) {
  console.log(3);
} else if (rate > 20) {
  console.log(2);
} else {
  console.log(1);
}
