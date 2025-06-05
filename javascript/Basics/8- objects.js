// ========================================
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

// ----------------------------------------
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

// --------------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const { tit, exist } = product;
console.log(tit); // undefined
console.log(exist); // true

// --------------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const { title, exist } = product;
console.log(title); // pen
console.log(exist); // true

// --------------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const { title: tit, exist } = product;
console.log(tit); // "pen"
console.log(exist); // true

// ----------------------------------------
// some methods of objects

let userInfo = {
  fNaem: "ali",
  lName: "ram",
  bDay: 1998,
  color: "white ",
  isAdmin: true,
};

console.log(Object.keys(userInfo));

console.log(Object.values(userInfo));

console.log(Object.entries(userInfo));

// ----------------------------------------
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

// ----------------------------------------
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

// ----------------------------------------
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

// ----------------------------------------
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

// ========================================
// copy {Stack & Heap}

// array:

let arr = [1, 2, 3];
let copy = arr;

copy[0] = 0;
console.log(arr, copy); // [ 0, 2, 3 ] [ 0, 2, 3 ]

// shallow-copy:

let arr = [1, 2, 3];
let copy = [...arr];
// let copy = arr.slice();
// let copy = Array.from(arr);
// let copy = Object.assign([], arr);
copy[0] = 0;
console.log(arr, copy); // [1, 2, 3] [0, 2, 3]  =>  dar sathe avval moshkeli eijad nemikonad

let arr = [1, 2, [3, 4]];
let copy = [...arr];
// let copy = arr.slice();
// let copy = Array.from(arr);
// let copy = Object.assign([], arr);
copy[2][1] = 5;
console.log(arr, copy); // [1, 2, [3, 5]] [1, 2, [3, 5]]  =>  agar array daray ashyae todarto(bish az 1 sath) bashad, an ashyae erjaei(refrence) baghi mimoonan(dar copy sathi).

// -----------------------
// object:

let user1 = { name1: "ali" };
let user2 = user1;
user2.name1 = "mahdi";
console.log(user1, user2); // { name1: 'mahdi' } { name1: 'mahdi' }

// shallow-copy:

let user1 = { name1: "ali" };
let user2 = Object.assign({}, user1);
user2.name1 = "mahdi";
console.log(user1, user2); // { name1: 'ali' } { name1: 'mahdi' }

let user1 = { names: { name1: "ali", name2: "ram" } };
let user2 = Object.assign({}, user1);
user2.names.name1 = "mahdi";
console.log(user1, user2); // { names: { name1: 'mahdi', name2: 'ram' } } { names: { name1: 'mahdi', name2: 'ram' } }

// ----------------------------------------
// deep-copy (array & object):

let original = { name: "ali", address: ["tehran", "alghadir"] };

let copy = structuredClone(original);

console.log(copy);

// -----------------------
// deep-copy vs shallow-copy

/*
- agar array faghat shamele maghadire sade(number, string, boole) bashad, moshkeli nist.
- amma agar dakhele array object ya array digari bashad moshkel eijad mishavad va ba taghir copy, orijinal ham tagir mikonad.
- dalil: dar copy sathi faghat "esharegar(refrence) be object" copy shode, yaeni dar hafeze, faghat adrese oon objecte todarto copy mishe na khode dade ha.
*/

let original1 = { name: "ali", address: ["tehran", "alghadir"] };
let copy = { ...original1 };
copy.address[1] = "hakimieh";
console.log(original1.address[1]); // "hakimieh" changed!

let original2 = { name: "ali", address: ["tehran", "alghadir"] };
let deepCopy = structuredClone(original2);
deepCopy.address[1] = "hakimieh";
console.log(original2.address[1]); // "alghadir" not changed

// ========================================
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

// ========================================
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
