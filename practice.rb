#ruby practice.rb ***


# 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

p "please enter a word"
word = gets.chomp 
p word.upcase 

# 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

p "Enter a number, bad boy."
number = gets.chomp
if number.to_i > 100
  p "That's a big number, bad boy."
else
  p "here's #{number} dollars to spend."
end

# 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

p "Enter two numbers, please."
number1 = gets.chomp
number2 = gets.chomp
p number1.to_i + number2.to_i

# 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

p "Type a word"
word = gets.chomp
p word.reverse 

# 5. Write a program that asks the user to enter a number, then prints the number times 10.

p "enter a number please"
number = gets.chomp
p number.to_i * 10

# 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

p "Enter two separate words"
word1 = gets.chomp
word2 = gets.chomp
p word1.upcase + " " + word2.upcase
p "#{word1.upcase} #{word2.upcase}"

# 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

p "Enter another word, baby."
word = gets.chomp
p "The word #{word} has #{word.length} letters in it."

# 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

p "Let's try another number"
number = gets.chomp
if number.to_i < 0
  p "#{number} is a negative number"
else
  p "way to stay positive"
end

# 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

p "Enter two separate numbers, my dearest."
number1 = gets.chomp
number2 = gets.chomp
p "If we add #{number1} and #{number2} the answer will come out to #{number1.to_i + number2.to_i}."

# 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

p "Enter the last word"
word = gets.chomp
if word.length > 5
  p "That's a long word"
else
  p "that's a small word"
end



