// node practice.js ***

//*** while loops **

// #  1. Start with an array of numbers and create a new array with only the numbers less than 20.
// #     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var numbers = [23, 1, 6, 18];
var smaller = [];
var index = 0;
while (index < numbers.length) {
  if (numbers[index] < 20) {
    smaller.push(numbers[index]);
  }
  index += 1;
}
console.log(smaller);

// #  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
// #     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

var words = ["winter", "was", "colder", "before"];
var wWords = [];
index = 0;
while (index < words.length) {
  if (words[index][0] == "w") {
    wWords.push(words[index]);
  }
  index += 1;
}
console.log(wWords);

// #  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var expensive = [];
index = 0;
while (index < items.length) {
  if (items[index].price > 5) {
    expensive.push(items[index]);
  }
  index += 1;
}
console.log(expensive);

// #  4. Start with an array of numbers and create a new array with only the even numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

var digits = [2, 4, 57, 99, 100];
var evens = [];
index = 0;
while (index < digits.length) {
  if (digits[index] % 2 === 0) {
    evens.push(digits[index]);
  }
  index += 1;
}
console.log(evens);

// #  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// #     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

var verbs = ["go", "run", "evaporate", "win"];
var shortVerbs = [];
index = 0;
while (index < verbs.length) {
  if (verbs[index].length < 4) {
    shortVerbs.push(verbs[index]);
  }
  index += 1;
}
console.log(shortVerbs);

// #  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var shortNames = [];
index = 0;
while (index < items.length) {
  if (items[index].name.length < 6) {
    shortNames.push(items[index]);
  }
  index += 1;
}
console.log(shortNames);

// #  7. Start with an array of numbers and create a new array with only the numbers less than 10.
// #     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

var values = [23, 12, 3, 8];
var lessThanTen = [];
index = 0;
while (index < values.length) {
  if (values[index] < 10) {
    lessThanTen.push(values[index]);
  }
  index += 1;
}
console.log(lessThanTen);

// #  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// #     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

var nouns = ["boss", "fern", "lamp", "bush"];
var beeb = [];
index = 0;
while (index < nouns.length) {
  if (nouns[index][0] === "b") {
    beeb.push(nouns[index]);
  }
  index += 1;
}
console.log(beeb);

// #  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var cheaper = [];
index = 0;
while (index < items.length) {
  if (items[index].price < 10) {
    cheaper.push(items[index]);
  }
  index += 1;
}
console.log(cheaper);

// # 10. Start with an array of numbers and create a new array with only the odd numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

var phone = [4, 8, 2, 5, 4, 5, 9];
var odds = [];
index = 0;
while (index < phone.length) {
  if (phone[index] % 2 === 1) {
    odds.push(phone[index]);
  }
  index += 1;
}
console.log(odds);

//**.forEach**

// #  1. Start with an array of numbers and create a new array with only the numbers less than 20.
// #     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var numbers = [5, 23, 6, 2, 67];
var lessThanTwenty = [];
numbers.forEach(function (number) {
  if (number < 20) {
    lessThanTwenty.push(number);
  }
});
console.log(lessThanTwenty);

// #  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
// #     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

var foods = ["kiwi", "beans", "melon", "meatloaf"];
var mWords = [];
foods.forEach(function (food) {
  if (food[0] === "m") {
    mWords.push(food);
  }
});
console.log(mWords);

// #  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var greaterThanFive = [];
items.forEach(function (item) {
  if (item.price > 5) {
    greaterThanFive.push(item);
  }
});
console.log(greaterThanFive);

// #  4. Start with an array of numbers and create a new array with only the even numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

var numbers = [23, 3, 6, 7, 10];
var evens = [];
numbers.forEach(function (number) {
  if (number % 2 === 0) {
    evens.push(number);
  }
});
console.log(evens);

// #  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// #     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

var strings = ["how", "can", "i", "live", "without", "you"];
var shortStrings = [];
strings.forEach(function (string) {
  if (string.length < 4) {
    shortStrings.push(string);
  }
});
console.log(shortStrings);

// #  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var shortNames = [];
items.forEach(function (item) {
  if (item.name.length < 6) {
    shortNames.push(item);
  }
});
console.log(shortNames);

// #  7. Start with an array of numbers and create a new array with only the numbers less than 10.
// #     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

numbers = [34, 23, 2, 75, 9];
lessThanTen = [];
numbers.forEach(function (number) {
  if (number < 10) {
    lessThanTen.push(number);
  }
});
console.log(lessThanTen);

// #  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// #     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

var adjectives = ["happily", "quietly", "bad", "good", "boldly"];
var noBees = [];
adjectives.forEach(function (adjective) {
  if (adjective[0] != "b") {
    noBees.push(adjective);
  }
});
console.log(noBees);

// #  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var cheaperThanTen = [];
items.forEach(function (item) {
  if (item.price < 10) {
    cheaperThanTen.push(item);
  }
});
console.log(cheaperThanTen);

// # 10. Start with an array of numbers and create a new array with only the odd numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

var numbers = [23, 23, 56, 2, 8];
var odds = [];
numbers.forEach(function (number) {
  if (number % 2 === 1) {
    odds.push(number);
  }
});
console.log(odds);

//**.filter**

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
