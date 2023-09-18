// node practice.js ***

// # 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

var words = ["winter", "summer", "spring"];
words.push("fall");
console.log(words);

// # 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

var letters = ["y", "a", "s", "s"];
letters[1] = 6;
console.log(letters);

// # 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

var numbers = [67, 12, 1, 4, 100];
var index = 0;
while (index < numbers.length) {
  console.log(numbers[index]);
  index = index + 1;
}

// # 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

var digits = [23];
digits.push(1);
digits.push(900);
digits.push(14);
console.log(digits);

// # 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

var fruits = ["kiwi", "banana", "lime"];
fruits[2] = fruits[2].toUpperCase();
console.log(fruits);

// # 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

var names = ["AJ", "Mike", "Meridith"];
index = 0;
while (index < names.length) {
  console.log(names[index]);
  index = index + 1;
}

// # 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

var subjects = ["science", "math"];
subjects.push("language");
console.log(subjects);

// # 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

var values = [100, 34, 66, 1, 98];
values[0] = values[0] * 10;
console.log(values);

// # 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

var ages = [12, 32];
index = 0;
while (index < ages.length) {
  console.log(ages[index]);
  index = index + 1;
}

// # 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

var countries = ["Brazil", "Argentina", "Uraguay"];
countries.push("Paraguay");
console.log(countries);
