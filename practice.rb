#ruby practice.rb ***

###while loops###

#  1. Start with an array of numbers and create a new array with only the numbers less than 20.
#     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

numbers = [2, 6, 67, 7, 100]
index = 0
new_numbers = []
while index < numbers.length
  if numbers[index] < 20
    new_numbers << numbers[index]
  end
index = index + 1
end
p new_numbers


#  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
#     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

strings = ["winter", "spring", "summer", "fall"]
index = 0
w_words = []
while index < strings.length
  if strings[index][0] == "w"
    w_words << strings[index]
  end
  index = index + 1
end
p w_words

#  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

items = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1},
  {name: "notebook", price: 12},
  {name: "eraser", price: 3}, 
  {name: "book", price: 4}
  ] 
index = 0
cheap = []
while index < items.length
  if items[index][:price] < 5
    cheap << items[index]
  end
  index = index + 1
end
p cheap


#  4. Start with an array of numbers and create a new array with only the even numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

numbers = [23, 6, 56, 6, 13]
index = 0
even_numbers = []
while index < numbers.length
  if numbers[index] % 2 == 0
    even_numbers << numbers[index]
  end
  index += 1
end
p even_numbers

#  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
#     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

strings = ["the", "love", "of", "a", "cat"]
index = 0
shorties = []
while index < strings.length
  if strings[index].length < 4
    shorties << strings[index]
  end
  index += 1
end
p shorties

#  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

items = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1},
  {name: "notebook", price: 12},
  {name: "eraser", price: 3}, 
  {name: "book", price: 4}
  ]
index = 0 
short_names = []
while index < items.length
  if items[index][:name].length < 6
    short_names << items[index]
  end
  index += 1
end
p short_names


#  7. Start with an array of numbers and create a new array with only the numbers less than 10.
#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

numbers = [234, 34, 67, 3, 6, 1]
index = 0
small_numbers = []
while index < numbers.length
  if numbers[index] < 10
    small_numbers << numbers[index]
  end
  index += 1
end
p small_numbers

#  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

strings = ["i", "eat", "big", "breakfast"]
index = 0
no_b_words = []
while index < strings.length
  if strings[index][0] != "b"
    no_b_words << strings[index]
  end
  index += 1
end
p no_b_words


#  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].


items = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1},
  {name: "notebook", price: 12},
  {name: "eraser", price: 3}, 
  {name: "book", price: 4}
  ]
index = 0
low_price = []
while index < items.length
  if items[index][:price] < 10
    low_price << items[index]
  end
  index += 1
end
p low_price

# 10. Start with an array of numbers and create a new array with only the odd numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].


numbers = [3, 6, 23, 56, 100]
index = 0
odd_numbers = []
while index < numbers.length
  if numbers[index] % 2 == 1
    odd_numbers << numbers[index]
  end
  index += 1
end
p odd_numbers