// ========================================
// global-methods

let x = Number("12");

console.log(Number.isNaN(x)); // false

console.log(isNaN(x)); // false => isNan is a Global method

// ----------------------------------------
// URIs

let uri = "https://www.example.com/submit?name=ali reza ram";

let encodedUri = encodeURI(uri);
console.log(encodedUri);

let decodedUri = decodeURI(encodedUri);
console.log(decodedUri);

// --------------------

let uri = "https://www.example.com/submit?name=ali reza ram";

let encoded = encodeURIComponent(uri);
console.log(encoded);

let decoded = decodeURIComponent(encoded);
console.log(decoded);

// ----------------------------------------
// eval

let x = 5;
let y = 3;

console.log("x**y"); // x**y

console.log(eval("x**y")); // 125

// --------------------

let x = 5;
let y = 3;
let txt = `if (x > 3) {
  x ** 2 + y ** 2;
}`;

console.log(eval(txt)); // 34

// ----------------------------------------
// parse

console.log("7.8"); // 7.8
console.log(parseInt("7.8")); // 7

console.log(parseInt("7.8fsadfa")); // 7
console.log(parseInt("7.8  fsadfa")); // 7
console.log(parseInt("7 4 23")); // 7

// --------------------

let x = "13";
console.log(x + 5); // 135

x = parseInt(x);
console.log(x + 5); // 18

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
- khororji nadarad: undefined.
*/

const names = ["ali", "mohammad", "reza", "saeed"];

let result = names.forEach((i) => i);

console.log(result); // undefined

// --------------------

const names = ["ali", "mohammad", "reza", "saeed"];

names.forEach((i) => console.log(i));

names.forEach((item, index) => console.log(item, index));

names.forEach((item2, index2) => {
  console.log(item2 + " --> ", ++index2);
});

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
names.forEach(testFunc); // ReferenceError: Cannot access 'testFunc' before initialization.

let testFunc = (item2, index2) => {
  item2 += " --> ";
  index2++;
  console.log(item2, index2);
};

const names = ["ali", "mohammad", "reza", "saeed"];
names.forEach(testFunc); // correct

function testFunc(item2, index2) {
  item2 += " --> ";
  index2++;
  console.log(item2, index2);
}

// ----------------------------------------
// map
/*
- baraye transformation anasore array bedone taghire khode array.
- khororji darad: array ba toole yeksan
*/

let nums = [1, 2, 3];

nums.map((n) => console.log(n ** 2));

// --------------------

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
// filter
/*
- baraye sakhte array jadid shamele anasori ke shorote khassi darad
- khororji darad: arraye filter shode
*/

let nums = [1, 4, 5, 6, 11, 13, 14, 24];

nums.filter((item, index) => {
  console.log(item % 2 === 0);
});

// --------------------

let nums = [1, 4, 5, 6, 11, 13, 14, 24];

let result = nums.filter((item, index) => {
  return item % 2 === 0;
});

console.log(result); // [ 4, 6, 14, 24 ]

// --------------------

let nums = [1, 4, 5, 6, 11, 13, 14, 24];

function filter1(item, index) {
  if (index > 4) {
    return item;
  }
}

let result = nums.filter(filter1);
console.log(result); // [ 13, 14, 24 ]

// ----------------------------------------
// find
/*
- peida kardane avvalin onsor dar arraye ke sharte mara darad.
- khororji darad: yek onsor az arraye (ya undefined)
*/

let numbers = [3, 8, 12, 5, 10];

numbers.find((num) => console.log(num > 9));

// --------------------

let numbers = [3, 8, 12, 5, 10];

let found = numbers.find((num) => num > 9);

console.log(found); // 12

// --------------------

let numbers = [3, 8, 12, 5, 10];

let found = numbers.find((num) => num > 15);

console.log(found); // undefined

// --------------------

const arr = [1, 2, 3, 4, 5, 6, 7];

const findValue = arr.find(function (num) {
  return num === 6;
});
console.log(findValue); // 6

const findValue2 = arr.find((num) => num % 2 === 0);
console.log(findValue2); // 2

// ----------------------------------------
// findIndex
/*
- peida kardane index avvalin onsor dar arraye ke sharte mara darad.
- khororji darad: index yek onsor az arraye (ya -1)
*/

let numbers = [3, 8, 12, 5, 10];

numbers.findIndex((num) => console.log(num > 9));

// --------------------

let numbers = [3, 8, 12, 5, 10];

let found = numbers.findIndex((num) => num > 9);

console.log(found); // 2

// --------------------

let numbers = [3, 8, 12, 5, 10];

let found = numbers.findIndex((num) => num > 15);

console.log(found); // -1

// ----------------------------------------
// every
/*
- barresi mikonad ke hame anasor sharte dade shode ra dashte bashand.
- khororji darad: false-true
*/

let nums = [1, 4, 5, 6, 11, 13, 14, 24];

nums.every((item) => console.log(item % 2 === 0));

// --------------------

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
// flat

const arr = [1, 2, [3, 4]];
const result = arr.flat();
console.log(result); // [1, 2, 3, 4]

// --------------------

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]

// --------------------

const arr = [1, 2, 3];
const result = arr.map((x) => [x * 2]);
console.log(result); // [ [2], [4], [6] ]
console.log(result.flat()); // [2, 4, 6]

// --------------------

const arr = [1, 2, 3];
const result = arr.flatMap((x) => [x * 2]);
console.log(result); // [2, 4, 6]

// --------------------

const arr = [1, [2, [3, [4]]]];
console.log(arr.flat(Infinity)); // [1, 2, 3, 4]

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
console.log(names.lastIndexOf("ali")); // 3

// ----------------------------------------
// includes

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
console.log(arr1); // [ 2, 5, 'a', 7 ]

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
console.log(arr); // [ { x: 99 }, { x: 99 }, { x: 99 } ]

// ----------------------------------------
// sort
/*
- betore pishfarz anasor ro besoorate reshte ei morattab mikonad.
- arraye asli ra taghir midahad
*/

const names = ["ali", "sara", "caren"];
console.log(names.sort()); // [ 'ali', 'caren', 'sara' ]

const naems2 = ["Ali", "Sara", "caren"];
console.log(naems2.sort()); // [ 'Ali', 'Sara', 'caren' ]

// --------------------

const age = [14, 4, 35, 56, 33, 24];
age.sort();
console.log(age); // [ 14, 24, 33, 35, 4, 56 ]  =>  "14" < "24" < "33" < "35" < "4" < "56"

const age = [14, 4, 35, 56, 33, 24];
age.sort((a, b) => a - b);
console.log(age); // [ 4, 14, 24, 33, 35, 56 ]

const age = [14, 4, 35, 56, 33, 24];
age.sort((a, b) => b - a);
console.log(age); // [ 56, 35, 33, 24, 14, 4 ]

// --------------------

const age = [14, 4, 35, 56, 33, 24];

const arr = age.slice().sort((a, b) => b - a);

console.log(age); // [ 14, 4, 35, 56, 33, 24 ]
console.log(arr); // [ 56, 35, 33, 24, 14, 4 ]

// --------------------

const books = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    pages: 1216,
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    pages: 295,
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    pages: 658,
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    pages: 223,
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    pages: 835,
  },
];

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);

console.log(sortedByPages);

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
  code to combine the current value with the accumulated value
}, initialValue?);

- estefade: jamebandi ya kaheshe array be yek meghdare vahed.
*/

const numbers = [175, 50, 25, 10, 5];

numbers.reduce((acc, cur) => console.log(acc, cur));

numbers.reduce((acc, cur) => console.log(acc, cur), 77);

// --------------------

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

let nums = [1, 2, 3, 4, 5];

let sum = nums.reduce((acc, cur) => acc + cur);
console.log(sum); // 15

let sum2 = nums.reduce((acc, cur) => acc + cur, 7);
console.log(sum2); // 22

// --------------------

let words = ["Hello", "world", "!"];

let sentence = words.reduce((acc, cur) => acc + " " + cur);

console.log(sentence); // Hello world !

// --------------------

const books = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    pages: 1216,
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    pages: 295,
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    pages: 658,
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    pages: 223,
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    pages: 835,
  },
];

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);

console.log(pagesAllBooks); // 3227

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
// practice-1

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
  if (item.exist === false) {
    console.log(item.title);
  }
});

console.log("-".repeat(30));

//--------------------
// map

const productTitle = products.map((item) => {
  if (item.exist === false) {
    return item.title;
  }
});

console.log(productTitle); // output: array
console.log("-".repeat(30));

//--------------------
// filter

const notExist = products.filter((item) => {
  return item.exist === false;
});

console.log(notExist);
console.log("-".repeat(30));

//--------------------
// filter-map

const notExistId = products
  .filter((item) => item.exist === false)
  .map((item) => item.id);

console.log(notExistId); // [ 2, 3 ]
console.log("-".repeat(30));

//--------------------
// reduce

const notExistId2 = products.reduce((acc, item) => {
  if (!item.exist) {
    acc.push(item.id);
  }
  return acc;
}, []);

console.log(notExistId2); // [ 2, 3 ]

// ----------------------------------------
// practice-2

const books = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    pages: 1216,
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    pages: 295,
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    pages: 658,
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    pages: 223,
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    pages: 835,
  },
];

// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);
console.log("=".repeat(20));

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);
console.log("=".repeat(20));

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
console.log(booksAfterUpdate);

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

let word = "hello";
let chars = word.split("");
console.log(chars); // ["h", "e", "l", "l", "o"]

// --------------------

console.log("hello".split()); // [ 'hello' ]
console.log("hello".split("")); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log("hello".split(",")); // [ 'hello' ]

// --------------------

let sentence = "I love JavaScript";
let words = sentence.split(" ");
console.log(words); // ["I", "love", "JavaScript"]

// --------------------

let data = "apple,banana,cherry";
let fruits = data.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]
console.log(fruits.join(" ")); // "apple banana cherry"

// --------------------

let sentence = "one two three four";
let parts = sentence.split(" ", 2);
console.log(parts); // ["one", "two"]

// ----------------------------------------
// join

let fruits = ["apple", "banana", "cherry"];

console.log(fruits.join()); // apple, banana, cherry
console.log(fruits.join(", ")); // apple, banana, cherry
console.log(fruits.join(" ")); // apple banana cherry

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

// ----------------------------------------
// indexOf

let str = "hello javaScript and java";

console.log(str.search("java")); // 6

console.log(str.indexOf("java")); // 6

console.log(str.indexOf("java", 7)); // 21
console.log(str.indexOf("java", str.indexOf("java") + 1)); // 21

console.log(str.lastIndexOf("java")); // 21

// ----------------------------------------
// replace

let text = "Hello World";
let result = text.replace("World", "mahdi");
console.log(result); // Hello mahdi

// --------------------

console.log("hello World".replace("world", "JS")); // hello World
console.log("hello World".replace("World", "JS")); // hello JS
console.log("hello World".replace(/world/i, "JS")); // hello JS

// --------------------

let msg = "one two one";

console.log(msg.replace("one", "1")); // 1 two one

console.log(msg.replace(/one/g, "1")); // 1 two 1  ->  regex
console.log(msg.replace(/One/gi, "1")); // 1 two 1  ->  regex

console.log(msg.replaceAll("one", "1")); // 1 two 1

// --------------------
// advanced regex

let str = "Price: $5";
let newStr = str.replace(/\$(\d+)/, (match, p1) => "$" + parseInt(p1) * 2);
console.log(newStr); // Price: $10

// ----------------------------------------
// substring & slice [start, end)

let str = "JavaScript";

console.log(str.substring(0, 4)); // Java
console.log(str.substring(2, 5)); // vaS

console.log(str.substring(4)); // Script
console.log(str.substring(1)); // avaScript

console.log(str.substring(-3)); // JavaScript
console.log(str.substring(-5)); // JavaScript

// --------------------

let str = "JavaScript";

console.log(str.slice(0, 4)); // Java
console.log(str.slice(3)); // aScript

console.log(str.slice(-6)); // Script
console.log(str.slice(-9)); // avaScript
console.log(str.slice(0, -6)); // Java

// ----------------------------------------
// padStart & padEnd

console.log("ali".padStart(5)); // "  ali"
console.log("ali".padStart(5, "o")); // "ooali"
console.log("ali".padStart(5, 1)); // "11ali"

console.log("ali".padStart(4, "1-")); // "1ali"
console.log("ali".padStart(5, "1-")); // "1-ali"

console.log("7".padStart(3, "0")); // 007
console.log("37".padStart(3, "0")); // 037
console.log("456".padStart(3, "0")); // 456

// --------------------

console.log("ali".padEnd(6, "f")); // "alifff"
console.log("ali".padEnd(4, "ram")); // "11ali"
console.log("ali".padEnd(5, "ram")); // "11ali"
console.log("ali".padEnd(6, "ram")); // "11ali"

// ----------------------------------------
// some simple methods

console.log("   hello  js   ".trim()); // "hello  js"
console.log("   hello  js   ".trimStart()); // "hello  js   "
console.log("   hello  js   ".trimEnd()); // "   hello  js"

console.log("hello".toUpperCase()); // HELLO
console.log("HELLO".toLowerCase()); // hello

console.log("hello".includes("h")); // true
console.log("I love JS".includes("love")); // true

console.log("JavaScript".startsWith("Java")); // true
console.log("script.js".endsWith(".js")); // true

console.log("Hello".at(1)); // 'e'
console.log("Hello".at(4)); // '0'
console.log("Hello".at(-1)); // 'o'
console.log("Hello".at(5)); // undefined

console.log("JS ".repeat(2)); // JS JS
console.log("ha".repeat(3)); // hahaha
console.log("★".repeat(5)); // ★★★★★
console.log("=".repeat(10)); // ==========

// ========================================
// numbers-methods

// is

let num = 12;

console.log(Number.isNaN(num)); // false
console.log(isNaN(num)); // false
console.log(!isNaN(num)); // true

console.log(isFinite(num)); // true

console.log(Number.isInteger(num)); // true
console.log(Number.isInteger(12.3)); // false

// ----------------------------------------
// to...  ->  output: string

let num = 12.23478;
console.log(num.toFixed(3)); // 12.235

let num2 = 12.23428;
console.log(num2.toFixed(3)); // 12.234

// --------------------

let num = 12.23478;
console.log(num.toPrecision(3)); // 12.2
console.log(num.toPrecision(5)); // 12.235

// ========================================
// math-methods

// max-min

let x = Math.max(2, 5, 6, 8, 4, 3);
console.log(x); // 8

// --------------------

let arr = [4, 8, 2, 1, 6, 9];

console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr)); // 9
console.log(Math.min(...arr)); // 1

// ----------------------------------------
// power-root-abs

console.log(Math.pow(5, 3)); // 125

console.log(Math.sqrt(16)); // 4

console.log(Math.abs(-16)); // 16

// ----------------------------------------
// random

console.log(Math.random()); // ? in [0, 1)

// --------------------
// ? in [0, n)

let n = 10;
console.log(Math.floor(Math.random() * n));

// --------------------
// ? in [a, b]

let min = 5;
let max = 15;
let rand = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rand);

// ----------------------------------------
// round-floor-ceil-trunc

let num1 = 5.69;
let num2 = 3.2647;
let num3 = 7.5;
let num4 = -7.5;

console.log(Math.round(num1)); // 6
console.log(Math.round(num2)); // 3
console.log(Math.round(num3)); // 8
console.log(Math.round(num4)); // -7

console.log(Math.ceil(num1)); // 6
console.log(Math.ceil(num2)); // 4
console.log(Math.ceil(num3)); // 8
console.log(Math.ceil(num4)); // -7

console.log(Math.floor(num1)); // 5
console.log(Math.floor(num2)); // 3
console.log(Math.floor(num3)); // 7
console.log(Math.floor(num4)); // -8

console.log(Math.trunc(num1)); // 5
console.log(Math.trunc(num2)); // 3
console.log(Math.trunc(num3)); // 7
console.log(Math.trunc(num4)); // -7

// ----------------------------------------
// properties

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.LN10); // 2.302585092994046
console.log(Math.SQRT2); // 1.4142135623730951

// ========================================
// date-methods

let currentDate = new Date();
console.log(currentDate);
// in vscode: 2025-05-26T 00:53:08.962Z
// in console: Mon May 26 2025 04:23:40 GMT+0330 (Iran Standard Time)

// --------------------
// create date

let d1 = new Date("Dec 31 2010");
let d2 = new Date("2010-12-31");
let d3 = new Date(2010, 11, 31); // January = 0، December = 11

console.log(d1); // Wed Dec 31 2010
console.log(d2); // Wed Dec 31 2010
console.log(d3); // Wed Dec 31 2010

// --------------------
// get...

let date = new Date();

console.log(date.getFullYear()); // Year (YYYY)
console.log(date.getMonth()); // Month (0-11)
console.log(date.getDate()); // Date-of-Month (1-31)
console.log(date.getDay()); // Day-of-Week (0-6)

console.log(date.getHours()); // (0-23)
console.log(date.getMinutes()); // (0-59)
console.log(date.getSeconds()); // (0-59)

console.log(date.getTime()); // Unix-Epoch: in second since 00:00:00 on January 1, 1970

// --------------------
//compare two date:

const date1 = new Date(1995, 11, 3, 16, 35, 21);
const date2 = new Date(1995, 11, 3, 16, 35, 21);

console.log(date1 === date2); // false!

console.log(date1.getTime() === date2.getTime()); // true

// --------------------
// set...

let date = new Date();

date.setFullYear(2020, 9, 28);
console.log(date); // 2020-10-28T01:47:28.061Z

date.setMonth(11);
date.setDate(21);
date.setHours(12);
date.setMinutes(34);
date.setSeconds(44);
console.log(date); // 2020-12-21T09:04:44.130Z

// --------------------
// convert-to-string

let now = new Date();

console.log(now);
console.log(now.toDateString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

console.log(Date.parse(now));

// ----------------------------------------
// practice: change date format

const formatDate = (dateObject) => {
  const parts = {
    year: dateObject.getFullYear().toString(),
    month: (dateObject.getMonth() + 1).toString().padStart(2, "0"),
    date: dateObject.getDate().toString().padStart(2, "0"),
    hour: (dateObject.getHours() % 12 || 12).toString().padStart(2, "0"),
    amOePm: dateObject.getHours() < 12 ? "AM" : "PM",
    minute: dateObject.getMinutes().toString().padStart(2, "0"),
  };

  return `${parts.year}/${parts.month}/${parts.date} ${parts.hour}:${parts.minute} ${parts.amOePm}`;
};

const myDate = new Date(1995, 11, 3, 16, 9);
const myDateFormated = formatDate(myDate);

console.log(myDate); // 1995-12-03T13:05:21.000Z  =>  UTC-tiem
console.log(myDateFormated); // 1995/12/03 04:35  =>  Local-time

// --------------------
// UTC-Date

const formatDateUTC = (dateObject) => {
  const parts = {
    year: dateObject.getUTCFullYear(),
    month: String(dateObject.getUTCMonth() + 1).padStart(2, "0"),
    date: String(dateObject.getUTCDate()).padStart(2, "0"),
    hour: String(dateObject.getUTCHours() % 12 || 12).padStart(2, "0"),
    minute: String(dateObject.getUTCMinutes()).padStart(2, "0"),
  };

  return `${parts.year}/${parts.month}/${parts.date} ${parts.hour}:${parts.minute}`;
};

const myDate = new Date(1995, 11, 3, 16, 9);
console.log(myDate);
console.log(formatDateUTC(myDate));

// --------------------
// use Day.js pakage

import dayjs from "dayjs";

const myDate = dayjs("1995-11-3 16:9");

console.log(myDate.format("YYYY/M/D hh:m A"));

// ----------------------------------------
// Date.now()

console.log(Date.now()); // 1748221020255  =>  It means the number of milliseconds that have passed since 00:00:00 on January 1, 1970 (UTC) — also known as the Unix Epoch.

// --------------------
// time of 2 points:

let start = Date.now();
// ... some code
let end = Date.now();
console.log(`Duration: ${end - start} ms`);

// --------------------
// create userId based on date:

let id = "user_" + Date.now();
console.log(id); // user_1748221987484

// --------------------
// one year after Unix Epoch:

console.log(new Date(0)); // 1970-01-01T00:00:00.000Z  (zero time)

let oneYear = 365 * 24 * 60 * 60 * 1000;
console.log(new Date(oneYear)); // 1971-01-01T00:00:00.000Z

// --------------------

let now = new Date();

console.log(now.getTime());

console.log(new Date(now.getTime()));
console.log(now);
