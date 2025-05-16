// ---------------------------------
// Objects

const product = {
  title: "pen",
  price: 77,
  exist: true,
};
console.log(typeof product); // object
console.log(product); // { title: 'pen', price: 77, exist: true }

// console.log(exist);  =>  exist is not defined
console.log(product["exist"]); // true
console.log(product.exist); // true
console.log(product.title); // pen

const { exist } = product; // Destructuring
console.log(exist); // true

product.exist = false;
console.log(product.exist); // false

let test = "price";
product[test] = 88;
console.log(product.price); // 88

// ---------------------------------
// Destructuring

const product = {
  title: "pen",
  price: 77,
  exist: true,
};

// console.log(exist);  =>  exist is not defined
console.log(product["exist"]); // true
console.log(product.exist); // true

const { exist } = product; // Destructuring
console.log(exist); // true

// -----------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const { tit, exist } = product;
console.log(tit); // undefined
console.log(exist); // true

// -----------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const { title, exist } = product;
console.log(title); // pen
console.log(exist); // true

// -----------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const { title: tit, exist } = product;
console.log(tit); // "pen"
console.log(exist); // true

// ---------------------------------
// Objects in Objects

let user = {
  userName: "mahdi",
  password: "12345678",
  age: 19,
  permissions: {
    isActive: true,
    isAdmin: false,
  },
};

console.log(user.age); // 19
console.log(user.permissions); // { isActive: true, isAdmin: false }
console.log(user.permissions.isAdmin); // false
console.log(user["permissions"].isAdmin); // false
console.log(user["permissions"]["isAdmin"]); // false

// ---------------------------------
// Arrays in Objects

let user = {
  userName: "mahdi",
  password: "12345678",
  age: 19,
  permissions: {
    isActive: true,
    isAdmin: false,
  },
  coures: ["Python", "C++", "Javascript"],
};

console.log(user.coures); // [ 'Python', 'C++', 'Javascript' ]
console.log(user.coures[0]); // Python

// ---------------------------------
// Objects in Arrays

const product = [
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

console.log(product[1]); // { id: 2, title: 'book', price: 99, exist: false }
console.log(product[1].price); // 99
console.log(product[0]["price"]); // 77

// ---------------------------------
// Objects -> Arrays -> Objects

let obj = {
  user: [
    "Ali",
    "Ram",
    25,
    {
      isActive: true,
      isAdmin: false,
    },
  ],
  owner: "Ahmad",
};

console.log(obj.owner); // Ahmad
console.log(obj.user); // [ 'Ali', 'Ram', 25, { isActive: true, isAdmin: false } ]
console.log(obj.user[0]); // Ali
console.log(obj.user[3]); // { isActive: true, isAdmin: false }
console.log(obj.user[3].isAdmin); // false

// ---------------------------------
// practice

const people = {
  friend: [],
};

const v1 = {
  firstName: "ali",
  lastName: "ram",
  id: 4,
};
const v2 = {
  firstName: "sara",
  lastName: "saba",
  id: 7,
};

people.friend.push(v1, v2);
console.log(people);
console.log(people.friend[1].lastName); // saba

// ---------------------------------
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
