// node practice.js ***

// #***while loop***

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [45, 2, 5];
var trippled = [];
var index = 0;
while (index < numbers.length) {
  trippled.push(numbers[index] * 3);
  index = index + 1;
}
console.log(trippled);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var fruits = ["kiwi", "mango", "orange"];
var tall = [];
index = 0;
while (index < fruits.length) {
  tall.push(fruits[index].toUpperCase());
  index = index + 1;
}
console.log(tall);

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var people = [
  { name: "Jose", age: 10 },
  { name: "Marie", age: 4 },
];
var firstName = [];
index = 0;
while (index < people.length) {
  firstName.push(people[index].name);
  index++;
}
console.log(firstName);

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

var digits = [2, 34, 6];
var added = [];
index = 0;
while (index < digits.length) {
  added.push(digits[index] + 7);
  index++;
}
console.log(added);

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

var seasons = ["fall", "winter"];
var lengths = [];
index = 0;
while (index < seasons.length) {
  lengths.push(seasons[index].length);
  index++;
}
console.log(lengths);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

var people = [
  { name: "Jose", age: 10 },
  { name: "Marie", age: 4 },
];
var ages = [];
index = 0;
while (index < people.length) {
  ages.push(people[index].age);
  index++;
}
console.log(ages);

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

var values = [56, 21, 13, 6];
var divided = [];
index = 0;
while (index < values.length) {
  divided.push(values[index] / 2.0);
  index++;
}
console.log(divided);

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

var sports = ["basketball", "hockey", "track"];
var firstLetter = [];
index = 0;
while (index < sports.length) {
  firstLetter.push(sports[index][0]);
  index++;
}
console.log(firstLetter);

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

var people = [
  { name: "Jose", age: 10 },
  { name: "Marie", age: 4 },
];
var older = [];
index = 0;
while (index < people.length) {
  older.push(people[index].age * 2);
  index++;
}
console.log(older);

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].

var phone = [3, 1, 0, 4, 5, 6, 7];
var written = [];
index = 0;
while (index < phone.length) {
  written.push(phone[index].toString());
  index++;
}
console.log(written);

// #***.forEach***

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [3, 45, 6, 18];
var timeThree = [];
numbers.forEach(function (number) {
  timeThree.push(number * 3);
});
console.log(timeThree);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var plants = ["bush", "flowers", "trees"];
var bigGuy = [];
plants.forEach(function (plant) {
  bigGuy.push(plant.toUpperCase());
});
console.log(bigGuy);

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var people = [
  { name: "Jose", age: 10 },
  { name: "Marie", age: 4 },
];
var names = [];
people.forEach(function (person) {
  names.push(person.name);
});
console.log(names);

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

var values = [2, 34, 3001, 5];
var plusSeven = [];
values.forEach(function (value) {
  plusSeven.push(value + 7);
});
console.log(plusSeven);

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

var states = ["Alabama", "Delaware", "Rhode Island"];
var stringLength = [];
states.forEach(function (state) {
  stringLength.push(state.length);
});
console.log(stringLength);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

var people = [
  { name: "Jose", age: 10 },
  { name: "Marie", age: 4 },
];
var ages = [];
people.forEach(function (person) {
  ages.push(person.age);
});
console.log(ages);

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

var digits = [45, 6, 2, 7];
var halved = [];
digits.forEach(function (digit) {
  halved.push(digit / 2.0);
});
console.log(halved);

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

var supplies = ["crayon", "marker", "paper"];
var firstLetter = [];
supplies.forEach(function (supply) {
  firstLetter.push(supply[0]);
});
console.log(firstLetter);

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

var people = [
  { name: "Jose", age: 10 },
  { name: "Marie", age: 4 },
];
var doubledAge = [];
people.forEach(function (person) {
  doubledAge.push(person.age * 2);
});
console.log(doubledAge);

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].

var numbers = [1, 4, 78, 2];
var string = [];
numbers.forEach(function (number) {
  string.push(number.toString());
});
console.log(string);

// #***.map***

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [5, 10, 15, 2];
var trippled = numbers.map(function (number) {
  return number * 3;
});
console.log(trippled);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var red = ["stop sign", "blood", "apple"];
var bigger = red.map(function (color) {
  return color.toUpperCase();
});
console.log(bigger);

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var people = [
  { name: "Sunne", age: 8 },
  { name: "Holly", age: 7 },
];
var names = people.map(function (person) {
  return person.name;
});
console.log(names);

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

var numbers = [6, 67, 2, 1];
var added = numbers.map(function (number) {
  return number + 7;
});
console.log(added);

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

var space = ["moon", "stars", "earth", "jupiter"];
var spaceLength = space.map(function (space) {
  return space.length;
});
console.log(spaceLength);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

var people = [
  { name: "Jose", age: 10 },
  { name: "Marie", age: 4 },
];
var ages = people.map(function (person) {
  return person.age;
});
console.log(ages);

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

var values = [3, 6, 67, 1, 109];
var halved = values.map(function (value) {
  return value / 2.0;
});
console.log(halved);

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

var oceanThings = ["seastar", "octopus", "coral reef"];
var firstLetter = oceanThings.map(function (ocean) {
  return ocean[0];
});
console.log(firstLetter);

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

var people = [
  { name: "Jose", age: 10 },
  { name: "Marie", age: 4 },
];
var doubledAge = people.map(function (person) {
  return person.age * 2;
});
console.log(doubledAge);

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].

var numbers = [34, 12, 111, 6];
var string = numbers.map(function (number) {
  return number.toString();
});
console.log(string);
