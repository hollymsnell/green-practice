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

#  7. Start with an array of numbers and create a new array with only the numbers less than 10.
#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

#  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

#  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

# 10. Start with an array of numbers and create a new array with only the odd numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].
