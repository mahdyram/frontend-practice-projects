// ========================================
// DataTypes

/*
- Primitive data-type  =>  {number, string, boolean, undefined, null} => 'Stack'
- Refrence data-type   =>  {Array, Object, Function} => 'Heap'
*/

let age1 = 24;
let name1 = "mahdi";

console.log(typeof age1); // number
console.log(typeof name1); // string

console.log(name1, "is", age1); // mahdi is 24

const result1 = name1 + " is " + age1;
console.log(result1); // mahdi is 24

const result2 = `${name1} is ${age1}`;
console.log(result2); // mahdi is 24

// --------------------

let inf1 = 1 / 0;
let inf2 = Infinity;

console.log(typeof inf1); // number
console.log(typeof inf2); // number

console.log(inf1); // Infinity
console.log(inf2); // Infinity

// --------------------

let num1 = 23000000;
console.log(num1);

let num2 = 23_000_000;
console.log(num2);

let num3 = 23e6;
console.log(num3);

// ----------------------------------------

const bigInt = 1234567890123456789012345678901234567890n;

console.log(typeof bigInt); // bigint
console.log(bigInt); // 1234567890123456789012345678901234567890n

// ----------------------------------------

let validUser = true;
let isGreater = 4 > 7;

console.log(typeof validUser); // boolean
console.log(typeof isGreater); // boolean

console.log(validUser); // true
console.log(isGreater); // false

// ----------------------------------------

let nan1 = "ali" / 3;
let nan2 = NaN + 3;
let nan3 = NaN;

console.log(typeof nan1); // number
console.log(typeof nan2); // number
console.log(typeof nan3); // number

console.log(nan1); // NaN
console.log(nan2); // NaN
console.log(nan3); // NaN

console.log(NaN ** 0); // 1

console.log(nan1 === NaN); // false
console.log(isNaN(nan1)); // true

// ----------------------------------------

let user;
console.log(typeof user); // undefined
console.log(user); // undefined

let user2 = undefined;
console.log(typeof user2); // undefined
console.log(user2); // undefined

let user3 = "ali";
user3 = undefined;
console.log(typeof user3); // undefined
console.log(user3); // undefined

let test1;
let test2 = undefined;
console.log(test1 === test2); // true

// ----------------------------------------

let user4 = null;
console.log(typeof user4); // object (old bug - type of null is null)
console.log(user4); // null

let test10 = null;
let test20;
console.log(test10 === test20); // false

// ----------------------------------------

let sym1 = Symbol("test");
let sym2 = Symbol("test");

console.log(typeof sym1); // "symbol"
console.log(sym1, "|", sym2); // Symbol(test) | Symbol(test)
console.log(sym1 === sym2); // false

// ----------------------------------------

console.log(typeof Math); // "object"

console.log(typeof console); // "object"

console.log(typeof console); // "function" (see in browser)

// ----------------------------------------
// more string

console.log("you can't"); // you can't
console.log(`you can't`); // you can't
// console.log('you can\'t'); // you can't

console.log("i am \tmahdy"); // i am 	mahdy
console.log("i am \nmahdy");

console.log(`hello
   ali`);

// ========================================
// Literal & Wrapper

let str = "ali"; // a primitive string
let strObj = new String("ali"); // a String object (object wrapper for a string)

console.log(typeof str); // string
console.log(typeof strObj); // object

console.log(str === strObj); // false

// --------------------

let b = new Boolean(false);

if (b) {
  console.log("true!"); // true!
}

// --------------------

let str = "hello"; // string literal
let num = 42; // number literal
let bool = true; // boolean literal

let strObj = new String("hello"); // wrapper object
let numObj = new Number(42); // wrapper object
let boolObj = new Boolean(true); // wrapper object

// estefade az literal tosieh mishavad
