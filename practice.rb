#ruby practice.rb ***

#***while loop***

#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

numbers = [4, 16, 2, 7]
new_numbers = []
index = 0
while index < numbers.length
  new_numbers << numbers[index] * 3
  index = index + 1
end

p new_numbers

#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

strings = ["movies", "books", "magazines", "puzzles"]
new_strings = []
index = 0 
while index < strings.length
  new_strings << strings[index].upcase
  index += 1
end

p new_strings

#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

people = [
  {name: "Alice", age: 27}, 
  {name: "Blane", age: 16}
]
names = []
index = 0
while index < people.length
  names << people[index][:name]
  index += 1
end

p names

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

numbers = [12, 2, 32, 0]
added = []
index = 0
while index < numbers.length
  added << numbers[index] + 7
  index += 1
end

p added

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

foods = ["rice", "beans", "corn", "cabbage"]
lengths = []
index = 0
while index < foods.length
  lengths << foods[index].length
  index += 1
end

p lengths

#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

people = [
  {name: "Holly", age: 32},
  {name: "Rico", age: 37}
]
ages = []
index = 0
while index < people.length
  ages << people[index][:age]
  index += 1
end
p ages

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

numbers = [12, 23, 6, 8]
divided = []
index = 0
while index < numbers.length
  divided << numbers[index] / 2.0
  index += 1
end
p divided

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

flowers = ["rose", "tulip", "carnation", "peony"]
letter = []
index = 0
while index < flowers.length
  letter << flowers[index][0]
  index += 1
end
p letter

# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

people = [
  {name: "Holly", age: 32},
  {name: "Rico", age: 37}
]
doubled = []
index = 0
while index < people.length
  doubled << people[index][:age] * 2
  index += 1
end
p doubled

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

numbers = [23, 567, 1, 0]
to_string = []
index = 0
while index < numbers.length
  to_string << numbers[index].to_s 
  index += 1
end
p to_string


#***.each***

#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

numbers = [1, 4, 45, 3]
trippled = []
numbers.each do |number|
  trippled << number * 3
end
p trippled


#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

seasons = ["summer", "fall", "winter", "spring"]
capitalized = []
seasons.each do |season|
  capitalized << season.upcase
end
p capitalized

#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

people = [
  {name: "Holly", age: 32},
  {name: "Rico", age: 37}
]
names = []
people.each do |person|
  names << person[:name]
end
p names

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

numbers = [56, 2, 9, 3, 100]
added = []
numbers.each do |number|
  added << number + 7
end
p added

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

weathers = ["rain", "sunny", "snow", "torrential downpour"]
number_of_letters = []
weathers.each do |weather|
  number_of_letters << weather.length
end
p number_of_letters

#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

people = [
  {name: "Holly", age: 32},
  {name: "Rico", age: 37}
]
ages = []
people.each do |person|
  ages << person[:age]
end
p ages

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

numbers = [13, 55, 6, 123]
halved = []
numbers.each do |number|
  halved << number/2.0
end
p halved

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

emotions = ["happy", "sad", "afraid", "excited"]
first_letter = []
emotions.each do |emotion|
  first_letter << emotion[0]
end
p first_letter

# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

people = [
  {name: "Holly", age: 32},
  {name: "Rico", age: 37}
]
doubled_age = []
people.each do |person|
  doubled_age << person[:age] * 2
end
p doubled_age

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

numbers = [123, 1, 2, 3]
strings = []
numbers.each do |number|
  strings << number.to_s 
end
p strings

#***.map***

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