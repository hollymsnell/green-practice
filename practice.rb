#ruby practice.rb ***

# 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

person = {"first_name" => "Holly", "last_name" => "Snell", "age" => 31}
p person["first_name"]
p person["last_name"]
p person["age"]

# 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

homies = [
  {"first_name" => "Kayla", "last_name" => "Sampson"},
  {"first_name" => "Millie", "last_name" => "Preston"},
  {"first_name" => "Annie", "last_name" => "Young"}
]
p homies[0]["first_name"]

# 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

food = {"rice" => 5, "corn" => 7, "potato" => 2}
food["millet"] = 5
p food

# 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

book = {"title" => "Liver Rescue", "author" => "Anthony William", "page_count" => 456, "language" => "English"}
p book["title"]
p book["author"]
p book["page_count"]
p book["language"]

# 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

books = [
  {"title" => "Liver Rescue", "author" => "Anthony William"},
  {"title" => "The Cure for the Common Life", "author" => "Max Lucado"},
  {"title" => "The Bible", "author" => "A bunch of people"}
]
p books[2]["author"]

# 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

states = {"Colorado" => "Denver", "Kansas" => "Topeka", "Nevada" => "Reno"}
states["Texas"] = "Austin"
p states


# 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

laptop = {"brand" => "some brand", "model" => "some model", "year" => 1985}
p laptop["brand"]
p laptop["model"]
p laptop["year"]

# 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

laptop = [
  {"brand" => "some brand1", "model" => "some model1", "year" => 1985},
  {"brand" => "some brand2", "model" => "some model2", "year" => 1986},
  {"brand" => "some brand3", "model" => "some model3", "year" => 1987}
]
p laptop[1]["model"]

# 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

definition = {"alone" => "without anyone around", "growth" => "to increase in size or moral character"}
definition["slow"] = "to move at a decreased pace"
p definition

# 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

shirt = {"brand" => "Hanes", "color" => "grey", "size" => "small"}
p shirt["brand"]
p shirt["color"]
p shirt["size"]

