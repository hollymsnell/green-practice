#ruby practice.rb ***

# 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

def double(number)
  return number * 2
end

p double(3)

# 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

def capitalize(string)
    return string.upcase
end

p capitalize("joy to the world")

# 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.

def multiply(number1, number2)
  return number1 * number2
end

p multiply(4, 30)

# 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

def squared(number)
  return number * number
end

p squared(6)

# 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.

def first_letter(string)
  return string[0]
end

p first_letter("xavier")

# 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

def sentence(string1, string2, string3)
  return string1 + " " + string2 + " " + string3
end

p sentence("never", "back", "down")

# 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.

def num_to_string(number)
  return number.to_s 
end
 
p num_to_string(5)

# 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.

def repeat(string)
  return string * 5
end

p repeat("i miss you ")

# 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

def average(number1, number2, number3)
  return (number1 + number2 + number3) / 3
end

p average(4, 2, 12)

# 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.

def add_thirty(number)
  return number + 30
end

p add_thirty(2)