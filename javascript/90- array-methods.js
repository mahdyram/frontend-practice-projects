// ----------------------------------
// array methods

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
    price: 88,
    exist: false,
  },
  {
    id: 3,
    title: "notebook",
    price: 99,
    exist: false,
  },
];

//--------------------
// forEach

products.forEach((item) => {
  console.log(item.title);
});

//--------------------
// map

const productTitle = products.map((item) => {
  return item.title;
});

console.log(productTitle); // output: array

//--------------------
// filter

const notExist = products.filter((item) => {
  return item.exist === false;
});

console.log(notExist);
