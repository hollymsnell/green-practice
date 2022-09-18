//node practice.js ***

// # 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

var person = { firstName: "Happy", lastName: "Freeman", email: "happyfreeman@test.com" };
console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);

// # 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

var people = [
  { firstName: "Happy", lastName: "Freeman", email: "happyfreeman@test.com" },
  { firstName: "Janet", lastName: "Flip", email: "janetflip@test.com" },
  { firstName: "Spice", lastName: "Workman", email: "spiceworkman@test.com" },
];
console.log(people[0]);

// # 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

var menu = { curry: 23, flatbread: 7, noodles: 10 };
menu["pho"] = 12;
console.log(menu);

// # 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

var book = { title: "you are special", author: "max lucado", pages: 14, language: "english" };
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.language);

// # 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

var books = [
  { title: "you are special", author: "max lucado", pages: 14, language: "english" },
  { title: "coding for dummies", author: "john smith", pages: 544, language: "english" },
  { title: "science rules", author: "bill nye", pages: 134, language: "english" },
];
console.log(books[2].author);

// # 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

// # 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

// # 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

// # 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

// # 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.
