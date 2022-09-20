#ruby practice.rb ***


#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

numbers = [1, 2, 3]
new_numbers = []
index = 0
while index < numbers.length
  new_numbers << numbers[index] * 3
  index = index + 1
end
p new_numbers

#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].


strings = ["hello", "goodbye"]
new_strings = []
index = 0
while index < strings.length
  new_strings << strings[index].upcase
  index = index + 1
end
p new_strings


#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

hashes = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
new_array = []
index = 0
while index < hashes.length
new_array << hashes[index][:name]
index = index + 1
end
p new_array


#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

array = [1, 2, 3]
new_array = []
index = 0
while index < array.length
  new_array << array[index] + 7
  index = index + 1
end
p new_array


#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

array = ["hello", "goodbye"]
new_array = []
index = 0 
while index < array.length
  new_array << array[index].length
  index = index + 1
end
p new_array


#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

hashes = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
new_array = []
index = 0
while index < hashes.length
  new_array << hashes[index][:age]
  index = index + 1
end
p new_array


#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].


numbers = [1, 2, 3]
divided = []
index = 0 
while index < numbers.length
  divided << numbers[index] / 2.0
  index = index + 1
end
p divided


#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

strings = ["hello", "goodbye"]
first_letter = []
index = 0 
while index < strings.length
  first_letter << strings[index][0]
  index = index + 1
end
p first_letter


# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].


hashes = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
new_array = []
index = 0 
while index < hashes.length
  new_array << hashes[index][:age] * 2
  index = index + 1
end
p new_array


# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].


numbers = [1, 2, 3]
strings = []
index = 0
while index < numbers.length
  strings << numbers[index].to_s
  index = index + 1
end
p strings