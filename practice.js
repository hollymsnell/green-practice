//node practice.js ***

//while loop

// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

var numbers = [5, 10, 8, 3];
var sum = 0;
var index = 0;
while (index < numbers.length) {
  sum = sum + numbers[index];
  index = index + 1;
}
console.log(sum);

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var sports = ["volleyball", "basketball", "badminton"];
var oneString = "";
index = 0;
while (index < sports.length) {
  var sport = sports[index];
  oneString = oneString + sport;
  index = index + 1;
}
console.log(oneString);

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
sum = 0;
index = 0;
while (index < items.length) {
  sum = sum + items[index].price;
  index = index + 1;
}
console.log(sum);

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

var values = [5, 10, 8, 3, 9];
var minimum = values[0];
index = 0;
while (index < values.length) {
  if (minimum < values[index]) {
    values[index] = minimum;
  }
  index = index + 1;
}
console.log(minimum);

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

var sports = ["volleyball", "basketball", "badminton"];
var count = 0;
index = 0;
while (index < sports.length) {
  count = count + sports[index].length;
  index = index + 1;
}
console.log(count);

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var lowestPrice = items[0];
index = 0;
while (index < items.length) {
  if (items[index].price < lowestPrice.price) {
    lowestPrice = items[index];
  }
  index = index + 1;
}

console.log(lowestPrice);

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

var numbers = [5, 10, 8, 3];
var product = 1;
index = 0;
while (index < numbers.length) {
  product = product * numbers[index];
  index = index + 1;
}
console.log(product);

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

var athletics = ["volleyball", "basketball", "badminton"];
var oneString = "-";
index = 0;
while (index < athletics.length) {
  oneString = oneString + athletics[index] + "-";
  index = index + 1;
}
console.log(oneString);

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

var thriftItems = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var shortName = thriftItems[0];
index = 0;
while (index < thriftItems.length) {
  if (thriftItems[index].name < shortName.name) {
    shortName = thriftItems[index];
  }
  index = index + 1;
}
console.log(shortName);

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.

numbers = [5, 10, 8, 3];
var biggestBoy = numbers[0];
index = 0;
while (index < numbers.length) {
  if (numbers[index] > biggestBoy) {
    biggestBoy = numbers[index];
  }
  index = index + 1;
}
console.log(biggestBoy);
