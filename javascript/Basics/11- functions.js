// ========================================
// functions (old)

function sayHello() {
  console.log("hello user");
}
sayHello(); // hello user

// --------------------

function sayHello2() {
  let name = prompt("whats your name?");
  alert(`hello ${name}`);
}
sayHello2();

// ----------------------------------------

function addTwoNumbers() {
  let num1 = prompt("enter first number:");
  let num2 = prompt("enter second number:");
  alert(`${num1} + ${num2} = ${+num1 + +num2}`);
}
addTwoNumbers();

// --------------------

function addTwoNumbers2(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
addTwoNumbers2(); // undefined + undefined = NaN
addTwoNumbers2(7); // 7 + undefined = NaN
addTwoNumbers2(7, 9); // 7 + 9 = 16

// ----------------------------------------

function addProduct(title, price) {
  console.log(`Title: ${title} - Price: ${price}`);
}
addProduct(); // Title: undefined - Price: undefined
addProduct("Book", 99); // Title: Book - Price: 99

// --------------------

function addProduct2(title = "Pen", price = 77) {
  console.log(`Title: ${title} - Price: ${price}`);
}
addProduct2(); // Title: Pen - Price: 77
addProduct2("book"); // Title: book - Price: 77
addProduct2("Book", 99); // Title: Book - Price: 99

// ----------------------------------------
// return

function addProduct3(title, price) {
  return `Title: ${title} - Price: ${price}`;
}
addProduct3(); // nothing in console
addProduct3("Pen", 77); // nothing in console

console.log(addProduct3("Pen", 77)); // Title: Pen - Price: 77

const result3 = addProduct3("book", 88);
console.log(result3); // Title: book - Price: 88

// --------------------

function addProduct4(title = "Pen", price = 77) {
  return `Title: ${title} - Price: ${price}`;
}

const result4 = addProduct4();
console.log(result4); // Title: Pen - Price: 77

console.log(addProduct4("book", 88)); // Title: book - Price: 88

// ========================================
// arrow functions (new)

const sayHello3 = () => {
  console.log("hello user");
};

sayHello3(); // hello user

// --------------------

const sayHello4 = () => {
  return "hello user";
};

console.log(sayHello4()); // hello user

// --------------------
// when one line is returned

let sayHello6 = () => console.log("hello user");

sayHello6(); // hello user

// --------------------

const sayHello5 = () => "hello user";

console.log(sayHello5()); // hello user

// ----------------------------------------

let addTwoNumbers3 = (num1, num2) => console.log(num1 + num2);

addTwoNumbers3(7, 9); // 16

// --------------------

let addTwoNumbers4 = (num1, num2) => {
  num1 *= 2;
  num2 **= 2;
  console.log(num1 + num2);
};

addTwoNumbers4(3, 4); // 22

const addProduct5 = (title, price) => {
  return `Title: ${title} - Price: ${price}`;
};

const result5 = addProduct5("Pen", 66);
console.log(result5); // Title: Pen - Price: 66

// --------------------

const addProduct6 = (title, price) => `Title: ${title} - Price: ${price}`;

const result6 = addProduct6("Pen", 55);
console.log(result6); // Title: Pen - Price: 55

// =======================================
// Function Definition Summary

// Function Declaration

function sum(a, b) {
  return a + b;
}
/*
- in tabe ba name 'sum' taerif shodeh ast.
- 'Hoisting' mishavad, yaeni ghabl az taerif ham mishavad az an estfaeh kard.
- maemoolan baraye tavabe omoomi estefadeh mishavad.
*/

// ----------------------------------------
// Function Expression

let result = function (a, b) {
  return a + b;
};
/*
- in tabe bedoone nam ast(anonymous) va dar motaghayere 'result' zakhire shode ast.
- 'Hoisting' nemishavad.
- in noe tabe ra mitavan beonvane argoman, meghdare bazgashti, ya mthode object estefade kard.
*/

// --------------------
// Arrow Function

let result2 = (a, b) => a + b;
/*
- noei az function-expression(fe) amma kootahtar.
- barkhalafe fe, 'this', 'arguments', 'super' va 'new.target' nadarad.
- baraye object-methods ya tavabeei ke ba 'this' kar darand monaseb nist.
- monaseb bareye tavabe kootah ya estefade dar tavabe martabe balatar(higher-order functions).
*/

// =======================================
// some operators

// spread

const names = ["ali", "mohammad", "reza", "saeed"];
const test = ["first", "last"];

for (let i of names.reverse()) {
  test.splice(1, 0, i);
}
console.log(test); // ['first', 'ali', 'mohammad', 'reza', 'saeed', 'last']

// --------------------

const names2 = ["ali", "mohammad", "reza", "saeed"];
const test2 = ["first", "last"];

test2.splice(1, 0, ...names2);
console.log(test2);

// --------------------

const nums = [5, 7];
const addTwoNumbers = (numOne = 3, numTwo = 4) => console.log(numOne + numTwo);

addTwoNumbers(); // 7
addTwoNumbers(...nums); // 12

// --------------------

const nums1 = [5, 7, 2];
const nums2 = [3, 6];
const addNumbers = (num1, num2, num3, num4, num5) =>
  console.log(num1 + num2 + num3 + num4 + num5);

addNumbers(...nums1, ...nums2); // 23

// ----------------------------------------
// rest

const func = (...params) => console.log(params);

func(); // []
func(4, 7, 8); // [ 4, 7, 8 ]
func(4, 7, 8, 3, 4, 2); // [ 4, 7, 8, 3, 4, 2 ]

// --------------------

const plusNumbers = (...params) => {
  let total = 0;
  params.forEach((i) => (total += i));
  console.log(total);
};

plusNumbers(); // 0
plusNumbers(4, 7, 8); // 19
plusNumbers(4, 7, 8, 3, 4, 2); // 28

// --------------------

const plusNumbers = (x, ...params) => {
  let total = 0;
  params.forEach((i) => (total += i));
  console.log(total * x);
};

plusNumbers(3, 4, 5); // 19 -> 3*(4+5)
plusNumbers(2, 4, 7, 8); // 38

// ========================================
// var vs let vs const

let addNumbers = (x, y) => {
  if (x > y) {
    var z = x - y;
  }
  console.log(z);
};
addNumbers(5, 2); // 3  var => function-scoped

// --------------------

let addNumbers = (x, y) => {
  if (x > y) {
    let z = x - y;
  }
  console.log(z);
};
addNumbers(5, 2); // ReferenceError: z is not defined  let => block-scoped

// --------------------

let addNumbers = (x, y) => {
  if (x > y) {
    const z = x - y;
  }
  console.log(z);
};
addNumbers(5, 2); // ReferenceError: z is not defined  const => block-scoped

// ----------------------------------------

let f = () => {
  console.log(test);
  var test = 20;
};
f(); // undefined

// --------------------

let f = () => {
  console.log(test);
  let test = 20;
};
f(); // ReferenceError: Cannot access 'test' before initialization

// --------------------

let f = () => {
  console.log(test);
  const test = 20;
};
f(); // ReferenceError: Cannot access 'test' before initialization

// =======================================
// some special functions

// setTimeout function

function one() {
  console.log("Function one executed");
}

function two() {
  console.log("Function two executed");
}

setTimeout(one, 1000); // After 1 second
setTimeout(two, 3000); // After 3 seconds

// ----------------------------------------
// anonymous function

function normalFunc() {
  console.log("this is a normal function");
}
normalFunc();

// --------------------

setTimeout(function () {
  console.log("this is a anonymous function");
}, 1000);

// --------------------

setTimeout(() => {
  console.log("this is a anonymous arrow function");
}, 3000);

// ----------------------------------------
// callback function

function greet(name, callback) {
  console.log("hello " + name);
  callback();
}

function sayBye() {
  console.log("goodby");
}

greet("ali", sayBye);

// -9876**************************
// destruchturing

function greet({ name, city }) {
  console.log(`Salam ${name} az ${city}`);
}

greet({ name: "Sara", city: "Mashhad" });
// خروجی: Salam Sara az Mashhad
