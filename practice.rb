#ruby practice.rb ***

#***while loop***

#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

numbers = [1, 2, 3]
new_array = []
index = 0 
while index < numbers.length
  number = numbers[index]
  new_array << number * 3
  index += 1
end

p new_array


#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

strings = ["stay", "away", "from", "me"]
upcased = []
index = 0
while index < strings.length
  string = strings[index]
  upcased << string.upcase
  index += 1
end

p upcased

#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

people = [
  {name: "Alice", age: 27}, 
  {name: "Blane", age: 16}
]
names = []
index = 0
while index < people.length
  person = people[index]
  names << person[:name]
  index += 1
end
p names

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

numbers = [23, 2, 5, 1]
added_seven = []
index = 0
while index < numbers.length
  number = numbers[index]
  added_seven << number + 7
  index += 1
end
p added_seven

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

strings = ["get", "away", "from", "me"]
string_lengths = []
index = 0
while index < strings.length
  string = strings[index]
  string_lengths << string.length
  index += 1
end
p string_lengths

#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
ages = []
index = 0
while index < people.length
  person = people[index]
  ages << person[:age]
  index += 1
end
p ages

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

numbers = [3, 34, 6]
halved = []
index = 0
while index < numbers.length
  number = numbers[index]
  halved << number / 2.0
  index += 1
end
p halved

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

strings = ["people", "are", "different"]
first_letters = []
index = 0
while index < strings.length
  string = strings[index]
  first_letters << string[0]
  index += 1
end
p first_letters

# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
doubled_ages = []
index = 0
while index < people.length
  person = people[index]
  doubled_ages << person[:age] * 2
  index += 1
end
p doubled_ages

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

numbers = [3, 6, 23]
strings = []
index = 0
while index < numbers.length
  number = numbers[index]
  strings << number.to_s
  index += 1
end
p strings

#.each

#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

numbers = [24, 45, 1]
trippled = []
numbers.each do |number|
  trippled << number * 3
end
p trippled

#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

strings = ["have", "you", "been", "here"]
capitalized = []
strings.each do |string|
  capitalized << string.upcase
end
p capitalized

#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
names = []
people.each do |person|
  names << person[:name]
end
p names

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

numbers = [6, 45, 1, 8]
added_seven = []
numbers.each do |number|
  added_seven << number + 7
end
p added_seven

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

strings = ["aquarius", "leo", "scorpio"]
string_lengths = []
strings.each do |string|
  string_lengths << string.length
end
p string_lengths

#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
ages = []
people.each do |person|
  ages << person[:age]
end
p ages

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].



#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].