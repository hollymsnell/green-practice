//node practice.js ***

// # 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

var person = { firstName: "Holly", lastName: "Snell", age: 31 };
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// # 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

var homies = [
  { firstName: "Kayla", lastName: "Sampson" },
  { firstName: "Millie", lastName: "Preston" },
  { firstName: "Annie", lastName: "Young" },
];
console.log(homies[0].firstName);

// # 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

var menu = { cookie: 5, donut: 7, scone: 2 };
menu["cake"] = 4;
console.log(menu);

// # 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

var book = { title: "Liver Rescue", author: "Anthony Williams", pages: 456, language: "English" };
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.language);

// # 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

var books = [
  { title: "Liver Rescue", author: "Anthony William" },
  { title: "The Cure for the Common Life", author: "Max Lucado" },
  { title: "The Bible", author: "A bunch of people" },
];
console.log(books[2].author);

// # 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

var states = { Colorado: "Denver", Kansas: "Topeka", Nevada: "Reno" };
states.Texas = "Austin";
console.log(states);

// # 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

var laptop = { brand: "some brand", model: "some model", year: 1985 };
console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.year);

// # 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

laptop = [
  { brand: "some brand1", model: "some model1", year: 1985 },
  { brand: "some brand2", model: "some model2", year: 1986 },
  { brand: "some brand3", model: "some model3", year: 1987 },
];
console.log(laptop[1].model);

// # 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

var definition = { alone: "without anyone around", growth: "to increase in size or moral character" };
definition.slow = "to move at a decreased pace";
console.log(definition);

// # 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

var shirt = { brand: "Hanes", color: "yellow", size: "medium" };
console.log(shirt.brand);
console.log(shirt.color);
console.log(shirt.size);
