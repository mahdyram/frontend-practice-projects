// ========================================
// global-methods

let x = Number("12");

console.log(Number.isNaN(x)); // false

console.log(isNaN(x)); // false  =>  isNan is a Global method

// ----------------------------------------
// URIs

let uri = "https://www.example.com/submit?name=ali reza ram";

let encodedUri = encodeURI(uri);
console.log(encodedUri); // https://www.example.com/submit?name=ali%20reza%20ram

let decodedUri = decodeURI(encodedUri);
console.log(decodedUri); // https://www.example.com/submit?name=ali reza ram

// --------------------

let uri = "https://www.example.com/submit?name=ali reza ram";

let encoded = encodeURIComponent(uri);
console.log(encoded); // https%3A%2F%2Fwww.example.com%2Fsubmit%3Fname%3Dali%20reza%20ram

let decoded = decodeURIComponent(encoded);
console.log(decoded); // https://www.example.com/submit?name=ali reza ram

// ----------------------------------------
// eval

let x = 5;
let y = 3;
let txt = "x**y";
console.log(txt); // x**y

let result = eval(txt);
console.log(result); // 125

// --------------------

let x = 5;
let y = 3;
let txt = `if (x > 3) {
  x ** 2 + y ** 2;
}`;

let result = eval(txt);
console.log(result); // 34

// ----------------------------------------
// parse

let x = "13";
console.log(x + 5); // 135

x = parseInt(x);
console.log(x + 5); // 18

// --------------------

let x = "7.4";

console.log(x); // 7.4
console.log(parseInt(x)); // 7

// --------------------

let x = "7.3";
console.log(x + 5); // 7.35

console.log(parseInt(x) + 5); // 12

console.log(parseFloat(x) + 5); // 12.3

// ========================================
// array-methods

// forEach
/*
- maemoolan braye amaliat haye khareji mesle clg ya taghire motghere khareji bekar miravad.
- khororji nadarad: undefined barmigardanad.
*/

// --------------------

const names = ["ali", "mohammad", "reza", "saeed"];

names.forEach((i) => console.log(i));

names.forEach((item, index) => console.log(item, index));

names.forEach((item2, index2) => {
  item2 += " --> ";
  index2++;
  console.log(item2, index2);
});

// --------------------

const names = ["ali", "mohammad", "reza", "saeed"];

names.forEach(testFunc); // ReferenceError: Cannot access 'testFunc' before initialization.

let testFunc = (item2, index2) => {
  item2 += " --> ";
  index2++;
  console.log(item2, index2);
};

// --------------------

const names = ["ali", "mohammad", "reza", "saeed"];

let testFunc = (item2, index2) => {
  item2 += " --> ";
  index2++;
  console.log(item2, index2);
};

names.forEach(testFunc);

// --------------------

const names = ["ali", "mohammad", "reza", "saeed"];

names.forEach(testFunc); // correct

function testFunc(item2, index2) {
  item2 += " --> ";
  index2++;
  console.log(item2, index2);
}

// ----------------------------------------
// filter
/*
- baraye sakhte array jadid shamele anasori ke shorote khassi darad
- khororji darad: new array
*/

let nums = [1, 4, 5, 6, 11, 13, 14, 24];

let result = nums.filter((item, index) => {
  return item % 2 === 0;
});
console.log(result); // [ 4, 6, 14, 24 ]

// --------------------

let nums = [1, 4, 5, 6, 11, 13, 14, 24];
4;

function filter1(item, index) {
  if (index > 4) {
    return nums[index];
  }
}

let result = nums.filter(filter1);
console.log(result); // [ 13, 14, 24 ]

// ----------------------------------------
// find
/*
- peida kardane avvalin onsor dar arraye ke sharte mara darad.
*/

let numbers = [3, 8, 12, 5, 10];

let found = numbers.find((num) => num > 9);

console.log(found); // 12

// --------------------

const arr = [1, 2, 3, 4, 5, 6, 7];

const findValue = arr.find(function (num) {
  return num === 6;
});
console.log(findValue); // 6

const findValue2 = arr.find((num) => num % 2 === 0);
console.log(findValue2); // 2

// ----------------------------------------
// includes
/*
- barresie vojoode yek meghdar dar array.
- khororji darad: true or false
*/

const names = ["ali", "mohammad", "reza", "saeed"];

console.log(names.includes("reza")); // true
console.log(names.includes("mahdi")); // false

console.log(names.indexOf("ali") !== -1); // true - old
console.log(names.includes("ali")); // true - new

// --------------------

const names = ["ali", "mohammad", "reza", "saeed"];

console.log(names.includes("mohammad")); // true
console.log(names.includes("mohammad", 2)); // false

// ----------------------------------------
// every
/*
- barresi mikonad ke hame anasor sharte dade shode ra dashte bashand.
- khororji darad: true or false
*/

let nums = [1, 4, 5, 6, 11, 13, 14, 24];

let result = nums.every((item) => item % 2 === 0);

console.log(result); // false

// --------------------

let nums = [1, 4, 5, 6, 11, 13, 14, 24];

let result = nums.every((item) => !isNaN(item));

console.log(result); // true

// --------------------

console.log(isNaN(12)); // false
console.log(isNaN("12")); // false  =>  "12" be adad mitavanad tabdil shavad.
console.log(isNaN("ali")); // true

let nums = [1, 4, 5, 6, 11, 13, "14", 24];
let result = nums.every((item) => !isNaN(item));
console.log(result); // true

let nums2 = [1, 4, 5, 6, 11, 13, "14", 24];
let result2 = nums2.every((item) => typeof item === "number" && !isNaN(item));
console.log(result2); // false

// ----------------------------------------
// map
/*
- baraye transformation anasore array bedone taghire khode array.
- khororji darad: array with same length
*/

let nums = [1, 2, 3];

let result = nums.map((n) => n ** 2);

console.log(result); // [1, 4, 9]

// --------------------

let nums = [1, 2, 3];

let func = (num) => num ** 3;

let result = nums.map(func);

console.log(result); // [ 1, 8, 27 ]

// ----------------------------------------
// map vs forEach

let nums = [1, 4, 5, 6, 11];

let forEachResult = nums.forEach((i) => i ** 2);
console.log(forEachResult); // undefined

nums.forEach((i) => console.log(i ** 2)); // 1, 16, 25, 36, 121

let mapResult = nums.map((i) => i ** 2);
console.log(mapResult); // [ 1, 16, 25, 36, 121 ]

// --------------------

let nums = [1, 2, 3];

let mapResult = nums.map((n) => n ** 2);
console.log(mapResult); // [1, 4, 9]

let forEachResult = [];
nums.forEach((n) => forEachResult.push(n ** 2));
console.log(forEachResult); // [1, 4, 9]

// ----------------------------------------
// indexOf

let arr = [1, 4, 5, 6, 11, 13, 4, 14, 24];

console.log(arr.indexOf(4)); // 1
console.log(arr.indexOf(11)); // 4
console.log(arr.indexOf(20)); // -1

// --------------------

const names = ["ali", "mohammad", "reza", "ali", "saeed"];

console.log(names.indexOf("ali")); // 0
console.log(names.indexOf("ali", 1)); // 3

// --------------------

const names = ["ali", "mohammad", "reza", "ali", "saeed"];

console.log(names.indexOf("ali")); // 0
console.log(names.lastIndexOf("ali")); // 3

// ----------------------------------------
// fill (value, [start, end))

let arr1 = new Array(3);

console.log(arr1); // [ <3 empty items> ]
console.log(arr1.length); // 3

arr1.fill("test");
console.log(arr1); // [ 'test', 'test', 'test' ]

// --------------------

let arr = new Array(5).fill("hi");
console.log(arr); // ["hi", "hi", "hi", "hi", "hi"]

// --------------------

let arr1 = [2, 5, "a", 7];
console.log(arr1); // [ 2, 5, 'a' ]

arr1.fill("test");
console.log(arr1); // [ 'test', 'test', 'test', 'test' ]

// --------------------

let arr1 = [1, 2, 3, 4, 5];

arr1.fill(9, 1, 4);
console.log(arr1); // [1, 9, 9, 9, 5]

// --------------------
// agar meghdare value yek object ya array bashad, hame khane ha be haman marjae(refrence) eshare mikonand.

let arr = new Array(3).fill({ x: 1 });
console.log(arr);

arr[0].x = 99;
console.log(arr); // [ { x: 99 }, { x: 99 }, { x: 99 } ] ❗

// ----------------------------------------
// from
/*
- Array.from(arrayLike, mapFunction?, thisArg?)
*/

let str = "hello";
let arr = Array.from(str);
console.log(arr); // [ 'h', 'e', 'l', 'l', 'o' ]

// --------------------

let nums = [1, 2, 3, 4, 5];
let arr1 = Array.from(nums, (x) => x * 2);
console.log(arr1); // [ 2, 4, 6 ]

// ----------------------------------------
// reduce

/*
array.reduce((accumulator, currentValue, currentIndex?, array?) => {
  // code to combine the current value with the accumulated value
}, initialValue?);

- estefade: jamebandi ya kaheshe array be yek meghdare vahed.
*/

const numbers = [175, 50, 25, 10, 5];

let result = numbers.reduce((acc, cur) => {
  acc -= cur;
  return acc;
});
console.log(result); // 85

// or:
let result2 = numbers.reduce((acc, cur) => acc - cur);
console.log(result2); // 85

// --------------------

const numbers = [175, 50, 25, 10, 5];

let result2 = numbers.reduce((acc, cur) => acc - cur, 275);
console.log(result2); // 10

// --------------------

let nums = [1, 2, 3, 4, 5, 5];

let sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 20

let sum2 = nums.reduce((acc, cur) => acc + cur, 7);
console.log(sum2); // 27

// --------------------

let words = ["Hello", "world", "!"];

let sentence = words.reduce((acc, cur) => acc + " " + cur);

console.log(sentence); // "Hello world !"

// --------------------

let people = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 30 },
  { name: "Reza", age: 25 },
];

let ageGroups = people.reduce((acc, person) => {
  if (!acc[person.age]) {
    acc[person.age] = [];
  }
  acc[person.age].push(person.name);
  return acc;
}, {});

console.log(ageGroups); // { '25': ['Ali', 'Reza'], '30': ['Sara'] }

// ----------------------------------------
// practice

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

products.forEach((item) => {
  if (item.exist === false) {
    console.log(item.id);
  }
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

//--------------------
// filter-map

const notExistId = products
  .filter((item) => item.exist === false)
  .map((item) => item.id);

console.log(notExistId); // [ 2, 3 ]

//--------------------
// reduce

const notExistId2 = products.reduce((acc, item) => {
  if (!item.exist) {
    acc.push(item.id);
  }
  return acc;
}, []);

console.log(notExistId2); // [ 2, 3 ]

// ========================================
// string-methods

// concat

let firstName = "Ali";
let lastName = "Rezaei";

let fullName = firstName.concat(" ", lastName);
console.log(fullName); // Ali Rezaei

// --------------------

let message = "Hi".concat(", ", "how", " are", " you?");
console.log(message); // Hi, how are you?

// --------------------

let result = "Age: ".concat(25);
console.log(result); // "Age: 25"

// ----------------------------------------
// split

let sentence = "I love JavaScript";
let words = sentence.split(" ");
console.log(words); // ["I", "love", "JavaScript"]

// --------------------

let data = "apple,banana,cherry";
let fruits = data.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]

// --------------------

let sentence = "one two three four";
let parts = sentence.split(" ", 2);
console.log(parts); // ["one", "two"]

// --------------------

let word = "hello";
let chars = word.split("");
console.log(chars); // ["h", "e", "l", "l", "o"]

// --------------------

console.log("hello".split()); // [ 'hello' ]
console.log("hello".split(",")); // [ 'hello' ]

// ----------------------------------------
// join

let fruits = ["apple", "banana", "cherry"];

let result = fruits.join();
console.log(result); // apple,banana,cherry

let result2 = fruits.join(", ");
console.log(result2); // apple, banana, cherry

// --------------------

let words = ["I", "love", "JS"];
let sentence = words.join(" ");
console.log(sentence); // I love JS

// --------------------

let chars = ["H", "e", "l", "l", "o"];
let result = chars.join("");
console.log(result); // Hello

// ----------------------------------------
// search

let text = "I love JavaScript";

console.log(text.search("love")); // 2
console.log(text.search("Python")); // -1

// --------------------

let text = "I love JavaScript";

console.log(text.search("script")); // -1
console.log(text.search(/script/i)); // 11 -> regex
console.log(text.search("Script")); // 11

// --------------------

let str = "hello javaScript";

console.log(str.search("java")); // 6

console.log(str.indexOf("java")); // 6

// ----------------------------------------
// replace

let text = "Hello World";
let result = text.replace("World", "mahdi");
console.log(result); // Hello mahdi

// --------------------

console.log("hello world".replace("World", "JS")); // hello world
console.log("hello world".replace("world", "JS")); // hello JS
console.log("hello world".replace(/world/i, "JS")); // hello JS

// --------------------

let msg = "one two one";

console.log(msg.replace("one", "1")); // 1 two one

console.log(msg.replace(/one/g, "1")); // 1 two 1  ->  regex

console.log(msg.replaceAll("one", "1")); // 1 two 1

// --------------------
// advanced regex

let str = "Price: $5";
let newStr = str.replace(/\$(\d+)/, (match, p1) => "$" + parseInt(p1) * 2);
console.log(newStr); // Price: $10

// ----------------------------------------
// substring & slice

let str = "JavaScript";

console.log(str.substring(0, 4)); // Java
console.log(str.substring(2, 5)); // vaS

console.log(str.substring(4)); // Script
console.log(str.substring(1)); // avaScript

// --------------------

let str = "JavaScript";

console.log(str.slice(0, 4)); // Java

console.log(str.slice(-6)); // Script
console.log(str.slice(-9)); // avaScript

// ----------------------------------------
// some simple method

console.log("   hello  js   ".trim()); // "hello  js"

console.log("hello".toUpperCase()); // HELLO
console.log("HELLO".toLowerCase()); // hello

console.log("JavaScript".startsWith("Java")); // true
console.log("script.js".endsWith(".js")); // true
console.log("I love JS".includes("love")); // true

console.log("JS ".repeat(2)); // JS JS
console.log("ha".repeat(3)); // hahaha
console.log("★".repeat(5)); // ★★★★★
console.log("=".repeat(10)); // ==========

// ========================================
// numbers-methods

// ========================================
// math-methods

// ========================================
// date-methods
