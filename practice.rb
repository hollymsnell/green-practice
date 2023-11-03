#ruby practice.rb ***

# 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

array = ["joy", "love", "happy"]
array << "wonder"
array << "success"
p array

# 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

letters = ["a", "g", "h", "y"]
letters[1] = 4
p letters

# 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

numbers = [1, 5, 7, 8]
index = 0
while index < numbers.length
  p numbers[index]
  index += 1
end


# 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

# 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

strings = ["winter", "summer", "spring", "fall"]
strings[2] = strings[2].upcase
p strings

# 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

names = ["Adam", "Oliver", "Holly"]
index = 0
while index < names.length
  p names[index]
  index += 1
end

# 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

# 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

# 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

# 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

countries = ["China", "Russia", "Argentina"]
countries << "Chile"
p countries