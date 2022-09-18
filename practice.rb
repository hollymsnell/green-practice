#ruby practice.rb ***


# 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

def get_double(number)
  return number * 2
end

p get_double(9)

# 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

def make_upcase(string)
  return string.upcase
end

p make_upcase("joe momma")

# 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.

def get_difference(number1, number2)
  return number1 - number2
end

p get_difference(4 , 1)

# 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

def num_squared(number)
  return number * number
end

p num_squared(5)

# 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.

def first_letter(string)
  return string[0]
end

p first_letter("question")

# 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

def combine_string(string1, string2, string3)
  return "#{string1} #{string2} #{string3}"
end

p combine_string("how", "the heck", "are ya?")

# 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.

def num_to_string(number)
  return number.to_s
end

p num_to_string(6)

# 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.

def five_string(string)
  return string * 5
end

p five_string("howdy")

# 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

def average(num1, num2, num3)
  return (num1 + num2 + num3) / 3.0
end

p average(3, 7, 2)

# 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.

def math_time(number)
  return (number * 10) + 30
end

p math_time(4)
