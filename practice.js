// node practice.js ***

//*** while loops **

// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

var numbers = [3, 34, 2, 1];
var sum = 0;
var index = 0;
while (index < numbers.length) {
  sum += numbers[index];
  index += 1;
}
console.log(sum);

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var sports = ["tennis", "fencing", "dancing"];
var singleString = "";
index = 0;
while (index < sports.length) {
  singleString += sports[index];
  index += 1;
}
console.log(singleString);

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

var supplies = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var priceSum = 0;
index = 0;
while (index < supplies.length) {
  priceSum = priceSum + supplies[index].price;
  index += 1;
}
console.log(priceSum);

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

var numbers = [2, -1, 32, 5];
var minimum = numbers[0];
index = 0;
while (index < numbers.length) {
  if (numbers[index] < minimum) {
    minimum = numbers[index];
  }
  index += 1;
}
console.log(minimum);

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

var fruits = ["banana", "watermelon", "passion fruit"];
var totalLength = 0;
index = 0;
while (index < fruits.length) {
  totalLength += fruits[index].length;
  index += 1;
}
console.log(totalLength);

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

var supplies = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var lowestPrice = supplies[0];
index = 0;
while (index < supplies.length) {
  if (supplies[index].price < lowestPrice.price) {
    lowestPrice = supplies[index];
  }
  index += 1;
}
console.log(lowestPrice);

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

var numbers = [5, 6, 1, 2];
var product = 1;
index = 0;
while (index < numbers.length) {
  product = product * numbers[index];
  index += 1;
}
console.log(product);

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

var emotions = ["indifferent", "playful", "meloncholy"];
var dashed = "-";
index = 0;
while (index < emotions.length) {
  dashed = dashed + `${emotions[index]}-`;
  index += 1;
}
console.log(dashed);

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

var supplies = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var shortestName = supplies[0];
index = 0;
while (index < supplies.length) {
  if (supplies[index].name.length < shortestName.name.length) {
    shortestName = supplies[index];
  }
  index += 1;
}
console.log(shortestName);

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.

var numbers = [23, 3467, 1, 24];
var maximum = numbers[0];
index = 0;
while (index < numbers.length) {
  if (numbers[index] > maximum) {
    maximum = numbers[index];
  }
  index += 1;
}
console.log(maximum);

//**.forEach**

// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

var numbers = [34, 46, 7, 90];
var sum = 0;
numbers.forEach(function (number) {
  sum = sum + number;
});
console.log(sum);

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var strings = ["Welcome", "to", "the", "black", "parade"];
var single = "";
strings.forEach(function (string) {
  single += string;
});
console.log(single);

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

var supplies = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var priceSum = 0;
supplies.forEach(function (supply) {
  priceSum += supply.price;
});
console.log(priceSum);

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

var numbers = [23, 34, 78, 8];
var minimum = numbers[0];
numbers.forEach(function (number) {
  if (number < minimum) {
    minimum = number;
  }
});
console.log(minimum);

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

var jobs = ["lawyer", "engineer", "therapist"];
var totalLength = 0;
jobs.forEach(function (job) {
  totalLength += job.length;
});
console.log(totalLength);

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

var supplies = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var lowestPrice = supplies[0];
supplies.forEach(function (supply) {
  if (supply.price < lowestPrice.price) {
    lowestPrice = supply;
  }
});
console.log(lowestPrice);

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

var numbers = [65, 56, 2];
var product = 1;
numbers.forEach(function (number) {
  product = product * number;
});
console.log(product);

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

var socials = ["facebook", "instagram", "snapchat"];
var dashed = "-";
socials.forEach(function (social) {
  dashed += `${social}-`;
});
console.log(dashed);

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

var supplies = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var shortestName = supplies[0];
supplies.forEach(function (supply) {
  if (supply.name.length < shortestName.name.length) {
    shortestName = supply;
  }
});
console.log(shortestName);

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.

var numbers = [2, 67, 4, 2];
var maximum = numbers[0];
numbers.forEach(function (number) {
  if (number > maximum) {
    maximum = number;
  }
});
console.log(maximum);

//**.reduce**

// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

var numbers = [3, 3, 45];
var sum = numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);
console.log(sum);

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var games = ["monopoly", "sorry", "go fish"];
var one = games.reduce(function (one, game) {
  return one + game;
}, "");
console.log(one);

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

var supplies = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var totalPrice = supplies.reduce(function (total, supply) {
  return total + supply.price;
}, 0);
console.log(totalPrice);

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

var numbers = [4, 7, 23, 6, -5];
var minimum = numbers.reduce(function (min, number) {
  if (number < min) {
    return number;
  } else {
    return min;
  }
});
console.log(minimum);

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

var random = ["leotard", "walrus", "bittersweet"];
var totalLength = random.reduce(function (total, rando) {
  return total + rando.length;
}, 0);
console.log(totalLength);

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

var supplies = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var lowestPrice = supplies.reduce(function (lowest, supply) {
  if (supply.price < lowest.price) {
    return supply;
  } else {
    return lowest;
  }
}, supplies[0]);
console.log(lowestPrice);

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

var digits = [3, 23, 1, 6];
var product = digits.reduce(function (product, digit) {
  return product * digit;
}, 1);
console.log(product);

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

var clothes = ["shirt", "pants", "shoes"];
var dashed = clothes.reduce(function (dashed, cloth) {
  return dashed + `${cloth}-`;
}, "-");
console.log(dashed);

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

var supplies = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var shortestName = supplies.reduce(function (shortestName, supply) {
  if (supply.name.length < shortestName.name.length) {
    return supply;
  } else {
    return shortestName;
  }
}, supplies[0]);
console.log(shortestName);

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.

var values = [43, 25, 89, 6];
var maximum = values.reduce(function (max, value) {
  if (value > max) {
    return value;
  } else {
    return max;
  }
}, values[0]);
console.log(maximum);
