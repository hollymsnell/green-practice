// node practice.js ***

//*** while loops***

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [1, 3, 6];
var trippled = [];
var index = 0;
while (index < numbers.length) {
  number = numbers[index];
  trippled.push(number * 3);
  index++;
}
console.log(trippled);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var strings = ["good", "riddance", "loser"];
var capitalize = [];
var index = 0;
while (index < strings.length) {
  string = strings[index];
  capitalize.push(string.toUpperCase());
  index++;
}
console.log(capitalize);

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var names = [];
var index = 0;
while (index < people.length) {
  person = people[index];
  names.push(person.name);
  index++;
}
console.log(names);

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

var numbers = [23, 100, 0];
var addSeven = [];
var index = 0;
while (index < numbers.length) {
  number = numbers[index];
  addSeven.push(number + 7);
  index++;
}
console.log(addSeven);

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

var strings = ["weekend", "time", "is", "best"];
var stringLengths = [];
var index = 0;
while (index < strings.length) {
  string = strings[index];
  stringLengths.push(string.length);
  index++;
}
console.log(stringLengths);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var ages = [];
var index = 0;
while (index < people.length) {
  person = people[index];
  ages.push(person.age);
  index++;
}
console.log(ages);

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

var numbers = [23, 354, 72];
var halved = [];
var index = 0;
while (index < numbers.length) {
  number = numbers[index];
  halved.push(number / 2.0);
  index++;
}
console.log(halved);

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

var strings = ["winter", "season", "sadness"];
var firstLetter = [];
var index = 0;
while (index < strings.length) {
  string = strings[index];
  firstLetter.push(string[0]);
  index++;
}
console.log(firstLetter);

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var doubledAge = [];
var index = 0;
while (index < people.length) {
  person = people[index];
  doubledAge.push(person.age * 2);
  index++;
}
console.log(doubledAge);

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].

var numbers = [12, 45, 55];
var numberStrings = [];
var index = 0;
while (index < numbers.length) {
  number = numbers[index];
  numberStrings.push(number.toString());
  index++;
}
console.log(numberStrings);

//** .forEach

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [3, 5, 8];
var trippled = [];
numbers.forEach(function (number) {
  trippled.push(number * 3);
});
console.log(trippled);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var strings = ["beets", "tomatoes", "squash"];
var capitalize = [];
strings.forEach(function (string) {
  capitalize.push(string.toUpperCase());
});
console.log(capitalize);

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var names = [];
people.forEach(function (person) {
  names.push(person.name);
});
console.log(names);

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

var numbers = [6, 16, 78];
var addSeven = [];
numbers.forEach(function (number) {
  addSeven.push(number + 7);
});
console.log(addSeven);

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

var strings = ["happen", "thin", "excitement", "sad"];
var stringLengths = [];
strings.forEach(function (string) {
  stringLengths.push(string.length);
});
console.log(stringLengths);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var ages = [];
people.forEach(function (person) {
  ages.push(person.age);
});
console.log(ages);

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].

//***.map**

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [23, 7, 2];
var timesThree = numbers.map(function (number) {
  return number * 3;
});
console.log(timesThree);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"]

var strings = ["burgers", "fries"];
var capitalize = strings.map(function (string) {
  return string.toUpperCase();
});
console.log(capitalize);

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var names = people.map(function (person) {
  return person.name;
});
console.log(names);

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

var numbers = [45, 5, 1];
var addSeven = numbers.map(function (number) {
  return number + 7;
});
console.log(addSeven);

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

var strings = ["jupiter", "saturn", "earth", "mars"];
var planetsLength = strings.map(function (string) {
  return string.length;
});
console.log(planetsLength);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var ages = people.map(function (person) {
  return person.age;
});
console.log(ages);

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var ageDoubled = people.map(function (person) {
  return person.age * 2;
});
console.log(ageDoubled);

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].
