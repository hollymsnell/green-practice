//node practice.js ***

// # 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

var first = "holly";
var last = "snell";
console.log(first + " " + last);

// # 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

console.log(`${first} ${last}`);

// # 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

var word = prompt("Enter a word, baby.");
if (word === "marco") {
  console.log("polo");
}

// # 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

var color = "silver";
var color1 = "gold";
var color2 = "grey";
console.log(
  "Some colors like " + color + ", " + color1 + ", and " + color2 + " are not found in the traditional rainbow."
);

// # 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

console.log(
  `Some words like ${color} and ${color1} are not only colors. Others like ${color2} can only be used as a color.`
);

// # 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

//unable to use window.prompt
// var name = window.prompt("What is your name?");
// if (name !== "Santa") {
//   console.log("You're not Santa.");
// }

// # 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

var title = "You Are Special";
var author = "Max Lucado";
console.log("The story from the book " + title + " by " + author + " is an extremely wholesome one.");

// # 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

console.log(`One of my favorite children's books is by ${author} and is called ${title}.`);

// # 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

// # 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

var city = "Pueblo";
var city1 = "Durango";
var city2 = "Canon City";
console.log("Other less populated cities in Colorado may include " + city + ", " + city1 + ", and " + city2 + ".");
