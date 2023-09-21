// node practice.js ***

// # 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

function double(number) {
  return number * 2;
}
console.log(double(5));

// # 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

function capital(string) {
  return string.toUpperCase();
}
console.log(capital("get some"));

// # 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.

function subtract(number1, number2) {
  return number1 - number2;
}
console.log(subtract(34, 12));

// # 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

function squared(number) {
  return number * number;
}
console.log(squared(5));

// # 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.

function firstLetter(string) {
  return string[0];
}
console.log(firstLetter("happy"));

// # 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

function allStrings(string1, string2, string3) {
  return `${string1} ${string2} ${string3}`;
}
console.log(allStrings("leave", "me", "alone"));

// # 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.

function numberToString(number) {
  return number.toString();
}
console.log(numberToString(78));

// # 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.

function repeat(string) {
  return string + string + string + string + string;
}
console.log(repeat("weatherman"));

// # 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

function average(number1, number2, number3) {
  return (number1 + number2 + number3) / 3.0;
}
console.log(average(5, 8, 13));

// # 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.

function math(number) {
  return number * 10 + 30;
}
console.log(math(14));
