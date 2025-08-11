// ========================================
// while

let x = 10;
while (x > 5) {
  console.log(x);
  x--;
}

let x = 10;
while (x > 5) {
  x--;
  console.log(x);
}
// --------------------

let alpha = ["a", "b", "c", "d", "e"];
let notFound = true;
let target = "d";
let x = 0;

while (notFound && x < alpha.length) {
  if (alpha[x] === target) {
    console.log(`founded => index of 'd' is ${x}`);
    notFound = false;
  } else {
    x++;
  }
}

console.log(alpha.indexOf("d"));

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

// --------------------

let i = 0;
while (++i < 5) console.log(i);

let j = 0;
while (j++ < 5) console.log(j);

// ----------------------------------------
// do while

// tafavot ba while: hadeaghal yekbar badane halghe ejra mishavad va sepas shart chek mishavad.

let x = 0;

do {
  console.log(`${x} is less than 7`);
  x++;
} while (x < 7);

// --------------------
// while vs do-while

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

// --------------------

let userSelect;

do {
  userSelect = +prompt("1: rock, 2: paper, 3: scissor");
} while (userSelect < 1 || userSelect > 3 || isNaN(userSelect));

alert("correct input");

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

let sum = 0;

while (true) {
  let value = +prompt("Enter a number", "");
  if (!value) break;
  sum += value;
}

alert("Sum: " + sum);

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
  <4>code-to-be-executed 
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

// or:
let i = 0;
for (i; i < 3; i++) {
  console.log(`Item number is: ${i}`);
}

// or:
let i = 0;
for (; i < 3; i++) {
  console.log(`Item number is: ${i}`);
}

// or:
let i = 0;
for (; i < 3; ) {
  console.log(`Item number is: ${i++}`);
}
// --------------------

for (let i = 0; i < 3; i++) {
  console.log(`Item number is: ${i}`);
}
console.log(i); // ReferenceError: i is not defined (i faghat dar shart taerif shode, na global)

let i = 0;
for (; i < 3; i++) {
  console.log(`Item number is: ${i}`);
}
console.log(i); // 3

// --------------------

for (let i = 0; i < 5; ++i) console.log(i);

for (let i = 0; i < 5; i++) console.log(i);

// --------------------

let a, b, c;
a = 1;
b = 3;
for (c = a * b; a < 10; a++) {
  console.log(`c: ${c}, a: ${a}`);
}
// --------------------

let x = 1;
while (x < 5) {
  console.log(x);
  x++;
}

let x = 1;
for (x; x < 5; x++) {
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
let i = 1;
for (i; i <= n; i++) {
  console.log("* ".repeat(i));
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
for (a = 1, b = 3, c = a * b; a < 10; a++) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

// more better:
for (let a = 1, b = 3, c = a * b; a < 10; a++) {
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
// --------------------

let userInfo = {
  fNaem: "ali",
  lName: "ram",
  bDay: 1998,
  color: "white ",
  isAdmin: true,
};
console.log(userInfo);
console.log(Object.entries(userInfo));
console.log("-".repeat(30));

for (let i of Object.entries(userInfo)) {
  console.log(i);
}

for (let i of Object.entries(userInfo)) {
  console.log(i[0], i[1]);
}

for (let [k, v] of Object.entries(userInfo)) {
  console.log(k, v);
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
console.log("-".repeat(30));

for (let key in userInfo) {
  console.log(`${key} => ${userInfo.key}`);
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
  if (userInfo[key] === "ali") x = true;

  if (userInfo[key] === "ram") y = true;
}

if (x && y) console.log("ali ram founded");
else console.log("not found");

// ----------------------------------------
// breake & continue

for (let i = 1; i < 10; i++) {
  console.log(i);
  if (i === 5) break;
}
// --------------------

for (let i = 1; i < 10; i++) {
  if (i === 5) continue;
  console.log(i);
}
// --------------------

let i = 0;
let x = true;
let target = "c";
const alpha = ["a", "b", "c", "d", "e"];

for (; i < alpha.length; i++) {
  if (alpha[i] === target) {
    console.log(`founded, its index is ${i}`);
    x = false;
  } else if (i === alpha.length - 1 && x) {
    console.log("not exist");
  }
}

// or esier (without boolean variable - with break):
let i = 0;
let target = "c";
const alpha = ["a", "b", "c", "d", "e"];

for (i; i < alpha.length; i++) {
  if (alpha[i] === target) {
    console.log(`founded, its index is ${i}`);
    break;
  } else if (i === alpha.length - 1) {
    console.log("not exist");
  }
}
// --------------------
// labeled-blocks

// wrong
for (let i = 1, n = 6; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
    if (j === 4) break;
  }
  console.log(row);
}

// solotion-1
for (let i = 1, n = 6; i <= n; i++) {
  let row = "";
  if (i === 4) break;
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// solotion-2
first: for (let i = 1, n = 6; i <= n; i++) {
  let row = "";
  second: for (let j = 1; j <= i; j++) {
    row += "* ";
    if (j === 4) break first;
  }
  console.log(row);
}
