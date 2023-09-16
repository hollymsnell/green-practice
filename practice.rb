#ruby practice.rb ***


# 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

first_name = "holly"
last_name = "snell"
p first_name + " " + last_name

# 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

first_name = "holly"
last_name = "snell"
p "#{first_name} #{last_name}"

# 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

p "please enter a word"
word = gets.chomp 
if word == "marco"
  p "polo"
else
  p "you said #{word}" 
end

# 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

color1 = "yellow"
color2 = "grey"
color3 = "magenta"
puts "My favorite colors are " + color1 + ", " + color2 + ", and " + color3 + "."
puts "the colors i wrote are " + color1 + ", " + color2 + ", and " + color3 + "."

# 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

color1 = "yellow"
color2 = "grey"
color3 = "magenta"
puts "Here's some colors I like: #{color1}, #{color2}, and #{color3}."


# 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

p "Please enter your name"
name = gets.chomp
if name == "santa"
  p "you're not santa"
else 
  p "Nice to meet you, #{name}."
end

# 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

# 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

# 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

# 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).




