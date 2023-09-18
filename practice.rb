#ruby practice.rb ***

# 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

words = ["happy", "sad", "chill"]
words << "mellow"
words << "nostalgic"
p words

# 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

letters = ["t", "h", "i", "s"]
letters[1] = 6
p letters

# 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

numbers = [5, 56, 123, 2, 13]
index = 0
while index < numbers.length
  p numbers[index]
  index = index + 1
end

# 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

digits = [1]
digits << 2
digits << 3
p digits

# 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

animals = ["dog", "walrus", "penguin"]
animals[2] = animals[2].upcase
p animals

# 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

names = ["tyler", "wendy", "florence"]
index = 0
while index < names.length
  p names[index]
  index = index + 1
end

# 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

breeds = ["cocker spaniel", "husky"]
breeds << "blue heeler"
p breeds

# 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

numbers = [5, 34, 22, 1, 99]
numbers[0] = numbers[0] * 10
p numbers

# 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

numbers = [234, 555]
index = 0
while index < numbers.length
  p numbers[index]
  index = index + 1
end


# 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

countries = ["USA", "Canada", "Mexico"]
countries << "Costa Rica"
p countries