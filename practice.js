//node practice.js ***

// # 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

var words = ["joy", "to", "the"];
words.push("world");
words.push("song");
console.log(words);

// # 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

var array = ["g", "y", "t"];
array[1] = 56;
console.log(array);

// # 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

var numbers = [4, 8, 3, 1, 34];
var index = 0;
while (index < numbers.length) {
  console.log(numbers[index]);
  index = index + 1;
}

// # 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

var number = [5];
number.push(6);
number.push(89);
console.log(number);

// # 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

var letters = ["thanks", "you're so kind", "can i have some of that"];
letters[2] = letters[2].toUpperCase();
console.log(letters);

// # 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

var names = ["matthew", "james", "other"];
index = 0;
while (index < names.length) {
  console.log(names[index]);
  index = index + 1;
}

// # 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

var strings = ["hola chica", "burning"];
strings.push("i'm happy");
console.log(strings);

// # 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

var fivenum = [6, 78, 345, 1, 0];
fivenum[0] = fivenum[0] * 10;
console.log(fivenum);

// # 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

var twonums = [34, 234];
index = 0;
while (index < twonums.length) {
  console.log(twonums[index]);
  index = index + 1;
}

// # 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

var countries = ["Jamiaca", "Hondurus", "Finland"];
countries.push("Poland");
console.log(countries);
