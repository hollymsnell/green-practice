//node practice.js ***

// #  1. Use a nested loop to convert an array of number pairs into a single flattened array.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

var buddies = [
  [1, 3],
  [8, 9],
  [2, 16],
];
var family = [];
var index = 0;
while (index < buddies.length) {
  var buddy = buddies[index];
  var index2 = 0;
  while (index2 < buddy.length) {
    var bud = buddy[index2];
    family.push(bud);
    index2 = index2 + 1;
  }
  index = index + 1;
}
console.log(family);

// #  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// #     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

var letters1 = ["a", "b", "c"];
var letters2 = ["d", "e", "f", "g"];
var allLetters = [];
index = 0;
while (index < letters1.length) {
  index2 = 0;
  while (index2 < letters2.length) {
    allLetters.push(letters1[index] + letters2[index2]);
    index2 += 1;
  }
  index += 1;
}
console.log(allLetters);

// #  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// #     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

var letters = ["a", "b", "c", "d"];
var pairs = [];
index = 0;
while (index < letters.length) {
  index2 = 0;
  while (index2 < letters.length) {
    if (index !== index2) {
      pairs.push(letters[index] + letters[index2]);
    }
    index2 += 1;
  }
  index += 1;
}
console.log(pairs);

// #  4. Use a nested loop to find the largest product of any two different numbers within a given array.
// #     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

var numbers = [5, -2, 1, -9, -7, 2, 6];
var maxProduct = numbers[0] * numbers[1];
index = 0;
while (index < numbers.length) {
  var currentNumber = numbers[index];
  index2 = 0;
  while (index2 < numbers.length) {
    if (index !== index2) {
      var otherNumber = numbers[index2];
      var product = currentNumber * otherNumber;
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
    index2 += 1;
  }
  index = index + 1;
}
console.log(maxProduct);

// #  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

numbers = [
  [1, 3],
  [8, 9],
  [2, 16],
];
var allSum = 0;
index = 0;
while (index < numbers.length) {
  var number = numbers[index];
  index2 = 0;
  while (index2 < number.length) {
    var num = number[index2];
    allSum = allSum + num;
    index2 = index2 + 1;
  }
  index = index + 1;
}
console.log(allSum);

// #  6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// #     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

var numbers1 = [1, 2];
var numbers2 = [6, 7, 8];
var numberSums = [];
index = 0;
while (index < numbers1.length) {
  index2 = 0;
  while (index2 < numbers2.length) {
    numberSums.push(numbers1[index] + numbers2[index2]);
    index2 += 1;
  }
  index += 1;
}
console.log(numberSums);

// #  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// #     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

numbers = [2, 8, 3];
var products = [];
index = 0;
while (index < numbers.length) {
  var firstNumber = numbers[index];
  index2 = 0;
  while (index2 < numbers.length) {
    var secondNumber = numbers[index2];
    products.push(firstNumber * secondNumber);
    index2++;
  }
  index++;
}
console.log(products);

// #  8. Use a nested loop to find the largest sum of any two different numbers within an array.
// #     For example, [1, 8, 3, 10] becomes 18.

var values = [1, 8, 3, 10];
var maxSum = values[0] + values[1];
index = 0;
while (index < values.length) {
  index2 = 0;
  while (index2 < values.length) {
    if (index !== index2) {
      var sum = values[index] + values[index2];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
    index2++;
  }
  index++;
}
console.log(maxSum);

// #  9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// #     For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

// # 10. Use a nested loop to convert an array of string arrays into a single string.
// #     For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".
