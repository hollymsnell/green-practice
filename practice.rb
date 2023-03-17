#ruby practice.rb ***


###while loops##

#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

# numbers = [2, 4, 6]
# new_array = []
# index = 0
# while index < numbers.length
#   new_array << numbers[index] * 3
#   index = index + 1
# end
# p new_array

# #  2. Start with an array of strings and create a new array with each string upcased.
# #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

# words = ["welcome", "leave"]
# big_words = []
# index = 0
# while index < words.length
#   big_words << words[index].upcase
#   index = index + 1
# end
#  p big_words

# #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
# #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

# people = [
#   {name: "Holly", age: 31}, {name:"Jenny", age: 23}
# ]
# names = []
# index = 0
# while index < people.length
#   names << people[index][:name]
#   index = index + 1
# end
# p names

# #  4. Start with an array of numbers and create a new array with each number plus 7.
# #     For example, [1, 2, 3] becomes [8, 9, 10].

# numbers = [5, 8, 10]
# bigger = []
# index = 0
# while index < numbers.length
#   bigger << numbers[index] + 7
#   index = index + 1
# end
# p bigger

# #  5. Start with an array of strings and create a new array with each string's length.
# #     For example, ["hello", "goodbye"] becomes [5, 7].

# strings = ["baby", "wisdom"]
# lengths = []
# index = 0
# while index < strings.length
#   lengths << strings[index].length
#   index = index + 1
# end
# p lengths

# #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
# #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

# people = [
#   {name: "Holly", age: 31}, {name:"Jenny", age: 23}
# ]
# ages = []
# index = 0
# while index < people.length
#   ages << people[index][:age]
#   index += 1
# end
# p ages

# #  7. Start with an array of numbers and create a new array with each number divided by 2.
# #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

# numbers = [56, 88, 4]
# divided = []
# index = 0
# while index < numbers.length
#   divided << numbers[index] / 2
#   index += 1
# end
# p divided

# #  8. Start with an array of strings and create a new array with each string's first letter only.
# #     For example, ["hello", "goodbye"] becomes ["h", "g"].

# strings = ["winter", "spring", "summer", "fall"]
# letter = []
# index = 0
# while index < strings.length
#   letter << strings[index][0]
#   index += 1
# end
# p letter

# # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
# #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

# people = [
#   {name: "Holly", age: 31}, 
#   {name:"Jenny", age: 23}
# ]
# older = []
# index = 0
# while index < people.length
#   older << people[index][:age] * 2
#   index += 1
# end
# p older

# # 10. Start with an array of numbers and create a new array with each number converted into a string.
# #     For example, [1, 2, 3] becomes ["1", "2", "3"].

# numbers = [7, 8, 9]
# words = []
# index = 0
# while index < numbers.length
#   words << numbers[index].to_s
#   index += 1
# end
# p words


###.each###
# #  1. Start with an array of numbers and create a new array with each number times 3.
# #     For example, [1, 2, 3] becomes [3, 6, 9].

# numbers = [1, 2, 3, 4]
# new_numbers = []
# numbers.each do |number|
#   new_numbers << number * 3
# end
# p new_numbers

# #  2. Start with an array of strings and create a new array with each string upcased.
# #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

# strings = ["joy", "pain", "sunshine", "rain"]
# upcased = []
# strings.each do |string|
#   upcased << string.upcase
# end
# p upcased

# #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
# #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

# people = [
#   {name: "Holly", age: 31}, 
#   {name:"Jenny", age: 23}
# ]
# names = []
# people.each do |person|
#   names << person[:name]
# end
# p names

# #  4. Start with an array of numbers and create a new array with each number plus 7.
# #     For example, [1, 2, 3] becomes [8, 9, 10].

# numbers = [7, 6, 23]
# added = []
# numbers.each do |number|
#   added << number + 7
# end
# p added

# #  5. Start with an array of strings and create a new array with each string's length.
# #     For example, ["hello", "goodbye"] becomes [5, 7].

# strings = ["call", "me", "maybe"]
# lengths = []
# strings.each do |string|
#   lengths << string.length
# end
# p lengths

# #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
# #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

# people = [
#   {name: "Holly", age: 31}, 
#   {name:"Jenny", age: 23}
# ]
# ages = []
# people.each do |person|
#   ages << person[:age]
# end
# p ages

# #  7. Start with an array of numbers and create a new array with each number divided by 2.
# #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

# numbers = [20, 100, 1000]
# halved = []
# numbers.each do |number|
#   halved << number / 2
# end
# p halved

# #  8. Start with an array of strings and create a new array with each string's first letter only.
# #     For example, ["hello", "goodbye"] becomes ["h", "g"].

# strings = ["i", "love", "coding"]
# letter = []
# strings.each do |string|
#   letter << string[0]
# end
# p letter

# # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
# #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

# people = [
#   {name: "Holly", age: 31}, 
#   {name:"Jenny", age: 23}
# ]
# older = []
# people.each do |person|
#   older << person[:age] * 2
# end
# p older

# # 10. Start with an array of numbers and create a new array with each number converted into a string.
# #     For example, [1, 2, 3] becomes ["1", "2", "3"].

# numbers = [4, 67, 1000]
# strings = []
# numbers.each do |number|
#   strings << number.to_s
# end
# p strings


###.map###

#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

numbers = [6, 7, 9]
new_numbers = numbers.map do |number|
  number * 3
end
  p new_numbers


#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

strings = ["hey", "bye"]
new_strings = strings.map do |string|
  string.upcase
end
p new_strings

#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

people = [
     {name: "Holly", age: 31}, 
     {name:"Jenny", age: 23}
   ]
   names = people.map do |person|
    person[:name]
   end
   p names

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

numbers = [45, 7, 1]
added = numbers.map do |number|
  number + 7
end
p added

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

strings = ["hi", "farewell"]
number = strings.map do |string|
  string.length
end
p number

#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

people = [
  {name: "Holly", age: 31}, 
  {name:"Jenny", age: 23}
]
age = people.map do |person|
  person[:age]
end
p age

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

numbers = [5, 45, 90]
divided = numbers.map do |number|
  number / 2
end
p divided

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

strings = ["winter", "summer"]
letter = strings.map do |string|
  string[0]
end
p letter

# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

people = [
  {name: "Holly", age: 31}, 
  {name:"Jenny", age: 23}
]
older = people.map do |person|
  person[:age] * 2
end
p older

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

numbers = [45, 56, 2]
strings = numbers.map do |number|
  number.to_s
end
p strings