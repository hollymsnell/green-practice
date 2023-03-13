//node practice.js ***

// ### while loops ###

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

// var numbers = [4, 6, 8];
// var trippled = [];
// var index = 0;
// while (index < numbers.length) {
//   trippled.push(numbers[index] * 3);
//   index += 1;
// }
// console.log(trippled);

// // #  2. Start with an array of strings and create a new array with each string upcased.
// // #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

// var strings = ["howdy", "baby"];
// var capitalize = [];
// index = 0;
// while (index < strings.length) {
//   capitalize.push(strings[index].toUpperCase());
//   index += 1;
// }
// console.log(capitalize);

// // #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// // #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

// var people = [
//   { name: "Holly", age: 31 },
//   { name: "Jenny", age: 23 },
// ];
// var names = [];
// index = 0;
// while (index < people.length) {
//   names.push(people[index].name);
//   index += 1;
// }
// console.log(names);

// // #  4. Start with an array of numbers and create a new array with each number plus 7.
// // #     For example, [1, 2, 3] becomes [8, 9, 10].

// var digits = [5, 4, 3, 2, 1];
// var added = [];
// index = 0;
// while (index < digits.length) {
//   added.push(digits[index] + 7);
//   index += 1;
// }
// console.log(added);

// // #  5. Start with an array of strings and create a new array with each string's length.
// // #     For example, ["hello", "goodbye"] becomes [5, 7].

// var greetings = ["hello", "goodbye"];
// var lengths = [];
// index = 0;
// while (index < greetings.length) {
//   lengths.push(greetings[index].length);
//   index += 1;
// }
// console.log(lengths);

// // #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// // #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

// people = [
//   { name: "Holly", age: 31 },
//   { name: "Jenny", age: 23 },
// ];
// var ages = [];
// index = 0;
// while (index < people.length) {
//   ages.push(people[index].age);
//   index += 1;
// }
// console.log(ages);

// // #  7. Start with an array of numbers and create a new array with each number divided by 2.
// // #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// var values = [4, 7, 9];
// var divided = [];
// index = 0;
// while (index < values.length) {
//   divided.push(values[index] / 2);
//   index += 1;
// }
// console.log(divided);

// // #  8. Start with an array of strings and create a new array with each string's first letter only.
// // #     For example, ["hello", "goodbye"] becomes ["h", "g"].

// var food = ["apple", "oats", "bread"];
// var letter = [];
// index = 0;
// while (index < food.length) {
//   letter.push(food[index][0]);
//   index += 1;
// }
// console.log(letter);

// // # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// // #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// people = [
//   { name: "Holly", age: 31 },
//   { name: "Jenny", age: 23 },
// ];
// var older = [];
// index = 0;
// while (index < people.length) {
//   older.push(people[index].age * 2);
//   index += 1;
// }
// console.log(older);

// // # 10. Start with an array of numbers and create a new array with each number converted into a string.
// // #     For example, [1, 2, 3] becomes ["1", "2", "3"].

// var numero = [6, 7, 8];
// var stringy = [];
// index = 0;
// while (index < numero.length) {
//   stringy.push(numero[index].toString());
//   index += 1;
// }
// console.log(stringy);

//###.forEach###

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [1, 2, 3];
var trippled = [];
numbers.forEach(function (number) {
  trippled.push(number * 3);
});
console.log(trippled);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var strings = ["baby", "boy"];
var upcased = [];
strings.forEach(function (string) {
  upcased.push(string.toUpperCase());
});
console.log(upcased);

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var people = [
  { name: "Holly", age: 31 },
  { name: "Jenny", age: 23 },
];
var names = [];
people.forEach(function (person) {
  names.push(person.name);
});
console.log(names);

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

var values = [6, 16, 90];
var added = [];
values.forEach(function (value) {
  added.push(value + 7);
});
console.log(added);

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

var strings = ["welcome", "to the", "black", "parade"];
var lengths = [];
strings.forEach(function (string) {
  lengths.push(string.length);
});
console.log(lengths);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

people = [
  { name: "Holly", age: 31 },
  { name: "Jenny", age: 23 },
];
var ages = [];
people.forEach(function (person) {
  ages.push(person.age);
});
console.log(ages);

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

var digits = [23, 45, 2, 9];
var halved = [];
digits.forEach(function (digit) {
  halved.push(digit / 2);
});
console.log(halved);

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

var fruits = ["apple", "banana", "kiwi"];
var letters = [];
fruits.forEach(function (fruit) {
  letters.push(fruit[0]);
});
console.log(letters);

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

people = [
  { name: "Holly", age: 31 },
  { name: "Jenny", age: 23 },
];
var older = [];
people.forEach(function (person) {
  older.push(person.age * 2);
});
console.log(older);

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].

var nums = [3, 6, 8];
var words = [];
nums.forEach(function (num) {
  words.push(num.toString());
});
console.log(words);

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].
