#ruby practice.rb ***


###while loop##
#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

# numbers = [4, 56, 2]
# index = 0
# sum = 0
# while index < numbers.length
#   sum = sum + numbers[index]
#   index = index + 1
# end
# p sum

# #  2. Start with an array of strings and combine them all into a single string.
# #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

# strings = ["aint", "seen", "nothin", "yet"]
# index = 0
# long_boy = ""
# while index < strings.length
#   long_boy << strings[index]
#   index += 1
# end
# p long_boy

# #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
# #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

# items = [
#   {name: "bed", price: 100}, 
#   {name: "lamp", price: 1}, 
#   {name: "stool", price: 4},
#   {name: "plant", price: 7},
#   {name: "dresser", price: 50}
# ]
# index = 0
# sum = 0
# while index < items.length
#   sum = sum + items[index][:price]
#   index += 1
# end
# p sum

# #  4. Start with an array of numbers and compute the the minumum number.
# #     For example, [5, 10, 8, 3, 9] becomes 3.

# numbers = [34, 1, 45, 3, 14]
# index = 0
# min_num = numbers[0]
# while index < numbers.length
# if numbers[index] < min_num
#   min_num = numbers[index]
# end
# index += 1
# end
# p min_num

# #  5. Start with an array of strings and compute the total length of all the strings.
# #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

# strings = ["volleyball", "basketball", "badminton"]
# index = 0
# total_length = 0
# while index < strings.length
#   total_length = total_length + strings[index].length
#   index += 1
# end
# p total_length

# #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
# #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

# items = [
#   {name: "bed", price: 100}, 
#   {name: "lamp", price: 1}, 
#   {name: "stool", price: 4},
#   {name: "plant", price: 7},
#   {name: "dresser", price: 50}
# ]
# index = 0 
# lowest_price = items[0][:price]
# while index < items.length
#   if items[index][:price] < lowest_price
#     lowest_price = items[index][:price]
#   end
#   index += 1
# end
# p lowest_price

# #  7. Start with an array of numbers and compute product of all the numbers.
# #     For example, [5, 10, 8, 3] becomes 1200.

# numbers = [12, 6, 22, 1]
# index = 0
# product = 1
# while index < numbers.length
#   product = product * numbers[index]
#   index += 1
# end
# p product

# #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
# #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

# strings = ["summer", "fall", "winter", "spring"]
# index = 0
# joined = "-"
# while index < strings.length
#   string = strings[index]
#   joined += "#{string}-"
#   index += 1
# end
# p joined

# #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
# #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

# items = [
#   {name: "bed", price: 100}, 
#   {name: "lamp", price: 1}, 
#   {name: "stool", price: 4},
#   {name: "plant", price: 7},
#   {name: "dresser", price: 50}
# ]
# shortest_name = items[0]
# index = 0
# while index < items.length
#   if items[index][:name].length < shortest_name[:name].length
#     shortest_name = items[index][:name]
#   end
#   index += 1
# end
# p shortest_name

# # 10. Start with an array of numbers and compute the maximum number.
# #     For example, [5, 10, 8, 3] becomes 10.

# numbers = [5, 234, 66, 12]
# max_num = numbers[0]
# index = 0
# while index < numbers.length
#   if numbers[index] > max_num
#     max_num = numbers[index]
#   end
#   index += 1
# end
# p max_num




###.each###

#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

# numbers = [34, 56, 2, 84]
# sum = 0
# numbers.each do |number|
#   sum = sum + number
# end
# p sum

# #  2. Start with an array of strings and combine them all into a single string.
# #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

# strings = ["winter", "spring", "summer", "fall"]
# one_string = ""
# strings.each do |string|
#   one_string = one_string + string
# end
# p one_string

# #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
# #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

# items = [
#   {name: "bed", price: 100}, 
#   {name: "lamp", price: 1}, 
#   {name: "stool", price: 4},
#   {name: "plant", price: 7},
#   {name: "dresser", price: 50}
# ]
# sum = 0
# items.each do |item|
#   sum = sum + item[:price]
# end
# p sum

# #  4. Start with an array of numbers and compute the the minumum number.
# #     For example, [5, 10, 8, 3, 9] becomes 3.

# numbers = [34, 7, 23, 36, 9]
# min_num = numbers[0]
# numbers.each do |number|
#   if number < min_num
#     min_num = number
#   end
# end
# p min_num

# #  5. Start with an array of strings and compute the total length of all the strings.
# #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

# sports = ["volleyball", "basketball", "badminton"]
# length_sum = 0
# sports.each do |sport|
#   length_sum = length_sum + sport.length
# end
# p length_sum

# #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
# #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

# items = [
#   {name: "bed", price: 100}, 
#   {name: "lamp", price: 1}, 
#   {name: "stool", price: 4},
#   {name: "plant", price: 7},
#   {name: "dresser", price: 50}
# ]
# lowest_price = items[0]
# items.each do |item|
#   if item[:price] < lowest_price[:price]
#     lowest_price = item
#   end
# end
# p lowest_price

# #  7. Start with an array of numbers and compute product of all the numbers.
# #     For example, [5, 10, 8, 3] becomes 1200.

# numbers = [2, 5, 12]
# product = 1
# numbers.each do |number|
#   product = product * number
# end
# p product

# #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
# #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

# sports =["volleyball", "basketball", "badminton"]
# single = "-"
# sports.each do |sport|
#   single = single + "#{sport}-"
# end
# p single

# #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
# #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

# items = [
#   {name: "bed", price: 100}, 
#   {name: "lamp", price: 1}, 
#   {name: "stool", price: 4},
#   {name: "plant", price: 7},
#   {name: "dresser", price: 50}
# ]
# shortest_name = items[0]
# items.each do |item|
#   if item[:name].length < shortest_name[:name].length
#     shortest_name = item
#   end
# end
# p shortest_name

# # 10. Start with an array of numbers and compute the maximum number.
# #     For example, [5, 10, 8, 3] becomes 10.

# numbers = [6, 7, 8, 2]
# max_num = numbers[0]
# numbers.each do |number|
#   if number > max_num
#     max_num = number
#   end
# end
# p max_num

###.reduce ###

#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

numbers = [45, 1, 5, 1]
sum = numbers.reduce(0) do |sum, number|
  sum + number
end
p sum

#  2. Start with an array of strings and combine them all into a single string.
#     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

sports = ["volleyball", "basketball", "badminton"]
word = sports.reduce("") do |word, sport|
  word + sport
end
p word

#  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
total_price = items.reduce(0) do |total, item|
  total + item[:price]
end
p total_price

#  4. Start with an array of numbers and compute the the minumum number.
#     For example, [5, 10, 8, 3, 9] becomes 3.

numbers = [6, 88, 4, 1]
min_num = numbers.reduce(numbers[0]) do |min, number|
  if number < min 
  number
  else min
  end
end
p min_num

#  5. Start with an array of strings and compute the total length of all the strings.
#     For example, ["volleyball", "basketball", "badminton"] becomes 29.

sports = ["volleyball", "basketball", "badminton"]
total_length = sports.reduce(0) do |total, sport|
  sum + word.length
end
p total_length

#  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

#  7. Start with an array of numbers and compute product of all the numbers.
#     For example, [5, 10, 8, 3] becomes 1200.

#  8. Start with an array of strings and combine them all into a single string, separated by dashes.
#     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

#  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

# 10. Start with an array of numbers and compute the maximum number.
#     For example, [5, 10, 8, 3] becomes 10.