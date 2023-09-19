#ruby practice.rb ***

# 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

person = {"first_name" => "Holly", "last_name" => "Snell", "email" => "email.com"}
p person["first_name"]
p person["last_name"]
p person["email"]

# 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

persons = [
  {"first_name" => "Holly", "last_name" => "Snell"},
  {"first_name" => "Rico", "last_name" => "Rosales"},
  {"first_name" => "George", "last_name" => "Clooney"}
]
p persons[0]["first_name"]
p persons[0]["last_name"]

# 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

food = {"tacos" => 10, "burrito" => 8, "grilled cheese" => 11}
food["hot dog"] = 5
p food

# 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

book = {"title" => "1985", "author" => "George Orwell", "number_of_pages" => 300, "language" => "English"}
p book["title"]
p book["author"]
p book["number_of_pages"]
p book["language"]

# 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

books = [
  {"title" => "Bible", "author" => "Assorted"},
  {"title" => "Color Me Human", "author" => "TD McQuinn"},
  {"title" => "Algebra", "author" => "Various"}
]
p books[1]["author"]

# 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

usa = {"Colorado" => "Denver", "Texas" => "Austin", "Maryland" => "Baltimore"}
usa["California"] = "Sacramento"
p usa

# 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

fruit_season = {"pear" => "september", "orange" => "january", "peach" => "august"}
p fruit_season["pear"]
p fruit_season["orange"]
p fruit_season["peach"]

# 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

laptops = [
  {"brand" => "apple", "model" => "macbook pro"},
  {"brand" => "apple", "model" => "macbook air"},
  {"brand" => "samsung", "model" => "something"}
]
p laptops[1]["model"]

# 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

definition = {"champion" => "to be the best", "inhale" => "to breath in"}
definition["exhale"] = "to let air out of your lungs"
p definition

# 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

shirt = {"brand" => "hanes", "color" => "blue", "size" => "medium"}
p shirt["brand"]
p shirt["color"]
p shirt["size"]