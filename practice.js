//node practice.js ***

// # 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

var words = ["salutations", "greetings", "hello"];
words.push("howdy");
words.push("sup");
console.log(words);

// # 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

var letters = ["g", "u", "r", "l"];
letters[1] = 39;
console.log(letters);

// # 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

var numbers = [6, 9, 12, 456, 3];
var index = 0;
while (index < numbers.length) {
  console.log(numbers[index]);
  index = index + 1;
}

// # 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

var digits = [2];
digits.push(5);
digits.push(9);
console.log(digits);

// # 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

var strings = ["party hard", "let's get a party goin'", "fight that fight"];
strings[2] = strings[2].toUpperCase();
console.log(strings);

// # 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

var names = ["Bill", "Bob", "Jan"];
index = 0;
while (index < names.length) {
  console.log(names[index]);
  index = index + 1;
}

// # 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

var movies = ["Mouse Hunt", "Saving Private Ryan"];
movies.push("Matilda");
console.log(movies);

// # 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

var integers = [13, 9, 600, 23, 2000];
integers[0] = integers[0] * 10;
console.log(integers);

// # 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

var rank = [1, 2];
index = 0;
while (index < rank.length) {
  console.log(rank[index]);
  index = index + 1;
}

// # 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

var countries = ["Argentina", "Chile", "Ireland"];
countries.push("Scotland");
console.log(countries);
