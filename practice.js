// node practice.js ***

//###while loops###

// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

// var numbers = [2, 6, 34, 6];
// var index = 0;
// var sum = 0;
// while (index < numbers.length) {
//   sum = sum + numbers[index];
//   index += 1;
// }
// console.log(sum);

// // #  2. Start with an array of strings and combine them all into a single string.
// // #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// var strings = ["winter", "spring", "summer", "fall"];
// index = 0;
// var longBoy = "";
// while (index < strings.length) {
//   longBoy = longBoy + strings[index];
//   index += 1;
// }
// console.log(longBoy);

// // #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// // #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// var furniture = [
//   { name: "bed", price: 100 },
//   { name: "lamp", price: 1 },
//   { name: "stool", price: 4 },
//   { name: "plant", price: 7 },
//   { name: "dresser", price: 50 },
// ];
// var priceSum = 0;
// index = 0;
// while (index < furniture.length) {
//   priceSum = priceSum + furniture[index].price;
//   index += 1;
// }
// console.log(priceSum);

// // #  4. Start with an array of numbers and compute the the minumum number.
// // #     For example, [5, 10, 8, 3, 9] becomes 3.

// var values = [4, 23, 134, 5];
// var minumum = values[0];
// index = 0;
// while (index < values.length) {
//   if (values[index] < minumum) {
//     minumum = values[index];
//   }
//   index += 1;
// }
// console.log(minumum);

// // #  5. Start with an array of strings and compute the total length of all the strings.
// // #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// var words = ["happy", "sad", "angry", "glad"];
// var totalLength = 0;
// index = 0;
// while (index < words.length) {
//   totalLength = totalLength + words[index].length;
//   index += 1;
// }
// console.log(totalLength);

// // #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// // #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// var things = [
//   { name: "bed", price: 100 },
//   { name: "lamp", price: 1 },
//   { name: "stool", price: 4 },
//   { name: "plant", price: 7 },
//   { name: "dresser", price: 50 },
// ];
// var lowest = things[0];
// index = 0;
// while (index < things.length) {
//   if (things[index].price < lowest.price) {
//     lowest = things[index];
//   }
//   index += 1;
// }
// console.log(lowest);

// // #  7. Start with an array of numbers and compute product of all the numbers.
// // #     For example, [5, 10, 8, 3] becomes 1200.

// var math = [5, 23, 11, 2];
// var product = 1;
// index = 0;
// while (index < math.length) {
//   product = product * math[index];
//   index += 1;
// }
// console.log(product);

// // #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// // #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// var seasons = ["winter", "spring", "summer", "fall"];
// var singleString = "-";
// index = 0;
// while (index < seasons.length) {
//   singleString = singleString + `${seasons[index]}-`;
//   index += 1;
// }
// console.log(singleString);

// // #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// // #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// var decor = [
//   { name: "bed", price: 100 },
//   { name: "lamp", price: 1 },
//   { name: "stool", price: 4 },
//   { name: "plant", price: 7 },
//   { name: "dresser", price: 50 },
// ];
// var shorty = decor[0];
// index = 0;
// while (index < decor.length) {
//   if (decor[index].name.length < shorty.name.length) {
//     shorty = decor[index];
//   }
//   index += 1;
// }
// console.log(shorty);

// // # 10. Start with an array of numbers and compute the maximum number.
// // #     For example, [5, 10, 8, 3] becomes 10.

// var digits = [56, 234, 56778, 12, 134];
// var maximum = digits[0];
// index = 0;
// while (index < digits.length) {
//   if (digits[index] > maximum) {
//     maximum = digits[index];
//   }
//   index += 1;
// }
// console.log(maximum);

// ###.forEach###

// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.

// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.
