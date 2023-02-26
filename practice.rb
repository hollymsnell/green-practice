#ruby practice.rb ***

# 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

first = "holly"
last = "snell"
p first + " " + last

# 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

first = "holly"
last = "snell"
p "#{first} #{last}" 

# 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

p "enter a word"
word = gets.chomp 
if word == "marco"
  p "polo"
else
  p "wahts upppp" 
end

# 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

color1 = "yellow"
color2 = "red"
color3 = "blue"
p "The primary colors are " + color1 + ", " + color2 + ", and " + color3 + "."

# 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

color1 = "yellow"
color2 = "red"
color3 = "blue"
p "The colors for mixing are #{color1}, #{color2}, and #{color3}."

# 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

p "Enter a name, please."
name = gets.chomp
if name != "Santa" 
  p "You're not Santa."
else 
  p "welcome back Santa."
end

# 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

title = "Hamlet"
author = "W.Shakespeare"
p "The author of the well known book " + title + " is " + author + "." 

# 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

title = "Hamlet"
author = "W.Shakespeare"
p "I don't even care about #{author} or his dumbass writings such as #{title}."

# 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

p "Please enter your password."
password = gets.chomp
if password == "Joshua"
  p "shall we play a game?"
else 
  p "access denied, homie."
end

# 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

city1 = "Dallas"
city2 = "Denver"
city3 = "Detroit"
p "Three D cities could include " + city1 + ", " + city2 + " , and " + city3 + "."
