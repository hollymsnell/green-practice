#ruby practice.rb ***

# 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

array = ["hey", "hello", "greetings"]
array << "sup"
array << "howdy"
p array

# 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

letters = ["a", "b", "c", "d"]
letters[1] = "turkey"
p letters

# 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

numbers = [1, 45, 6, 7, 8]
index = 0
while index < numbers.length
  p numbers[index]
  index = index + 1
end

# 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

number = [8]
number << 89
number << 123
p number

# 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

words = ["jack", "jill", "bye"]
words[2] = words[2].upcase
p words

# 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

names = ["holly", "rico", "dan"]
index = 0
while index < names.length
  p names[index]
  index = index + 1
end

# 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

lyrics = ["i've been living fast", "feelin really bad"]
lyrics << "it's okay cuz i'm rich, psych i'm still sad as a bitch"
p lyrics

# 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

digits = [7 ,8, 23, 56, 1]
digits[0] = digits[0] * 10
p digits

# 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

numbers = [456, 9000]
index = 0
while index < numbers.length
  p numbers[index]
  index = index + 1
end

# 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

countries = ["China", "USA", "Mexico"]
countries << "Cuba"
p countries

