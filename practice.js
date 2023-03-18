//node practice.js ***

// // #  1. Start with an array of numbers and create a new array with only the numbers less than 20.
// // #     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

// var numbers = [23, 56, 37, 8];
// var index = 0;
// var lowNumbers = [];
// while (index < numbers.length) {
//   if (numbers[index] < 20) {
//     lowNumbers.push(numbers[index]);
//   }
//   index += 1;
// }
// console.log(lowNumbers);

// // #  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
// // #     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

// var strings = ["we", "come", "we", "eat", "we", "leave"];
// var wWords = [];
// index = 0;
// while (index < strings.length) {
//   if (strings[index][0] === "w") {
//     wWords.push(strings[index]);
//   }
//   index += 1;
// }
// console.log(wWords);

// // #  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// // #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "notebook", price: 12 },
//   { name: "eraser", price: 3 },
//   { name: "book", price: 4 },
// ];
// var expensive = [];
// index = 0;
// while (index < items.length) {
//   if (items[index].price > 5) {
//     expensive.push(items[index]);
//   }
//   index += 1;
// }
// console.log(expensive);

// // #  4. Start with an array of numbers and create a new array with only the even numbers.
// // #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

// var values = [5, 7, 45, 7, 2, 4];
// var evenNumbers = [];
// index = 0;
// while (index < values.length) {
//   if (values[index] % 2 === 0) {
//     evenNumbers.push(values[index]);
//   }
//   index += 1;
// }
// console.log(evenNumbers);

// // #  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// // #     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

// var stringBois = ["have", "you", "been", "to", "Cuba"];
// var shawties = [];
// index = 0;
// while (index < stringBois.length) {
//   if (stringBois[index].length < 4) {
//     shawties.push(stringBois[index]);
//   }
//   index += 1;
// }
// console.log(shawties);

// // #  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// // #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

// var merch = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "notebook", price: 12 },
//   { name: "eraser", price: 3 },
//   { name: "book", price: 4 },
// ];
// var shortWord = [];
// index = 0;
// while (index < merch.length) {
//   if (merch[index].name.length < 6) {
//     shortWord.push(merch[index]);
//   }
//   index += 1;
// }
// console.log(shortWord);

// // #  7. Start with an array of numbers and create a new array with only the numbers less than 10.
// // #     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

// var digits = [12, 45, 4, 4, 2];
// var lowBoy = [];
// index = 0;
// while (index < digits.length) {
//   if (digits[index] < 10) {
//     lowBoy.push(digits[index]);
//   }
//   index += 1;
// }
// console.log(lowBoy);

// // #  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// // #     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

// var words = ["happy", "sad", "boy", "girl"];
// var noB = [];
// index = 0;
// while (index < words.length) {
//   if (words[index][0] != "b") {
//     noB.push(words[index]);
//   }
//   index += 1;
// }
// console.log(noB);

// // #  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// // #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

// var school = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "notebook", price: 12 },
//   { name: "eraser", price: 3 },
//   { name: "book", price: 4 },
// ];
// var cheap = [];
// index = 0;
// while (index < school.length) {
//   if (school[index].price < 10) {
//     cheap.push(school[index]);
//   }
//   index += 1;
// }
// console.log(cheap);

// // # 10. Start with an array of numbers and create a new array with only the odd numbers.
// // #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

// var numeros = [4, 7, 2, 34];
// var oddNumbers = [];
// index = 0;
// while (index < numeros.length) {
//   if (numeros[index] % 2 === 1) {
//     oddNumbers.push(numeros[index]);
//   }
//   index += 1;
// }
// console.log(oddNumbers);

// ###.forEach###

// #  1. Start with an array of numbers and create a new array with only the numbers less than 20.
// #     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

// #  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
// #     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

// #  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

// #  4. Start with an array of numbers and create a new array with only the even numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

// #  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// #     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

// #  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

// #  7. Start with an array of numbers and create a new array with only the numbers less than 10.
// #     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

// #  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// #     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

// #  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

// # 10. Start with an array of numbers and create a new array with only the odd numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].
