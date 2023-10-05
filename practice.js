// node practice.js ***

// #  1. Use a nested loop to convert an array of number pairs into a single flattened array.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

var numberPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
var flattened = [];
var index = 0;
while (index < numberPairs.length) {
  var numberPair = numberPairs[index];
  var index2 = 0;
  while (index2 < numberPair.length) {
    var number = numberPair[index2];
    flattened.push(number);
    index2 += 1;
  }
  index += 1;
}
console.log(flattened);

// #  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// #     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

var letters1 = ["a", "b", "c"];
var letters2 = ["d", "e", "f", "g"];
var combined = [];
index = 0;
while (index < letters1.length) {
  index2 = 0;
  while (index2 < letters2.length) {
    combined.push(letters1[index] + letters2[index2]);
    index2 += 1;
  }
  index += 1;
}
console.log(combined);

// #  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// #     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

var letters = ["a", "b", "c", "d"];
var combinations = [];
index = 0;
while (index < letters.length) {
  index2 = 0;
  while (index2 < letters.length) {
    if (index != index2) {
      combinations.push(letters[index] + letters[index2]);
    }
    index2 += 1;
  }
  index += 1;
}
console.log(combinations);

// #  4. Use a nested loop to find the largest product of any two different numbers within a given array.
// #     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

var numbers = [5, -2, 1, -9, -7, 2, 6];
var largestProduct = numbers[0] * numbers[1];
index = 0;
while (index < numbers.length) {
  currentNumber = numbers[index];
  index2 = 0;
  while (index2 < numbers.length) {
    if (index !== index2) {
      var otherNumber = numbers[index2];
      var product = currentNumber * otherNumber;
      if (product > largestProduct) {
        largestProduct = product;
      }
    }
    index2 += 1;
  }
  index += 1;
}
console.log(largestProduct);

// #  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

var numberPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
var sum = 0;
index = 0;
while (index < numberPairs.length) {
  var numberPair = numberPairs[index];
  index2 = 0;
  while (index2 < numberPair.length) {
    var number = numberPair[index2];
    sum = sum + number;
    index2 += 1;
  }
  index += 1;
}
console.log(sum);

// #  6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// #     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

var numbers1 = [1, 2];
var numbers2 = [6, 7, 8];
var added = [];
var index = 0;
while (index < numbers1.length) {
  var index2 = 0;
  while (index2 < numbers2.length) {
    added.push(numbers1[index] + numbers2[index2]);
    index2 += 1;
  }
  index += 1;
}
console.log(added);

// #  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// #     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

var numbers = [2, 8, 3];
var productCombos = [];
index = 0;
while (index < numbers.length) {
  var firstNumber = numbers[index];
  var index2 = 0;
  while (index2 < numbers.length) {
    var secondNumber = numbers[index2];
    productCombos.push(firstNumber * secondNumber);
    index2 += 1;
  }
  index += 1;
}
console.log(productCombos);

// #  8. Use a nested loop to find the largest sum of any two different numbers within an array.
// #     For example, [1, 8, 3, 10] becomes 18.

var numbers = [1, 8, 3, 10];
var largestSum = numbers[0] + numbers[1];
index = 0;
while (index < numbers.length) {
  index2 = 0;
  while (index2 < numbers.length) {
    if (index !== index2) {
      var sum = numbers[index] + numbers[index2];
      if (sum > largestSum) {
        largestSum = sum;
      }
    }
    index2 += 1;
  }
  index += 1;
}
console.log(largestSum);

// #  9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// #     For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

var numbers = [2, 5, 3, 1, 0, 7, 11];
var result = false;
index = 0;
while (index < numbers.length) {
  var currentNumber = numbers[index];
  index2 = 0;
  while (index2 < numbers.length) {
    if (index !== index2) {
      var otherNumber = numbers[index2];
      if (currentNumber + otherNumber == 10 && result === false) {
        result = [currentNumber, otherNumber];
      }
    }
    index2 += 1;
  }
  index += 1;
}
console.log(result);

// # 10. Use a nested loop to convert an array of string arrays into a single string.
// #     For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

var words = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];
var string = "";
index = 0;
while (index < words.length) {
  index2 = 0;
  while (index2 < words[index].length) {
    string = string + words[index][index2];
    index2 += 1;
  }
  index += 1;
}
console.log(string);
