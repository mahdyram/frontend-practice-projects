// ========================================
// functions (old)

function sayHello() {
  console.log("hello user");
}
sayHello(); // hello user

function hiUser() {
  return "hello user";
}
console.log(hiUser()); // hello user

// --------------------

function sayHello2() {
  let name = prompt("whats your name?");
  alert(`hello ${name}`);
}
sayHello2();

// --------------------

function addTwoNumbers() {
  let num1 = prompt("enter first number:");
  let num2 = prompt("enter second number:");
  alert(`${num1} + ${num2} = ${+num1 + +num2}`);
}
addTwoNumbers();

// ----------------------------------------
// params

function addTwoNumbers2(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
addTwoNumbers2(); // undefined + undefined = NaN
addTwoNumbers2(7); // 7 + undefined = NaN
addTwoNumbers2(7, 9); // 7 + 9 = 16

// --------------------

function addProduct2(title = "Pen", price = 77) {
  console.log(`Title: ${title} - Price: ${price}`);
}
addProduct2(); // Title: Pen - Price: 77
addProduct2("book"); // Title: book - Price: 77
addProduct2("Book", 99); // Title: Book - Price: 99

// ----------------------------------------
// Object-Destructuring

function addProduct3({ title = "Pen", price = 77 }) {
  console.log(`Title: ${title} - Price: ${price}`);
}

addProduct3(); // TypeError
addProduct3({ price: 100 }); // Title: Pen - Price: 100
addProduct3({ title: "Book" }); // Title: Book - Price: 77
addProduct3({ title: "Book", price: 50 }); // Title: Book - Price: 50

// --------------------

function addProduct3({ title = "Pen", price = 77 } = {}) {
  console.log(`Title: ${title} - Price: ${price}`);
}

addProduct3(); // Title: Pen - Price: 77
addProduct3({ price: 100 }); // Title: Pen - Price: 100

// ----------------------------------------
// return

function addProduct4(title, price) {
  return `Title: ${title} - Price: ${price}`;
}
addProduct4(); // nothing in console
addProduct4("Pen", 77); // nothing in console

console.log(addProduct4("Pen", 77)); // Title: Pen - Price: 77

const result4 = addProduct4("book", 88);
console.log(result4); // Title: book - Price: 88

// ========================================
// arrow functions (new)

const sayHello3 = () => {
  console.log("hello user");
};
sayHello3(); // hello user

const sayHello4 = () => {
  return "hello user";
};
console.log(sayHello4()); // hello user

// --------------------
// one-line-return

let sayHello5 = () => console.log("hello user");
sayHello5(); // hello user

const sayHello6 = () => "hello user";
console.log(sayHello6()); // hello user

// ----------------------------------------
// params

let addTwoNumbers3 = (num1, num2) => {
  num1 *= 2;
  num2 **= 2;
  console.log(num1 + num2);
};

addTwoNumbers3(3, 4); // 22

// --------------------

const addProduct5 = (title, price) => {
  return `Title: ${title} - Price: ${price}`;
};

console.log(addProduct5("Pen", 66)); // Title: Pen - Price: 66

// --------------------

let addTwoNumbers4 = (num1, num2) => console.log(num1 + num2);

addTwoNumbers4(7, 9); // 16

// --------------------

const addProduct6 = (title, price) => `Title: ${title} - Price: ${price}`;

const result6 = addProduct6("Pen", 55);
console.log(result6); // Title: Pen - Price: 55

// =======================================
// Destructuring

function printFullName(person) {
  console.log(`${person.fName} - ${person.lName}`);
}

const person = { fName: "ali", lName: "ram", age: 31 };
printFullName(person); // ali - ram

// --------------------

function printFullName(person) {
  const { fName, lName } = person;
  console.log(`${fName} - ${lName}`);
}

const person = { fName: "ali", lName: "ram", age: 31 };
printFullName(person); // ali - ram

// --------------------

function printFullName({ fName, lName }) {
  console.log(`${fName} - ${lName}`);
}

const person1 = { fName: "ali", lName: "ram", age: 31 };
const person2 = { fName: "negar" };

printFullName(person1); // ali - ram
printFullName(person2); // negar - undefined
// printFullName(); // TypeError: Cannot destructure property 'fName' of 'undefined' as it is undefined.

// --------------------

function printFullName({ fName, lName }, message) {
  console.log(`${fName} - ${lName} : ${message}`);
}

const person1 = { fName: "ali", lName: "ram", age: 31 };
printFullName(person1, "is the best"); // ali - ram : is the best

// --------------------

function printFullName({ fName = "?", lName = "??" } = {}) {
  console.log(`${fName} - ${lName}`);
}

const person1 = { fName: "ali", lName: "ram", age: 31 };
const person2 = { fName: "negar" };
const person3 = {};

printFullName(person1); // ali - ram
printFullName(person2); // negar - ??
printFullName(person3); // ? - ??
printFullName(); // ? - ??

/*
`= {}` bad az parameter dar tabe baes mishe agar kol argument `undefined` bood,
ba ye object khali jaygozin beshe (va error destructuring rooye `undefined` pish nayad).
*/

// --------------------

function printFullName({ fName = "?", lName = "??" } = {}, message) {
  console.log(`${fName} - ${lName} : ${message}`);
}

const person1 = { fName: "ali", lName: "ram", age: 31 };
const person2 = { fName: "negar" };

printFullName(person1, "is the best"); // ali - ram : is the best
printFullName(person2, "is greate"); // negar - ?? : is greate

// --------------------

const addTwoNumbers = ({ numOne = 3, numTwo = 4 } = {}) => {
  console.log(numOne + numTwo);
};

addTwoNumbers({ numTwo: 7 }); // 10
addTwoNumbers({ numOne: 5, numTwo: 7 }); // 12

const obj = { numOne: 8, numTwo: 6 };
addTwoNumbers({ ...obj }); // 14

// --------------------

function callbackFunc(e) {
  // const firstName = e.target.elements.firstName;
  // const lastName = e.target.elements.lastName;
  // const age = e.target.elements.age;

  const { firstName, lastName, age } = e.target.elements;
}

// ----------------------------------------
// spread-operators

const addTwoNumbers = (numOne = 3, numTwo = 4) => console.log(numOne + numTwo);

addTwoNumbers(); // 7

const nums = [5, 7];
addTwoNumbers(...nums); // 12

// --------------------

const addNumbers = (num1, num2, num3, num4, num5) =>
  console.log(num1 + num2 + num3 + num4 + num5);

const nums1 = [5, 7, 2];
const nums2 = [3, 6];
addNumbers(...nums1, ...nums2); // 23

// ----------------------------------------
// rest-parameters

const f = (a, b, ...args) => {
  console.log("a: ", a);
  console.log("b: ", b);
  console.log("other args: ", args);
};

f(4);
f(4, 7);
f(4, 7, 8, 3, 4, 2);

// --------------------

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

plusNumbers(3, 4, 5); // 27 => 3*(4+5)
plusNumbers(2, 4, 7, 8); // 38

// ========================================
// var vs let vs const

let addNumbers = (x, y) => {
  if (x > y) {
    var z = x - y;
  }
  console.log(z);
};
addNumbers(5, 2); // 3:  var is function-scoped

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
}, 2000);

// ----------------------------------------
// setTimeout function

console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");

// --------------------

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");

// --------------------

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

setTimeout(() => {
  console.log("3");
}, 0);

console.log("4");

// --------------------

function one() {
  console.log("Function one executed");
}

function two() {
  console.log("Function two executed");
}

one();
setTimeout(one, 1000); // After 1 second
setTimeout(two, 3000); // After 3 seconds

// ----------------------------------------
// callback function

function sayHello() {
  console.log("Hello!");
}

function greet(callback) {
  callback();
}

greet(sayHello); // Hello!

// --------------------

function sayName(name) {
  console.log("Hello, " + name);
}

function greetPerson(callback) {
  const name = "Ali";
  callback(name);
}

greetPerson(sayName);

// --------------------

function greet(name, callback) {
  console.log("hello " + name);
  callback();
}

function sayBye() {
  console.log("goodby");
}

greet("ali", sayBye);

// --------------------

function greet(name, callback) {
  console.log("hello " + name);
  callback(name);
}

function sayBye(x) {
  console.log("goodby " + x);
}

greet("ali", sayBye);

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

let sum2 = function (a, b) {
  return a + b;
};
/*
- in tabe ghaleban bedoone nam ast(anonymous) va dar motaghayere 'sum2' zakhire shode ast (vali mitavanad named ham bashad).
- 'Hoisting' nemishavad (chon dakhele motaghayer hast - motghir let ham hoist nemishavad).
- in noe tabe ra mitavan beonvane argoman, meghdare bazgashti, ya methode object estefade kard.
*/

// --------------------
// Arrow Function

let sum3 = (a, b) => a + b;
/*
- noei az function-expression(fe) amma kootahtar.
- barkhalafe fe, 'this', 'arguments', 'super' va 'new.target' nadarad.
- baraye object-methods ke be this ehtiaj darand monaseb nist.
- monaseb bareye tavabe kootah ya estefade dar tavabe martabe balatar(higher-order functions).
*/
