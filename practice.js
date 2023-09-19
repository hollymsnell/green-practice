// node practice.js ***

// # 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

var person = { firstName: "Joy", lastName: "Day", email: "email.com" };
console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);

// # 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

var people = [
  { firstName: "Jose", lastName: "Valentino" },
  { firstName: "Ricky", lastName: "Ricardo" },
  { firstName: "Rocky", lastName: "Balboa" },
];
console.log(people[0]);

// # 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

var menu = { icecream: 4, scones: 2, brownies: 5 };
menu["cookies"] = 3;
console.log(menu);

// # 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

var book = { title: "Winter Storm", author: "Yours Truly", pages: 200, language: "spanish" };
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.language);

// # 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

var books = [
  { title: "Bang", author: "Will Brass" },
  { title: "Trees Timber", author: "Sycamore Spruce" },
  { title: "Recipe for Life", author: "Sweet Victory" },
];
console.log(books[2].author);

// # 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

var place = { colorado: "Denver", utah: "salt lake city", montana: "billings" };
place["arizona"] = "pheonix";
console.log(place);

// # 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

// # 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

var laptops = [
  { brand: "apple", model: "macbook pro" },
  { brand: "apple", model: "macbook air" },
  { brand: "apple", model: "macbook lite" },
];
console.log(laptops[1].model);

// # 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

var define = { growth: "to increase in size or development", drink: "the act of swalling liquid" };
define["eat"] = "the act of ingesting food by means of chewing and swalling";
console.log(define);

// # 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.
