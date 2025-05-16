// Objects

const product = {
  title: "pen",
  price: 77,
  exist: true,
};
console.log(typeof product); // object
console.log(product); // { title: 'pen', price: 77, exist: true }

// console.log(exist);  =>  exist is not defined
console.log(product.title); // pen
console.log(product.exist); // true

const { exist } = product;
console.log(exist); // true

// ******************
const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const { tit, exist } = product;
console.log(tit); // undefined
console.log(exist); // true

// ******************
const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const { title, exist } = product;
console.log(title); // pen
console.log(exist); // true

// ******************
const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const { title: tit, exist } = product;
console.log(tit); // "pen"
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

console.log(typeof products); // object
console.log(products);
console.log(products[1]);
console.log(products[1].price); // 99

// *****************************************
// JSON

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

const data = JSON.stringify(products);
console.log(data);

const response = JSON.parse(data);
console.log(response);
