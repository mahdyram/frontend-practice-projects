// --------------------------------------
// function (old)

function addProduct() {
  console.log("Product Name");
}
addProduct(); // Product Name

// ---------------

function addProduct2(title, price) {
  console.log(`Title: ${title} - Price: ${price}`);
}
addProduct2(); // Title: undefined - Price: undefined
addProduct2("Book", 99); // Title: Book - Price: 99

// ---------------

function addProduct3(title, price) {
  return `Title: ${title} - Price: ${price}`;
}
addProduct3(); // nothing in console
addProduct3("Pen", 88); // nothing in console

console.log(addProduct3("Pen", 88)); // Title: Pen - Price: 88

const result3 = addProduct3("Pen", 88);
console.log(result3); // Title: Pen - Price: 88

// ---------------

function addProduct4(title = "Pen", price = 77) {
  return `Title: ${title} - Price: ${price}`;
}

const result4 = addProduct4();
console.log(result4); // Title: Pen - Price: 77

console.log(addProduct4("Pen", 88)); // Title: Pen - Price: 88

// --------------------------------------
// arrow functions (new)

const addProduct5 = (title, price) => {
  return `Title: ${title} - Price: ${price}`;
};

const result5 = addProduct5("Pen", 66);
console.log(result5); // Title: Pen - Price: 66

// ---------------

const addProduct6 = (title, price) => `Title: ${title} - Price: ${price}`; // when one line is returned

const result6 = addProduct6("Pen", 55);
console.log(result6); // Title: Pen - Price: 55
