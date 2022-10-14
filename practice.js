//node practice.js ***

// ***while loop***

// #  1. Start with an array of numbers and create a new array with only the numbers less than 20.
// #     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var numbers = [2, 32, 80, 18, 12, 3];
var smallNumbers = [];
var index = 0;
while (index < numbers.length) {
  var number = numbers[index];
  if (number < 20) {
    smallNumbers.push(number);
  }
  index = index + 1;
}

console.log(smallNumbers);

// #  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
// #     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

var words = ["winner", "winner", "chicken", "dinner"];
var wWords = [];
index = 0;
while (index < words.length) {
  if (words[index][0] === "w") {
    wWords.push(words[index]);
  }
  index = index + 1;
}
console.log(wWords);

// #  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

var hashes = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var prices = [];
index = 0;
while (index < hashes.length) {
  if (hashes[index].price > 5) {
    prices.push(hashes[index]);
  }
  index = index + 1;
}
console.log(prices);

// #  4. Start with an array of numbers and create a new array with only the even numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

var array = [2, 4, 5, 1, 8, 9, 7];
var evens = [];
index = 0;
while (index < array.length) {
  if (array[index] % 2 === 0) {
    evens.push(array[index]);
  }
  index = index + 1;
}
console.log(evens);

// #  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// #     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

var strings = ["a", "man", "be", "plan", "toy", "canal", "panama"];
var shortWords = [];
index = 0;
while (index < strings.length) {
  if (strings[index].length < 4) {
    shortWords.push(strings[index]);
  }
  index = index + 1;
}
console.log(shortWords);

// #  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

var hashies = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var lessLetters = [];
index = 0;
while (index < hashies.length) {
  if (hashies[index].name.length < 6) {
    lessLetters.push(hashies[index]);
  }
  index = index + 1;
}
console.log(lessLetters);

// #  7. Start with an array of numbers and create a new array with only the numbers less than 10.
// #     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

numbers = [8, 23, 0, 44, 1980, 3];
smallNumbers = [];
index = 0;
while (index < numbers.length) {
  if (numbers[index] < 10) {
    smallNumbers.push(numbers[index]);
  }
  index = index + 1;
}
console.log(smallNumbers);

// #  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// #     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

var stringies = ["big", "little", "good", "bad"];
var noBees = [];
index = 0;
while (index < stringies.length) {
  if (stringies[index][0] !== "b") {
    noBees.push(stringies[index]);
  }
  index = index + 1;
}
console.log(noBees);

// #  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var price = [];
index = 0;
while (index < items.length) {
  if (items[index].price < 10) {
    price.push(items[index]);
  }
  index = index + 1;
}
console.log(price);

// # 10. Start with an array of numbers and create a new array with only the odd numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

var nummies = [2, 4, 5, 1, 8, 9, 7];
var oddDucks = [];
index = 0;
while (index < nummies.length) {
  if (nummies[index] % 2 === 1) {
    oddDucks.push(nummies[index]);
  }
  index = index + 1;
}
console.log(oddDucks);

// forEach

// #  1. Start with an array of numbers and create a new array with only the numbers less than 20.
// #     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var numberArray = [2, 32, 80, 18, 12, 3];
var smallNumber = [];
numberArray.forEach(function (number) {
  if (number < 20) {
    smallNumber.push(number);
  }
});
console.log(smallNumber);

// #  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
// #     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

var rhymes = ["winner", "winner", "chicken", "dinner"];
var ww = [];
rhymes.forEach(function (rhyme) {
  if (rhyme[0] === "w") {
    ww.push(rhyme);
  }
});
console.log(ww);

// #  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

var supplies = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var money = [];
supplies.forEach(function (supply) {
  if (supply.price > 5) {
    money.push(supply);
  }
});
console.log(money);

// #  4. Start with an array of numbers and create a new array with only the even numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

var numbers = [2, 4, 5, 1, 8, 9, 7];
var even = [];
numbers.forEach(function (number) {
  if (number % 2 === 0) {
    even.push(number);
  }
});
console.log(even);

// #  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// #     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

var words = ["a", "man", "a", "plan", "a", "canal", "panama"];
var short = [];
words.forEach(function (word) {
  if (word.length < 4) {
    short.push(word);
  }
});
console.log(short);

// #  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

var hashes = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var shortNames = [];
hashes.forEach(function (hash) {
  if (hash.name.length < 6) {
    shortNames.push(hash);
  }
});
console.log(shortNames);

// #  7. Start with an array of numbers and create a new array with only the numbers less than 10.
// #     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

numbers = [8, 23, 0, 44, 1980, 3];
var singleDigit = [];
numbers.forEach(function (number) {
  if (number < 10) {
    singleDigit.push(number);
  }
});
console.log(singleDigit);

// #  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// #     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

strings = ["big", "little", "good", "bad"];
var noB = [];
strings.forEach(function (string) {
  if (string[0] != "b") {
    noB.push(string);
  }
});
console.log(noB);

// #  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

hashes = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var lowPrice = [];
hashes.forEach(function (hash) {
  if (hash.price < 10) {
    lowPrice.push(hash);
  }
});
console.log(lowPrice);

// # 10. Start with an array of numbers and create a new array with only the odd numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

numbers = [2, 4, 5, 1, 8, 9, 7];
var oddies = [];
numbers.forEach(function (number) {
  if (number % 2 === 1) {
    oddies.push(number);
  }
});
console.log(oddies);
