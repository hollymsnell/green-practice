#ruby practice.rb ***

#***while loops


#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

numbers = [5, 10, 8, 3]
sum = 0
index = 0
while index < numbers.length
  sum = sum + numbers[index]
  index = index + 1
end
p sum


#  2. Start with an array of strings and combine them all into a single string.
#     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

strings = ["volleyball", "basketball", "badminton"]
word = ""
index = 0
while index < strings.length
  word = word + strings[index]
  index = index + 1
end
p word

#  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
sum = 0
index = 0
while index < hashes.length
  sum = sum + hashes[index][:price]
  index = index + 1
end
p sum

#  4. Start with an array of numbers and compute the the minumum number.
#     For example, [5, 10, 8, 3, 9] becomes 3.

numbers = [5, 10, 8, 3, 9]
min_num = numbers[0]
index = 0
while index < numbers.length
  number = numbers[index]
  if number < min_num
    min_num = number
  end
  index = index + 1
end
p min_num


#  5. Start with an array of strings and compute the total length of all the strings.
#     For example, ["volleyball", "basketball", "badminton"] becomes 29.

strings = ["volleyball", "basketball", "badminton"]
lengthsum = 0
index = 0
while index < strings.length
  lengthsum = lengthsum + strings[index].length
  index = index + 1
end
p lengthsum


#  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
lowest_price = hashes[0]
index = 0
while index < hashes.length
  price = hashes[index]
  if price[:price] < lowest_price[:price]
    lowest_price = price
  end
  index = index + 1
end
p lowest_price


#  7. Start with an array of numbers and compute product of all the numbers.
#     For example, [5, 10, 8, 3] becomes 1200.

numbers = [5, 10, 8, 3]
product = 1
index = 0
while index < numbers.length
  product = product * numbers[index]
  index = index + 1
end
p product


#  8. Start with an array of strings and combine them all into a single string, separated by dashes.
#     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

strings = ["volleyball", "basketball", "badminton"]
dashes = "-"
index = 0
while index < strings.length
  dashes = dashes + strings[index] + "-"
  index = index + 1
end
p dashes


#  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
short_name = hashes[0]
index = 0
while index < hashes.length
  shortest = hashes[index]
  if shortest[:name].length < short_name[:name].length
    short_name = shortest
  end
  index = index + 1
end
p short_name


# 10. Start with an array of numbers and compute the maximum number.
#     For example, [5, 10, 8, 3] becomes 10.

numbers = [5, 10, 8, 3]
max = 0 
index = 0
while index < numbers.length
  if numbers[index] > max
    max = numbers[index]
  end
  index = index + 1
end
p max


###.each


#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

array = [5, 10, 8, 3]
sum = 0
array.each do |array|
  sum = sum + array
end
p sum


#  2. Start with an array of strings and combine them all into a single string.
#     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

words = ["volleyball", "basketball", "badminton"]
long = ""
words.each do |word|
  long = long + word
end
p long



#  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] 
total = 0
items.each do |item|
  total = total + item[:price]
end
p total

#  4. Start with an array of numbers and compute the the minumum number.
#     For example, [5, 10, 8, 3, 9] becomes 3.

numbers = [5, 10, 8, 3, 9]
min_num = numbers[0]
numbers.each do |number|
  if number < min_num
    min_num = number
  end
end
p min_num


#  5. Start with an array of strings and compute the total length of all the strings.
#     For example, ["volleyball", "basketball", "badminton"] becomes 29.

sports = ["volleyball", "basketball", "badminton"]
lengths = 0
sports.each do |sport|
  lengths = lengths + sport.length
end
p lengths


#  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] 
lowest_price = items[0]
items.each do |item|
  if item[:price] < lowest_price[:price]
    lowest_price = item
  end
end
p lowest_price


#  7. Start with an array of numbers and compute product of all the numbers.
#     For example, [5, 10, 8, 3] becomes 1200.

numbers = [5, 10, 8, 3]
product = 1
numbers.each do |number|
  product = product * number 
end
p product

#  8. Start with an array of strings and combine them all into a single string, separated by dashes.
#     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

sports = ["volleyball", "basketball", "badminton"]
single_string = "-"
sports.each do |sport|
  single_string = single_string + "#{sport}-"
end
p single_string


#  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] 
short_name = items[0]
items.each do |item|
  if item[:name].length < short_name[:name].length
    short_name = item
  end
end
p short_name


# 10. Start with an array of numbers and compute the maximum number.
#     For example, [5, 10, 8, 3] becomes 10.

numbers = [5, 10, 8, 3]
maximum = numbers[0]
numbers.each do |number|
  if number > maximum
    maximum = number
  end
end
p maximum




###.reduce

#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

numbers = [5, 10, 8, 3]
sum = numbers.reduce(0) do |sum, number|
  sum + number
end
p sum

#  2. Start with an array of strings and combine them all into a single string.
#     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

sports = ["volleyball", "basketball", "badminton"]
string = sports.reduce("") do |string, sport|
  sport + string
end
p string


#  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
sum = items.reduce(0) do |sum, item|
  item[:price] + sum
end
p sum

#  4. Start with an array of numbers and compute the the minumum number.
#     For example, [5, 10, 8, 3, 9] becomes 3.

numbers = [5, 10, 8, 3, 9]
minumum = numbers.reduce(numbers[0]) do |minumum, number|
  if number < minumum
    number
 else
  minumum
  end
end
p minumum

#  5. Start with an array of strings and compute the total length of all the strings.
#     For example, ["volleyball", "basketball", "badminton"] becomes 29.

sports = ["volleyball", "basketball", "badminton"]
total_length = sports.reduce(0) do |total, sport|
  total + sport.length
end
p total_length


#  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
lowest_price = items.reduce(items[0]) do |lowest_price, item|
  if item[:price] < lowest_price[:price]
    item
  else
    lowest_price
  end
end
p lowest_price



#  7. Start with an array of numbers and compute product of all the numbers.
#     For example, [5, 10, 8, 3] becomes 1200.

numbers = [5, 10, 8, 3]
product = numbers.reduce(1) do |product, number|
  product * number
end
p product

#  8. Start with an array of strings and combine them all into a single string, separated by dashes.
#     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

sports = ["volleyball", "basketball", "badminton"]
single_string = sports.reduce("-") do |single_string, sport|
  single_string + sport
end
p single_string

#  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
short_name = items.reduce(items[0]) do |short_name, item|
  if item[:name].length < short_name[:name].length
    item
  else
    short_name
  end
end
p short_name

# 10. Start with an array of numbers and compute the maximum number.
#     For example, [5, 10, 8, 3] becomes 10.

numbers = [5, 10, 8, 3]
maximum = numbers.reduce(numbers[0]) do |maximum, number|
  if number > maximum
    number
  else
    maximum
  end
end
  p maximum