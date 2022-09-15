#ruby practice.rb ***

# 1. Write a while loop to print the numbers 1 through 10.

number = 1
while number <= 10
  p number
  number = number + 1
end

# 2. Write a while loop that prints the word "hello" 5 times.

# p "hello " * 5

count = 0
while count < 5
  p "hello"
  count = count + 1
end

# 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

while true
  puts "Enter a word: "
  input = gets.chomp
  if input == "stop"
    break
  end
end 

# 4. Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

number = 0
while number <= 100
  p number
  number = number + 5
end


# 5. Write a while loop that prints the number 9000 ten times.

count = 0
while count < 10
  p 9000
  count = count + 1
end

# 6. Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

while true
  puts "Enter a number: "
input = gets.chomp
if input.to_i > 10
  break
end
end 

# 7. Write a while loop that prints the numbers 50 to 70.

number = 50
while number <= 70
  p number
  number = number + 1
end

# 8. Write a while loop that prints the phrase "Around the world" 144 times.

# 9. Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

# 10. Write a while loop that prints the even numbers from 2 to 40.
