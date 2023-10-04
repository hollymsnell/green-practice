#ruby practice.rb ***


#  1. Use a nested loop to convert an array of number pairs into a single flattened array.
#     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

number_pairs = [[1, 3], [8, 9], [2, 16]]
flattened = []
index = 0
while index < number_pairs.length
  number_pair = number_pairs[index]
  index2 = 0
  while index2 < number_pair.length
    number = number_pair[index2]
    flattened << number
    index2 += 1
  end
  index += 1
end
p flattened

#  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
#     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

letters1 = ["a", "b", "c"]
letters2 = ["d", "e", "f", "g"]
combined_letters = []
index = 0
while index < letters1.length
  index2 = 0
  while index2 < letters2.length
    combined_letters << letters1[index] + letters2[index2]
    index2 += 1
  end
  index += 1
end
p combined_letters


#  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
#     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

letters = ["a", "b", "c", "d"]
all_combined = []
index = 0
while index < letters.length
  index2 = 0
  while index2 < letters.length
    if index != index2
      all_combined << letters[index] + letters[index2]
    end
    index2 +=1
  end
  index +=1
end
p all_combined

#  4. Use a nested loop to find the largest product of any two different numbers within a given array.
#     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

numbers = [5, -2, 1, -9, -7, 2, 6]
largest_product = numbers[0] * numbers[1]
index = 0
while index < numbers.length
  current_number = numbers[index]
  index2 = 0
  while index2 < numbers.length
    if index != index2
      other_number = numbers[index2]
      product = current_number * other_number
      if product > largest_product
        largest_product = product
      end
    end
    index2 += 1
  end
  index += 1
end
p largest_product

#  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
#     For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

numbers = [[1, 3], [8, 9], [2, 16]]
total_sum = 0
index = 0
while index < numbers.length
  number = numbers[index]
  index2 = 0
  while index2 < number.length
    num = number[index2]
    total_sum = total_sum + num
    index2 += 1
  end
  index += 1
end
p total_sum


#  6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
#     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

numbers1 = [1, 2]
numbers2 = [6, 7, 8]
sums = []
index = 0
while index < numbers1.length
  index2 = 0
  while index2 < numbers2.length
    sums << numbers1[index] + numbers2[index2]
    index2 += 1
  end
  index += 1
end
p sums


#  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
#     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

numbers = [2, 8, 3]
number_products = []
index = 0
while index < numbers.length
  current_number = numbers[index]
  index2 = 0
  while index2 < numbers.length
    other_number = numbers[index2]
    number_products << current_number * other_number
    index2 += 1
  end
  index += 1
end
p number_products

#  8. Use a nested loop to find the largest sum of any two different numbers within an array.
#     For example, [1, 8, 3, 10] becomes 18.

numbers = [1, 8, 3, 10]
largest_combo = numbers[0] + numbers[1]
index = 0
while index < numbers.length
  index2 = 0
  while index2 < numbers.length
    if index != index2
      sum = numbers[index] + numbers[index2]
      if sum > largest_combo
        largest_combo = sum
        end
      end
      index2 += 1
    end 
    index += 1
  end
  p largest_combo

#  9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
#     For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

numbers = [2, 5, 3, 1, 0, 7, 11]
result = false
index = 0
while index < numbers.length
  current_number = numbers[index]
  index2 = 0
  while index2 < numbers.length
    if index != index2
      other_number = numbers[index2]
      if current_number + other_number == 10 && result == false
        result = [current_number, other_number]
      end
    end
    index2 += 1
  end
  index += 1
end
p result

# 10. Use a nested loop to convert an array of string arrays into a single string.
#     For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

nested_words = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]]
combined_word = ""
index = 0
while index < nested_words.length
  index2 = 0
  while index2 < nested_words[index].length
    combined_word = combined_word + nested_words[index][index2]
    index2 += 1
  end
  index += 1
end
p combined_word