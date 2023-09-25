#ruby practice.rb ***

#***while loop ***

#  1. Start with an array of numbers and create a new array with only the numbers less than 20.
#     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

numbers = [45, 3, 6, 12]
less_than = []
index = 0
while index < numbers.length
  if numbers[index] < 20
    less_than << numbers[index]
  end
  index += 1
end
p less_than

#  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
#     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

words = ["wake", "me", "up", "go", "get"]
g_words = []
index = 0
while index < words.length
  if words[index][0] == "g"
    g_words << words[index]
  end
  index += 1
end
p g_words

#  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

items = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1},
  {name: "book", price: 4}
]
expensive = []
index = 0
while index < items.length
  if items[index][:price] > 5
    expensive << items[index]
  end
  index += 1
end
p expensive


#  4. Start with an array of numbers and create a new array with only the even numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

numbers = [4, 7, 2, 12, 15, 16]
evens = []
index = 0
while index < numbers.length
  if numbers[index] %2 == 0
    evens << numbers[index]
  end
  index += 1
end
p evens

#  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
#     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

words = ["start", "my", "engine", "boy", "pal"]
short_words = []
index = 0
while index < words.length
  if words[index].length < 4
    short_words << words[index]
  end
  index += 1
end
p short_words

#  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

items = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1},
  {name: "book", price: 4}
]
short_names = []
index = 0
while index < items.length
  if items[index][:name].length < 6
    short_names << items[index]
  end
  index += 1
end
p short_names

#  7. Start with an array of numbers and create a new array with only the numbers less than 10.
#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

numbers = [34, 2, 234, 5, 77]
less_than = []
index = 0
while index < numbers.length
  if numbers[index] < 10
    less_than << numbers[index]
  end
  index +=1
end
p less_than


#  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

words = ["boys", "and", "girls", "grow", "big"]
no_bee = []
index = 0
while index < words.length
  if words[index][0] != "b"
    no_bee << words[index]
  end
  index += 1
end
p no_bee

#  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

items = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1},
  {name: "book", price: 4}
]
low_price = []
index = 0
while index < items.length
  if items[index][:price] < 10
    low_price << items[index]
  end
  index += 1
end
p low_price

# 10. Start with an array of numbers and create a new array with only the odd numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

numbers = [5, 23, 12, 5, 19]
odds = []
index = 0
while index < numbers.length
  if numbers[index] % 2 == 1
    odds << numbers[index]
  end
  index += 1
end
p odds


#***.each***


#  1. Start with an array of numbers and create a new array with only the numbers less than 20.
#     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

numbers = [25, 45, 1, 43, 3]
less_than = []
numbers.each do |number|
  if number < 20
    less_than << number
  end
end
p less_than

#  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
#     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

words = ["way", "to", "go", "wayne"]
w_words = []
words.each do |word|
  if word[0] == "w"
    w_words << word
  end
end
p w_words

#  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

items = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1},
  {name: "book", price: 4}
]
high_price = []
items.each do |item|
  if item[:price] > 5
    high_price << item
  end
end
p high_price

#  4. Start with an array of numbers and create a new array with only the even numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

numbers = [12, 23, 24, 67, 4]
evens = []
numbers.each do |number|
  if number % 2 == 0
    evens << number
  end
end
p evens

#  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
#     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

names = ["bob", "william", "joy", "javier"]
short = []
names.each do |name|
  if name.length < 4
    short << name
  end
end
p short

#  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

items = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1},
  {name: "book", price: 4}
]
short_names = []
items.each do |item|
  if item[:name].length < 6
    short_names << item
  end
end
p short_names

#  7. Start with an array of numbers and create a new array with only the numbers less than 10.
#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

numbers = [6, 7, 123, 53, 1]
smaller = []
numbers.each do |number|
  if number < 10 
    smaller << number
  end
end
p smaller

#  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

words = ["bad", "babies", "are", "possible"]
no_bee = []
words.each do |word|
  if word[0] != "b"
    no_bee << word
  end
end
p no_bee

#  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

items = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1},
  {name: "book", price: 4}
]
cheap = []
items.each do |item|
  if item[:price] < 10
    cheap << item
  end
end
p cheap

# 10. Start with an array of numbers and create a new array with only the odd numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

numbers = [23, 56, 67, 2, 1, 0]
odds = []
numbers.each do |number|
  if number % 2 == 1
    odds << number
  end
end
p odds

#**.select**

#  1. Start with an array of numbers and create a new array with only the numbers less than 20.
#     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

numbers = [45, 3, 54, 23, 21, 19]
smaller = numbers.select do |number|
  number < 20
end
p smaller

#  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
#     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

words = ["why", "can't", "I", "breathe"]
w_words = words.select do |word|
  word[0] == "w"
end
p w_words


#  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

items = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1},
  {name: "book", price: 4}
]
expensive = items.select do |item|
  item[:price] > 5
end
p expensive

#  4. Start with an array of numbers and create a new array with only the even numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

numbers = [45, 23, 34, 12, 6, 7]
evens = numbers.select do |number|
  number % 2 == 0
end
p evens

#  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
#     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

words = ["stop", "being", "a", "big", "meany"]
short_words = words.select do |word|
  word.length < 4
end
p short_words


#  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

items = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1},
  {name: "book", price: 4}
]
short_names = items.select do |item|
  item[:name].length < 6
end
p short_names

#  7. Start with an array of numbers and create a new array with only the numbers less than 10.
#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

numbers = [23, 2, 45, 3]
smaller = numbers.select do |number|
  number < 10
end
p smaller

#  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

words = ["baby", "winter", "bashful", "wacky"]
no_bee = words.select do |word|
  word[0] != "b"
end
p no_bee

#  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

items = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1},
  {name: "book", price: 4}
]
cheaper = items.select do |item|
  item[:price] < 10
end
p cheaper

# 10. Start with an array of numbers and create a new array with only the odd numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

numbers = [34, 1, 3, 46, 9]
odds = numbers.select do |number|
  number % 2 == 1
end
p odds