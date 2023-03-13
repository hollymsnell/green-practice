#ruby practice.rb ***

# 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

def double(number)
return number * 2
end

p double(4)

# 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

def capitalize(string)
return string.upcase
end
 
p capitalize("Joy to the World")

# 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.

def difference(number1, number2)
return number1 - number2
end
 
p difference(67,14)

# 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

def squared(number)
  return number * number
end

p squared(12)

# 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.

def first_letter(string)
  return string[0]
end

p first_letter("holly")

# 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

def sentence(string1, string2, string3)
  return "#{string1} #{string2} #{string3}"
end

p sentence("Hey", "baby", "doll")

# 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.

def transform(number)
  return number.to_s
end

p transform(90)

# 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.

def repeat(string)
  return string * 5
end

p repeat("right")

# 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

def average(num1, num2, num3)
  return (num1 + num2 + num3) / 3
end

p average(45, 6, 12)

# 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.


def math(number)
  return number * 10 + 30
end

p math(7)
