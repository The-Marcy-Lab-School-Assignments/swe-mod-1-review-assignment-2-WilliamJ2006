const bookInventory = {
  "The Bluest Eye": 3,
  "Beloved": 5,
  "Homegoing": 2,
  "The Vanishing Half": 4,
  "Between the World and Me": 1
};

// Part A: Use Object.keys() and a for loop to print each book and its availability in this format:
// "The Bluest Eye: 3 copies available"
// "Beloved: 5 copies available"
// etc...

const arr = Object.keys(bookInventory);

for (const key of arr) {
  console.log(`${key}: ${bookInventory[key]} copies availabe`)
}

// Part B: Calculate and log the total number of books across all titles (should be 15)
// Hint: You'll need a variable to keep track of the running total as you loop through the keys

let total = 0;

for (key of arr) {
  console.log(bookInventory[key]);
  total += bookInventory[key];
}

console.log(total);