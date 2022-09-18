#ruby practice.rb ***


# 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

array = ["winter", "spring", "summer"]
array << "fall"
array << "seasons"
p array

# 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

letters = ["h", "o", "l", "l"]
letters[1] = 3
p letters

# 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

numbers = [5, 4, 3, 2, 1]
index = 0
while index < numbers.length
  p numbers[index]
  index = index + 1
end

# 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

numbers = [5]
numbers << 6
numbers << 10
numbers << 8000
p numbers


# 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

strings = ["i'm gonna scream", "you're a freak", "jolly good day innit"]
strings[2] = strings[2].upcase
p strings

# 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

names = ["holly", "james", "terilyn"]
index = 0
while index < names.length
  p names[index]
  index = index + 1
end

# 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

array = ["can i have", "some of your"]
array << "applesauce"
p array

# 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

numbers = [5, 7, 9, 3, 1]
numbers[0] = numbers[0] * 10
p numbers

# 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

numbers = [456456, 567]
index = 0
while index < numbers.length
  p numbers[index]
  index = index + 1
end

# 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

countries = ["USA", "Canada", "Guam"]
countries << "Australia"
p countries