#ruby practice.rb ***

#***while loop ***

#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

numbers = [5, 7, 1, 2]
sum = 0
index = 0
while index < numbers.length
  sum = numbers[index] + sum
  index += 1
end
p sum

#  2. Start with an array of strings and combine them all into a single string.
#     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

items = ["car", "pin", "window", "bowl"]
single_string = ""
index = 0
while index < items.length
  single_string = single_string + items[index]
  index += 1
end
p single_string

#  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

supplies = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1}, 
  {name: "book", price: 4}
]
total_price = 0
index = 0
while index < supplies.length
  total_price = total_price + supplies[index][:price]
  index += 1
end
p total_price

#  4. Start with an array of numbers and compute the the minumum number.
#     For example, [5, 10, 8, 3, 9] becomes 3.

numbers = [5, 6, 12, 18, 1, -1]
minimum = numbers[0]
index = 0
while index < numbers.length
  if numbers[index] < minimum
    minimum = numbers[index]
  end
  index = index + 1
end
p minimum

#  5. Start with an array of strings and compute the total length of all the strings.
#     For example, ["volleyball", "basketball", "badminton"] becomes 29.

words = ["happy", "sad", "winter", "summer"]
sum = 0
index = 0
while index < words.length
  sum = words[index].length + sum
  index += 1
end
p sum


#  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

supplies = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1}, 
  {name: "book", price: 4}
]
lowest_price = supplies[0]
index = 0
while index < supplies.length
  if supplies[index][:price] < lowest_price[:price]
    lowest_price = supplies[index]
  end
  index += 1
end
p lowest_price

#  7. Start with an array of numbers and compute product of all the numbers.
#     For example, [5, 10, 8, 3] becomes 1200.

numbers = [23, 1, 56, 5]
product = 1
index = 0
while index < numbers.length
  product = product * numbers[index]
  index += 1
end
p product

#  8. Start with an array of strings and combine them all into a single string, separated by dashes.
#     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

strings = ["happy", "summer", "winter", "sad"]
dashed = "-"
index = 0
while index < strings.length
  dashed += "#{strings[index]}-"
  index += 1
end
p dashed

#  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

supplies = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1}, 
  {name: "book", price: 4}
]
shortest_name = supplies[0]
index = 0
while index < supplies.length
  if supplies[index][:name].length < shortest_name[:name].length
    shortest_name = supplies[index]
  end
  index += 1
end
p shortest_name

# 10. Start with an array of numbers and compute the maximum number.
#     For example, [5, 10, 8, 3] becomes 10.

numbers = [234, 2, 34, 6, 678]
maximum = numbers[0]
index = 0
while index < numbers.length
  if numbers[index] > maximum
    maximum = numbers[index]
  end
  index += 1
end
p maximum

#***.each***


#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

numbers = [34, 1, 2, 8]
sum = 0
numbers.each do |number|
  sum = sum + number
end
p sum

#  2. Start with an array of strings and combine them all into a single string.
#     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

words = ["joy", "pain", "sunshine", "rain"]
single_string = ""
words.each do |word|
  single_string += word
end
p single_string

#  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

supplies = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1}, 
  {name: "book", price: 4}
]
price_sum = 0
supplies.each do |supply|
  price_sum += supply[:price]
end
p price_sum

#  4. Start with an array of numbers and compute the the minumum number.
#     For example, [5, 10, 8, 3, 9] becomes 3.

numbers = [-34, 45, 5, 1, 0, -100]
minimum = numbers[0]
numbers.each do |number|
  if number < minimum
    minimum = number
  end
end
p minimum

#  5. Start with an array of strings and compute the total length of all the strings.
#     For example, ["volleyball", "basketball", "badminton"] becomes 29.

strings = ["boy", "girl", "cat", "dog"]
total = 0
strings.each do |string|
  total += string.length
end
p total

#  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

supplies = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1}, 
  {name: "book", price: 4}
]
lowest_price = supplies[0]
supplies.each do |supply|
  if supply[:price] < lowest_price[:price]
    lowest_price = supply
  end
end
p lowest_price

#  7. Start with an array of numbers and compute product of all the numbers.
#     For example, [5, 10, 8, 3] becomes 1200.

numbers = [12, 23, 34, 45]
product = 1
numbers.each do |number|
  product = product * number
end
p product

#  8. Start with an array of strings and combine them all into a single string, separated by dashes.
#     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

strings = ["charlie", "bit", "my", "finger"]
dashed = "-"
strings.each do |string|
  dashed = dashed + "#{string}-"
end
p dashed

#  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

supplies = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1}, 
  {name: "book", price: 4}
]
shortest_name = supplies[0]
supplies.each do |supply|
  if supply[:name].length < shortest_name[:name].length
    shortest_name = supply
  end
end
p shortest_name

# 10. Start with an array of numbers and compute the maximum number.
#     For example, [5, 10, 8, 3] becomes 10.

numbers = [45, 1, 2, 34, 100, 6]
maximum = numbers[0]
numbers.each do |number|
  if number > maximum
    maximum = number
  end
end
p maximum

#**.reduce**

#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

numbers = [45, 2, 5, 11]
sum = numbers.reduce(0) do |sum, number|
  sum + number
end
p sum


#  2. Start with an array of strings and combine them all into a single string.
#     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

words = ["have", "a", "nice", "day"]
single_string = words.reduce("") do |string, word|
  string + word
end
p single_string

#  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

supplies = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1}, 
  {name: "book", price: 4}
]
price_sum = supplies.reduce(0) do |sum, supply|
  sum + supply[:price]
end
p price_sum

#  4. Start with an array of numbers and compute the the minumum number.
#     For example, [5, 10, 8, 3, 9] becomes 3.

numbers = [2, -1, 34, 5]
minimum = numbers.reduce(numbers[0]) do |min, number|
  if number < min
    number
  else
    min
  end
end
p minimum

#  5. Start with an array of strings and compute the total length of all the strings.
#     For example, ["volleyball", "basketball", "badminton"] becomes 29.

sports = ["soccer", "tennis", "track"]
length_of_strings = sports.reduce(0) do |length, sport|
  length + sport.length
end
p length_of_strings

#  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

supplies = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1}, 
  {name: "book", price: 4}
]
lowest_price = supplies.reduce(supplies[0]) do |price, supply|
  if supply[:price] < price[:price]
    supply
  else
    price
  end
end
p lowest_price

#  7. Start with an array of numbers and compute product of all the numbers.
#     For example, [5, 10, 8, 3] becomes 1200.

numbers = [13, 2, 5]
product = numbers.reduce(1) do |product, number|
  product * number
end
p product

#  8. Start with an array of strings and combine them all into a single string, separated by dashes.
#     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

strings = ["make", "that", "money", "girl"]
dashed = strings.reduce("-") do |dash, string|
  dash + "#{string}-"
end
p dashed

#  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

supplies = [
  {name: "chair", price: 100}, 
  {name: "pencil", price: 1}, 
  {name: "book", price: 4}
]
shortest_name = supplies.reduce(supplies[0]) do |name, supply|
  if supply[:name].length < name[:name].length
    supply
  else
    name
  end
end
p shortest_name

# 10. Start with an array of numbers and compute the maximum number.
#     For example, [5, 10, 8, 3] becomes 10.

numbers = [2, 304, 3, 34, 5]
maximum = numbers.reduce(numbers[0]) do |max, number|
  if number > max
    number
  else
    max
  end
end
p maximum