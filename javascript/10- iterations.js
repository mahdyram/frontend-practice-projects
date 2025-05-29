// ========================================
// while

let x = 10;

while (x > 5) {
  console.log(x);
  x--;
}
// --------------------

let alpha = ["a", "b", "c", "d", "e"];
let notFound = true;
let x = 0;

while (notFound && x < alpha.length) {
  if (alpha[x] === "d") {
    console.log(`founded => index of 'd' is ${x}`);
    notFound = false;
  } else {
    x++;
  }
}
// --------------------

let n = 10;
let fibo = [0, 1];

while (fibo.length < n) {
  fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
}
console.log(fibo); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// --------------------

let x = 6;
let f1 = 0;
let f2 = 1;

while (x > 2) {
  [f1, f2] = [f2, f1 + f2];
  x--;
}
console.log(f2); // 5

// ----------------------------------------
// do while

let x = 0;

do {
  console.log(`${x} is less than 7`);
  x++;
} while (x < 7);
// --------------------

let userSelect;

do {
  userSelect = prompt("1: rock, 2: paper, 3: scissor");
  userSelect = Number(userSelect);
} while (userSelect < 1 || userSelect > 3 || isNaN(userSelect));

alert("correct input");

// --------------------
// diference while & do-while

let x = 12;
while (x < 10) {
  console.log(`${x} is less than 10`);
  x++;
}

let x = 12;
do {
  console.log(`${x} is less than 10`);
  x++;
} while (x < 10);

// ----------------------------------------
// breake & contionue

let x = 1;
while (x < 10) {
  console.log(x);
  x++;
  if (x === 5) {
    break;
  }
}
// --------------------

let x = 1;
while (x < 10) {
  x++;
  if (x === 5) {
    continue;
  }
  console.log(x);
}

let x = 1;
while (x < 10) {
  if (x === 5) {
    x++;
    continue;
  }
  console.log(x);
  x++;
}

// ========================================
// for

/* 
for (<1>initialize-variable; <2>condition; <3>statement) {
  code to be executed <4>
}
    1 -> 2 => 4
    3 -> 2 => 4
    3 -> 2 => 4
    3 -> 2 => 4
    ....
*/

for (let i = 0; i < 3; i++) {
  console.log(`Item number is: ${i}`);
}
// --------------------

let x = 1;
while (x < 5) {
  console.log(x);
  x++;
}

for (let x = 1; x < 5; x++) {
  console.log(x);
}
// --------------------

let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// or easier:

let n = 5;
for (let i = 1; i <= n; i++) {
  console.log("* ".repeat(i));
}
// --------------------

const alpha = ["a", "b", "c", "d", "e"];
let x = true;

for (let i = 0; i < alpha.length; i++) {
  if (alpha[i] === "g") {
    console.log(`founded, its index is ${i}`);
    x = false;
  } else if (i === alpha.length - 1 && x) {
    console.log("not exist");
  }
}
// --------------------

let a = 1;
let b = 3;
let c = a * b;
for (; a < 10; a++) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

// better:
let a, b, c;
(a = 1), (b = 3), (c = a * b);
for (; a < 5; a++) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

// more better:
let a, b, c;
for (a = 1, b = 3, c = a * b; a < 10; a++) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

// ----------------------------------------
// for-of (in arrays)

const alpha = ["a", "b", "c", "d", "e"];
for (let i = 0; i < alpha.length; i++) {
  console.log(alpha[i]);
}

console.log("-".repeat(30));

const alpha2 = ["a", "b", "c", "d", "e"];
for (let i of alpha2) {
  console.log(i);
}
// --------------------

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

for (let i of products) {
  console.log(i);
}

for (let i of products) {
  console.log(i.title);
}

// ----------------------------------------
// for-in (mostly in objects)

const alpha = ["a", "b", "c", "d", "e"];
for (let i in alpha) {
  console.log(i);
}

let userInfo = {
  fNaem: "ali",
  lName: "ram",
  bDay: 1998,
  color: "white ",
  isAdmin: true,
};
for (let i in userInfo) {
  console.log(i);
}
// --------------------

let userInfo = {
  fNaem: "ali",
  lName: "ram",
  bDay: 1998,
  color: "white ",
  isAdmin: true,
};

console.log(userInfo.length); // undefined

let length = 0;
for (let i in userInfo) {
  length++;
}
console.log(length); // 5

// --------------------

let userInfo = {
  fNaem: "ali",
  lName: "ram",
  bDay: 1998,
  color: "white ",
  isAdmin: true,
};
console.log(userInfo);

for (let key in userInfo) {
  console.log(`${key} => ${userInfo[key]}`);
}

for (let i of Object.entries(userInfo)) {
  console.log(i);
}

for (let i of Object.entries(userInfo)) {
  console.log(i[0], i[1]);
}

for (let [k, v] of Object.entries(userInfo)) {
  console.log(k, v);
}

// --------------------
// looking for "ali ram"

let userInfo = {
  fNaem: "ali",
  lName: "ram",
  bDay: 1998,
  color: "white ",
  isAdmin: true,
};

let x = false,
  y = false;
for (let key in userInfo) {
  if (userInfo[key] === "ali") {
    x = true;
  }
  if (userInfo[key] === "ram") {
    y = true;
  }
}
if (x && y) {
  console.log("ali ram founded");
} else {
  console.log("not found");
}

// ----------------------------------------
// breake & continue

for (let i = 1; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}
// --------------------

for (let i = 1; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
// --------------------

const alpha = ["a", "b", "c", "d", "e"];

for (let i = 0; i < alpha.length; i++) {
  if (alpha[i] === "d") {
    console.log(`founded, its index is ${i}`);
    break;
  } else if (i === alpha.length - 1) {
    console.log("not exist");
  }
}

// --------------------
// labeled blocks

let n = 6;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
    if (j === 4) {
      break;
    }
  }
  console.log(row);
}

let n = 6;
for (let i = 1; i <= n; i++) {
  let row = "";
  if (i === 4) {
    break;
  }
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

let n = 6;
first: for (let i = 1; i <= n; i++) {
  let row = "";
  second: for (let j = 1; j <= i; j++) {
    row += "* ";
    if (j === 4) {
      break first;
    }
  }
  console.log(row);
}
