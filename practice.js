//node practice.js ***

// # 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

function getDouble(number) {
  return number * 2;
}
console.log(getDouble(5));

// # 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

function capString(string) {
  return string.toUpperCase();
}

console.log(capString("happiness"));

// # 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.

function difference(num1, num2) {
  return num1 - num2;
}

console.log(difference(6, 60));

// # 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

function square(number) {
  return number * number;
}

console.log(square(6));

// # 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.

function firstLetter(string) {
  return string[0];
}

console.log(firstLetter("knife"));

// # 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

function combineStrings(string1, string2, string3) {
  return `${string1} ${string2} ${string3}`;
}

console.log(combineStrings("happy", "freakin'", "birthday!"));

// # 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.

function numToString(number) {
  return number.toString();
}

console.log(numToString(6));

// # 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.

function repeatString(string) {
  return string + string + string + string + string;
}

console.log(repeatString("aint"));

// # 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(average(6, 8, 10));

// # 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.

function mathTime(number) {
  return number * 10 + 30;
}

console.log(mathTime(18));
