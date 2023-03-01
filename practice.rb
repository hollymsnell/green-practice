#ruby practice.rb ***

# 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

p "enter a word:"
word = gets.chomp
puts word.upcase 

# 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

p "Enter a number:"
number = gets.chomp.to_i
if number > 100
  p "wow that's a big number!"
else
  p "baby numby"
end

# 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

p "Please enter two numbers:"
number1 = gets.chomp
number2 = gets.chomp
p number1.to_i + number2.to_i

# 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

p "Enter a word to be reversed my child:"
word = gets.chomp
p word.reverse

# 5. Write a program that asks the user to enter a number, then prints the number times 10.

p "Enter a number, my guy:"
number = gets.chomp
p number.to_i * 10

# 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

p "Let's get two words from you:"
word1 = gets.chomp
word2 = gets.chomp
p "#{word1} #{word2}".upcase

# 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

p "Can you just enter a word and i'll count it:"
word = gets.chomp
p word.length

# 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

p "Enter a number, please:"
number = gets.chomp
if number.to_i < 0
  puts "That's a negative number."
else
  puts "thanskss"
end

# 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

p "Enter two numbies babyyy:"
number1 = gets.chomp
number2 = gets.chomp
p number1.to_i * number2.to_i

# 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

p "Enter a word, gosh:"
word = gets.chomp
if word.to_s.length > 5
  puts "That's a long word."
else
  puts "baby word"
end