#ruby practice.rb

# 1. Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

# num = 6
# if num == 10
#   p 0
# else
#   p -1
# end

# 2. Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

# num = 10
# if num < 10
#   p -1
# elsif num > 10 
#   p 1
# else
#   p 0
# end

# 3. Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

# num1 = 3
# num2 = 65
# if num1 && num2 < 10
#   p 1
# else 
#   p 0
# end

# 4. Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

# num = 67
# if num > 9000
#   p 1
# else p -1
# end



# 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

first = "holly"
last = "snell"
p first + " " + last

# 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

first = "John"
last = "Lennon"
p "#{first} #{last}"

# 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

puts "Enter a word: "
word = gets.chomp
if word == "marco"
  p "polo"
else 
  p "nice"
end

# 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

col1 = "blue"
col2 = "yellow"
col3 = "red"
p "The primary colors to create all the others are " + col1 + ", " + col2 + ", and " + col3 + "!"

# 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

col1 = "blue"
col2 = "yellow"
col3 = "red"
p "The primary colors to create all the others are #{col1}, #{col2}, and #{col3}!" 