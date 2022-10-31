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

//***forEach

// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

var nums = [5, 10, 8, 3];
var add = 0;
nums.forEach(function (num) {
  add = add + num;
});
console.log(add);

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var fruits = ["banana", "apple", "kiwi"];
var smoothie = "";
fruits.forEach(function (fruit) {
  smoothie = smoothie + fruit;
});
console.log(smoothie);

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

var supplies = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var total = 0;
supplies.forEach(function (supply) {
  total = total + supply.price;
});
console.log(total);

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

var ages = [5, 10, 8, 3, 9];
var youngest = ages[0];
ages.forEach(function (age) {
  if (age < youngest) {
    youngest = age;
  }
});
console.log(youngest);

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

var pets = ["cat", "dog", "lizard"];
var characters = 0;
pets.forEach(function (pet) {
  characters = characters + pet.length;
});
console.log(characters);

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var cheapestItem = items[0];
items.forEach(function (item) {
  if (item.price < cheapestItem.price) {
    cheapestItem = item;
  }
});
console.log(cheapestItem);

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

var levels = [5, 10, 8, 3];
var points = 1;
levels.forEach(function (level) {
  points = points * level;
});
console.log(points);

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

var words = ["volleyball", "basketball", "badminton"];
var together = "-";
words.forEach(function (word) {
  together = together + word + "-";
});
console.log(together);

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

var things = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var smol = things[0];
things.forEach(function (thing) {
  if (thing.name.length < smol.name.length) {
    smol = thing;
  }
});
console.log(smol);

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.

numbers = [5, 10, 8, 3];
var max = numbers[0];
numbers.forEach(function (num) {
  if (num > max) {
    max = num;
  }
});
console.log(max);

//***.reduce */

// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

var array = [5, 10, 8, 3];
var sum = array.reduce(function (sum, array) {
  return sum + array;
}, 0);
console.log(sum);

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var deportes = ["volleyball", "basketball", "badminton"];
var longBoi = deportes.reduce(function (longBoi, deporte) {
  return longBoi + deporte;
});
console.log(longBoi);

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

var cosas = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var cuesta = cosas.reduce(function (cuesta, cosas) {
  return cuesta + cosas.price;
}, 0);
console.log(cuesta);

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

var numeros = [5, 10, 8, 3, 9];
var smallBoi = numeros.reduce(function (smallBoi, numeros) {
  if (numeros < smallBoi) {
    return numeros;
  } else {
    return smallBoi;
  }
}, numeros[0]);
console.log(smallBoi);

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

var names = ["bob", "steven", "bethany", "quinn"];
var nameLength = names.reduce(function (nameLength, names) {
  return nameLength + names.length;
}, 0);
console.log(nameLength);

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var cheapBoi = items.reduce(function (cheapBoi, item) {
  if (cheapBoi.price < item.price) {
    return cheapBoi;
  } else {
    return item;
  }
});
console.log(cheapBoi);

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

var worths = [5, 10, 8, 3];
product = worths.reduce(function (product, worth) {
  return product * worth;
}, 1);
console.log(product);

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

var dishes = ["plate", "bowl", "spoon"];
var dashed = dishes.reduce(function (dashed, dish) {
  return dashed + dish + "-";
}, "-");
console.log(dashed);

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

var objects = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var shortGuy = objects.reduce((shortGuy, object) => {
  if (shortGuy.name < object.name) {
    return shortGuy;
  } else {
    return object;
  }
});
console.log(shortGuy);

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.

var integers = [5, 10, 8, 3];
var maximus = integers.reduce((maximus, integer) => {
  if (maximus > integer) {
    return maximus;
  } else {
    return integer;
  }
});
console.log(maximus);
