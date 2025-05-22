const names = ["ali", "mohammad", "reza", "saeed"];

names.forEach((i) => console.log(i));

names.forEach((item, index) => console.log(item, index));

names.forEach((item2, index2) => {
  item2 += " -> ";
  index2++;
  console.log(item2, index2);
});

// --------------------------------------
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
