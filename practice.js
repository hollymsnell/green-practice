//node practice.js ***

// ***while loop***

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [1, 2, 3];
var newNumbers = [];
var index = 0;
while (index < numbers.length) {
  var number = numbers[index];
  newNumbers.push(number * 3);
  index = index + 1;
}
console.log(newNumbers);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var strings = ["hello", "goodbye"];
var upperStrings = [];
var index = 0;
while (index < strings.length) {
  upperStrings.push(strings[index].toUpperCase());
  index = index + 1;
}
console.log(upperStrings);

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var hashes = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var names = [];
var index = 0;
while (index < hashes.length) {
  var name = hashes[index].name;
  names.push(name);
  index++;
}
console.log(names);

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

var numbers = [1, 2, 3];
var plusSeven = [];
var index = 0;
while (index < numbers.length) {
  plusSeven.push(numbers[index] + 7);
  index++;
}
console.log(plusSeven);

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

var greetings = ["howdy", "farewell"];
var count = [];
var index = 0;
while (index < greetings.length) {
  count.push(greetings[index].length);
  index++;
}
console.log(count);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var ages = [];
var index = 0;
while (index < people.length) {
  ages.push(people[index].age);
  index++;
}
console.log(ages);

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

var digits = [4, 8, 2, 5];
var halved = [];
var index = 0;
while (index < digits.length) {
  halved.push(digits[index] / 2.0);
  index++;
}
console.log(halved);

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

var states = ["colorado", "arizona", "north dakota"];
var mainLetter = [];
var index = 0;
while (index < states.length) {
  mainLetter.push(states[index][0]);
  index++;
}
console.log(mainLetter);

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

var person = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var ageDoubled = [];
index = 0;
while (index < person.length) {
  ageDoubled.push(person[index].age * 2);
  index++;
}
console.log(ageDoubled);

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].

var numerics = [5, 8, 12];
var words = [];
index = 0;
while (index < numerics.length) {
  words.push(numerics[index].toString());
  index++;
}
console.log(words);

// ***.forEach practice***

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

var nums = [6, 7, 8];
var timesThree = [];
nums.forEach(function (num) {
  timesThree.push(num * 3);
});
console.log(timesThree);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var colors = ["blue", "green", "silver"];
var upper = [];
colors.forEach(function (color) {
  upper.push(color.toUpperCase());
});
console.log(upper);

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var hashie = [
  { name: "Sampson", age: 36 },
  { name: "Delilah", age: 26 },
];
var firstNames = [];
hashie.forEach(function (hash) {
  firstNames.push(hash.name);
});
console.log(firstNames);

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

var addresses = [7, 78, 4];
var addSeven = [];
addresses.forEach(function (address) {
  addSeven.push(address + 7);
});
console.log(addSeven);

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

var bands = ["nirvana", "blink 182", "green day"];
var letters = [];
bands.forEach(function (band) {
  letters.push(band.length);
});
console.log(letters);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

var peoples = [
  { name: "Sampson", age: 36 },
  { name: "Delilah", age: 26 },
];
var edades = [];
peoples.forEach(function (person) {
  edades.push(person.age);
});
console.log(edades);

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

var nummies = [5, 12, 345];
var halfsies = [];
nummies.forEach(function (nums) {
  halfsies.push(nums / 2.0);
});
console.log(halfsies);

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

var foods = ["chips", "kale", "cheese"];
var alphabet = [];
foods.forEach(function (food) {
  alphabet.push(food[0]);
});
console.log(alphabet);

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

var characters = [
  { name: "Sampson", age: 36 },
  { name: "Delilah", age: 26 },
];
var doubleAge = [];
characters.forEach(function (character) {
  doubleAge.push(character.age * 2);
});
console.log(doubleAge);

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].

var salaries = [56, 109, 76];
var written = [];
salaries.forEach(function (salary) {
  written.push(salary.toString());
});
console.log(written);

// ***.map practice***

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

var numerals = [56, 7, 900];
var tripple = numerals.map(function (numeral) {
  return numeral * 3;
});
console.log(tripple);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var pets = ["cosmo", "boo", "harvey", "hillman"];
var caps = pets.map(function (pet) {
  return pet.toUpperCase();
});
console.log(caps);

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var bible = [
  { name: "Sampson", age: 36 },
  { name: "Delilah", age: 26 },
];
var nombres = bible.map(function (bib) {
  return bib.name;
});
console.log(nombres);

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

var ssn = [5, 9, 5, 10];
var sClub = ssn.map(function (ss) {
  return ss + 7;
});
console.log(sClub);

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

var animals = ["giraffe", "walrus", "serpent"];
var wordDistance = animals.map(function (animal) {
  return animal.length;
});
console.log(wordDistance);

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
