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

product.exist = false;
console.log(product.exist); // false

let test = "price";
product[test] = 88;
console.log(product.price); // 88

// --------------------

const user = {
  name: "ali",
  age: 24,
  helloUser() {
    console.log("hello user");
    console.log(`hello ${this.name}`);
  },
};

console.log(user);
console.log(user.age);
console.log(user.helloUser);
user.helloUser();

// --------------------

let fName = "ali";
let lName = "ram";
let age = 34;

let obj = { fName, lName, age };
console.log(obj); // { fName: 'ali', lName: 'ram', age: 34 }

// --------------------
// Bracket-Notation

let key = "username";
let obj = { [key]: "mahdi" };
console.log(obj); // { username: "mahdi" }

// ----------------------------------------
// some methods of objects

let userInfo = {
  fNaem: "ali",
  lName: "ram",
  bDay: 1998,
  color: "white ",
  isAdmin: true,
};

console.log(userInfo);

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
// Destructuring

const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const p1Title = product.title;
const p1Price = product.price;
const p1Exist = product.exist;

console.log(p1Title, p1Price, p1Exist); // pen 77 true

// --------------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const { title, price, exist } = product;

console.log(title, price, exist); // pen 77 true

// ----------------------------------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
};

// console.log(exist);  =>  exist is not defined
console.log(product["exist"]); // true
console.log(product.exist); // true

const { exist } = product; // Destructuring (=== const exist = product.exist)
console.log(exist); // true

// --------------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const { titl, exist } = product;
console.log(titl); // undefined
console.log(exist); // true

// --------------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const { exist, title } = product;
console.log(title); // pen
console.log(exist); // true

// ----------------------------------------
// change-name

const product = {
  title: "pen",
  price: 77,
  exist: true,
};

const { title: p1Title, exist } = product;
console.log(p1Title); // "pen"
console.log(exist); // true

// ----------------------------------------
// default-value

const product = {
  title: "pen",
  price: 70,
};

const { title, price = 30 } = product;
console.log(price); // 70

// --------------------

const product = {
  title: "pen",
  price: 70,
};

const { title, price, exist } = product;
console.log(exist); // undefined

// --------------------

const product = {
  title: "pen",
  price: 70,
};

const { title, price, exist = true } = product;
console.log(exist); // true

// --------------------

const product = {
  title: "pen",
  price: 70,
};

const { title, price, exist: ext = true } = product;
console.log(ext); // true

// ----------------------------------------
// rest-operator

const product = {
  title: "pen",
  count: 240,
  price: 77,
  exist: true,
};

const { price, ...rest } = product;
console.log(price); // 77
console.log(rest); // { title: 'pen', count: 240, exist: true }

// --------------------

const product = {
  title: "pen",
  count: 240,
  price: 77,
  exist: true,
};

const { title, price, exist, ...rest } = product;
console.log(rest); // { count: 240 }

// --------------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
  features: {
    color: "red",
    height: 30,
  },
};

const { features } = product;
console.log(features); // { color: 'red', height: 30 }

// --------------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
  features: {
    color: "red",
    height: 30,
  },
};

const { features } = product;
console.log(features); // { color: 'red', height: 30 }

const { color, height } = features;
console.log(color); // red
console.log(height); // 30

// --------------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
  features: {
    color: "red",
    height: 30,
  },
};

const {
  features: { color },
} = product;
console.log(color); // red

// --------------------

const product = {
  title: "pen",
  price: 77,
  exist: true,
  features: {
    color: "red",
    height: 30,
  },
};

const {
  features: { color, ...rest },
} = product;
console.log(color); // red
console.log(rest); // { height: 30 }

// ----------------------------------------
// spread-operator

/*
  shabih rest-operator ast vali kamel yek chiz digar ast,
  rest dar samt chap va baraye taerif bekar miraft,
  vali spread dar samte rast va baraye copy kardan dar
  yek motaghayere digar bekar miravad.
*/

const arr1 = ["ali", "sara"];
const arr2 = ["negar", ...arr1, "amin"];

console.log(arr2); // [ 'negar', 'ali', 'sara', 'amin' ]

// --------------------

const arr = ["ali", "sara", "negar"];
const obj = { ...arr };

console.log(obj); // { '0': 'ali', '1': 'sara', '2': 'negar' }

// --------------------

const obj1 = {
  foo: "bar",
  x: 20,
};

const obj2 = {
  foo: "baz",
  y: 70,
};

const clonedObj1 = { ...obj1 };
console.log(clonedObj1);

const megedObj12 = { ...obj1, ...obj2 };
console.log(megedObj12); // { foo: 'baz', x: 20, y: 70 }

const megedObj21 = { ...obj2, ...obj1 };
console.log(megedObj21); // { foo: 'bar', y: 70, x: 20 }

// ========================================
// copy {Stack & Heap}

/*
Stack vs Heap:
maghadir-e sade (Primitive) mesle number, string, boolean dar hafeze-ye Stack zakhire mishan.
maghadir-e pichide (mesle array, object) dar Heap gharar migiran va motaghayer faghat adres (reference) ro negah midare.
*/

// --------------------
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
console.log(arr, copy); // [1, 2, 3] [0, 2, 3]  =>  copy sathi, dar sathe avval moshkeli eijad nemikonad.

let arr = [1, 2, [3, 4]];
let copy = [...arr];
// let copy = arr.slice();
// let copy = Array.from(arr);
// let copy = Object.assign([], arr);
copy[2][1] = 5;
console.log(arr, copy); // [1, 2, [3, 5]] [1, 2, [3, 5]]  =>  agar array daray ashyae todarto(bish az 1 sath) bashad, an ashyae erjaei(refrence - Heap) baghi mimoonan(dar copy sathi).

// -----------------------
// object:

let user1 = { name1: "ali" };
let user2 = user1;
user2.name1 = "mahdi";
console.log(user1, user2); // { name1: 'mahdi' } { name1: 'mahdi' }

// shallow-copy:

let user1 = { name1: "ali" };
let user2 = { ...user1 };
user2.name1 = "mahdi";
console.log(user1, user2); // { name1: 'ali' } { name1: 'mahdi' }

let user1 = { names: { name1: "ali", name2: "ram" } };
let user2 = { ...user1 };
user2.names.name1 = "mahdi";
console.log(user1, "\n", user2);

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

console.log(products);

const data = JSON.stringify(products);
console.log(data);

const response = JSON.parse(data);
console.log(response);
