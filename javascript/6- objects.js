// Objects

const product = {
  title: "pen",
  price: 77,
  exist: true,
};
console.log(product); // { title: 'pen', price: 77, exist: true }

// console.log(exist);  =>  exist is not defined
console.log(product.exist); // true

const { tit, exist } = product;
console.log(exist); // true

// *****************************************
// Objects & Arrays

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

console.log(products);

// *****************************************
// JSON

const data = JSON.stringify(products);
console.log(data);

const response = JSON.parse(data);
console.log(response);
