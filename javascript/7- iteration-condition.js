// for

for (let item = 0; item < 10; item++) {
  console.log(`Item number is: ${item}`);
}

const products = [
  {
    id: 1,
    title: "pen",
    price: 77,
    exist: true,
  },
  {
    id: 2,
    title: "book",
    price: 99,
    exist: false,
  },
];

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

for (let i = 0; i < products.length; i++) {
  console.log(products[i].title);
}
// *****************************************
// if-else

const price = 99;
const newPrice = 109;

if (newPrice > price) {
  console.log("Discount Added!");
} else if (newPrice < price) {
  console.log(`Price: ${newPrice}`);
} else {
  console.log("Same Price");
}
