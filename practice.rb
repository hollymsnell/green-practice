#ruby practice.rb ***


###with while loops

#  1. Start with an array of numbers and create a new array with only the numbers less than 20.
#     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

numbers = [2, 32, 80, 18, 12, 3]
new_numbers = []
index = 0
while index < numbers.length
  if numbers[index] < 20
    new_numbers << numbers[index]
  end
  index = index + 1
end
p new_numbers


#  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
#     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].


strings = ["winner", "winner", "chicken", "dinner"]
wwords = []
index = 0
while index < strings.length
  if strings[index][0] == "w"
    wwords << strings[index]
  end
  index = index + 1
end
p wwords


#  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

array = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
pricey = []
index = 0
while index < array.length
  if array[index][:price] > 5
    pricey<< array[index] 
  end
  index = index + 1
end
p pricey


#  4. Start with an array of numbers and create a new array with only the even numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

numbers = [2, 4, 5, 1, 8, 9, 7]
evens = []
index = 0
while index < numbers.length
  if numbers[index] % 2 == 0
    evens << numbers[index]
  end
  index = index + 1
end
p evens


#  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
#     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

strings = ["a", "man", "a", "plan", "a", "canal", "panama"]
shorter = []
index = 0
while index < strings.length
  if strings[index].length < 4
    shorter << strings[index]
  end
  index = index + 1
end
p shorter


#  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

array = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] 
short_name = []
index = 0 
while index < array.length
  if array[index][:name].length < 6
    short_name << array[index]
  end
  index = index + 1
end
p short_name


#  7. Start with an array of numbers and create a new array with only the numbers less than 10.
#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

numbers = [8, 23, 0, 44, 1980, 3]
below_ten = []
index = 0
while index < numbers.length
  if numbers[index] < 10
    below_ten << numbers[index]
  end
  index = index + 1
end
p below_ten

#  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

strings = ["big", "little", "good", "bad"]
no_bee = []
index = 0
while index < strings.length
  if strings[index][0] != "b"
  no_bee << strings[index]
  end
  index = index + 1
end
p no_bee


#  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] 
cheaper = []
index = 0
while index < items.length
  if items[index][:price] < 10
    cheaper << items[index]
  end
  index = index + 1
end
p cheaper


# 10. Start with an array of numbers and create a new array with only the odd numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].


numbers = [2, 4, 5, 1, 8, 9, 7]
odds = []
index = 0
while index < numbers.length
  if numbers[index] % 2 == 1
    odds << numbers[index]
  end
  index = index + 1
end
p odds


###with .each do

#  1. Start with an array of numbers and create a new array with only the numbers less than 20.
#     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

array = [2, 32, 80, 18, 12, 3] 
twenty_less = []
array.each do |array|
  if array < 20
    twenty_less << array
  end
end
p twenty_less


#  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
#     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].


strings = ["winner", "winner", "chicken", "dinner"]
w_words = []
strings.each do |string|
  if string[0] == "w"
    w_words << string
  end
end
p w_words


#  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
new_array = []
hashes.each do |hash|
  if hash[:price] > 5
    new_array << hash
  end
end
p new_array

#  4. Start with an array of numbers and create a new array with only the even numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

numbers = [2, 4, 5, 1, 8, 9, 7]
even_numbers = []
numbers.each do |number|
  if number % 2 == 0
    even_numbers << number
  end
end
p even_numbers

#  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
#     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

strings = ["a", "man", "ok", "plan", "be", "canal", "panama"]
short_words = []
strings.each do |string|
  if string.length < 4
    short_words << string
  end
end
p short_words


#  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

#  7. Start with an array of numbers and create a new array with only the numbers less than 10.
#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

#  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

#  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

# 10. Start with an array of numbers and create a new array with only the odd numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].
