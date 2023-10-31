#ruby practice.rb ***


# 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

first_name = "Holly"
last_name = "Berry"
p "My name is " + first_name + " " + last_name + ", nice to meet you." 

# 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

first = "Joe"
last = "Richards"
p "His name is #{first} #{last} and he's trouble."

# 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

puts "Enter a word"
word = gets.chomp
if word == "marco"
  p "#{word} polo"
else
  p "thanks for the word" 
end

# 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

color1 = "red"
color2 = "green"
color3 = "blue"
p "Common Christmas colors are " + color1 + ", " + color2 + ", " + "and sometimes " + color3 + "."

# 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

color1 = "red"
color2 = "green"
color3 = "blue"
p "Common Christmas colors are #{color1}, #{color2}, and sometimes #{color3}."

# 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

# 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

# 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

# 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

puts "Enter your password"
password = gets.chomp
if password == "Joshua"
  p "Shall we play a game?"
else 
  p "Access Denied"
end

# 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).