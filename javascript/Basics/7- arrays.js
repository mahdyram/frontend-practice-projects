// ========================================
// Arrays

let arr1 = ["ali", 15, true];
let arr2 = new Array("sara", 14, false);

console.log(arr1, arr2); // [ 'ali', 15, true ] - [ 'sara', 14, false ]
console.log(typeof arr1, typeof arr2); // object - object

// --------------------

let arr1 = [4];
let arr2 = new Array(4);
console.log(arr1, arr2); // [ 4 ] [ <4 empty items> ]
console.log(arr1.length, arr2.length); // 1 4

let arr1 = [, , , ,];
let arr2 = new Array(4);
console.log(arr1, arr2); // [ <4 empty items> ] [ <4 empty items> ]
console.log(arr1.length, arr2.length); // 4 4

// ----------------------------------------

let arr1 = ["ali", 16, 12];
console.log(arr1); // [ 'ali', 16, 12 ]

arr1 = ["sara", 13, false];
console.log(arr1); // [ 'sara', 13, false ]

arr1[0] = "ali";
console.log(arr1); // [ 'ali', 13, false ]

arr1[3] = "ram";
console.log(arr1); // [ 'ali', 13, false, 'ram' ]

arr1[6] = 18;
console.log(arr1); // [ 'ali', 13, false, 'ram', <2 empty items>, 18 ]
console.log(arr1.length); // 7

// --------------------

const product = ["book", 99, false];

console.log(product); // [ 'book', 99, false ]
console.log(product[0]); // book
console.log(product.length); // 3
console.log(typeof product); // object

// product = ["pen", 99, false]  =>  TypeError: Assignment to constant variable.

product[0] = "bk";
console.log(product); // [ 'bk', 99, false ]

product[3] = true;
console.log(product); // [ 'bk', 99, false, true ]

// --------------------

let str = "aliram";

console.log(str[0]); // a
console.log(str[5]); // m
console.log(str[-1]); // undefined
console.log(str[str.length - 1]); // m

// ========================================
// some simple methods

const product = ["book", 99];

product[product.length] = false;
console.log(product); // [ 'book', 99, false ]

product.push("pen");
console.log(product); // [ 'book', 99, false, 'pen' ]

let test1 = product.push(20);
console.log(product, test1); // [ 'book', 99, false, 'pen', 20 ] 5

let test2 = product.push("ali");
console.log(product, test2); // [ 'book', 99, false, 'pen', 20, 'ali' ] 6

// --------------------

const arr = [1, 2, 3, 4, 5];
arr.unshift("notebook");
console.log(arr); // [ 'notebook', 1, 2, 3, 4, 5 ]

// --------------------

const arr = [10, 20, 30, 40, 50];

arr.pop();
console.log(arr); // [ 10, 20, 30, 40 ]

let test = arr.pop();
console.log(arr, test); // [ 10, 20, 30 ] 40

// --------------------

const arr = [10, 20, 30, 40, 50];

arr.shift();
console.log(arr); // [ 20, 30, 40, 50 ]

let test = arr.shift();
console.log(arr, test); // [ 30, 40, 50 ] 20

// --------------------

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.splice(2, 1);
console.log(arr); // [ 1, 2, 4, 5, 6, 7 ]

let test = arr.splice(2, 3);
console.log(arr, test); // [ 1, 2, 7 ] [ 4, 5, 6 ]

// --------------------

const arr = [1, 2, 5, 6, 7];
arr.splice(2, 0, 3, 4);
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]

const arr = [1, 2, 8, 9, 5, 6, 7];
arr.splice(2, 2, 3, 4);
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]

// --------------------

const arr = [1, 2, 3, 4, 5, 6, 7];

delete arr[2];
console.log(arr); // [ 1, 2, <1 empty item>, 4, 5, 6, 7 ]

arr[2] = "ali";
console.log(arr); // [ 1, 2, "ali", 4, 5, 6, 7 ]

// --------------------

const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);
console.log(arr); // [ 1, 2, 4, 5 ]
arr[2] = "ali";
console.log(arr); // [ 1, 2, "ali", 5 ]

const arr2 = [1, 2, 3, 4, 5];
delete arr2[2];
console.log(arr2); // [ 1, 2, <1 empty item>, 4, 5 ]
arr2[2] = "ali";
console.log(arr2); // [ 1, 2, "ali", 4, 5 ]

const arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 1, "ali");
console.log(arr3); // [ 1, 2, 'ali', 4, 5 ]

// --------------------

const arr1 = [1, 3, 4];
const arr2 = [5, 6, "ali"];

console.log(arr1.concat(arr2)); // [ 1, 3, 4, 5, 6, 'ali' ]

// ========================================
// destructuring assignment

let x = 7;
let y = 4;
console.log(x, y);

let g1, g2;
[g1, g2] = [x, y];
console.log(g1, g2);

// --------------------

let f1 = 7;
let f2 = 4;
console.log(f1, f2);

[f1, f2] = [f2, f1];
console.log(f1, f2);

// --------------------

const product2 = ["book", 99, false];
console.log(product2);

const [name1] = product2;
console.log(name1); // book

const [name2, price2] = product2;
console.log(name2, price2); // book 99

const [name3, price3, valid3] = product2;
console.log(valid3); // false

const [name4, ...other] = product2;
console.log(name4); // book
console.log(other); // [ 99, false ]

// --------------------

const p1 = [10, 20, 30];
const p2 = [40, 50, 60];

const c1 = [p1 + p2];
console.log(c1);

const c2 = [p1, p2];
console.log(c2);

const c3 = p1.concat(p2);
console.log(c3);

const c4 = [...p1, ...p2];
console.log(c4);

// ========================================
// practice

let shoppingList = [];
// shoppingList.splice(0, 0, "Milk", "Bread", "Apples");
shoppingList.push("Milk", "Bread", "Apples");
console.log(shoppingList);

shoppingList.splice(1, 1, "Bananas", "Eggs");
console.log(shoppingList);

console.log(shoppingList.pop());
console.log(shoppingList);

shoppingList.sort();
console.log(shoppingList);

console.log(shoppingList.indexOf("Milk"));

shoppingList.splice(1, 0, "Carrots", "Lettuce");
console.log(shoppingList);

let newList = ["Juice", "Pop"];
shoppingList = shoppingList.concat(newList, newList);
console.log(shoppingList);

// index of last "Juice" :

console.log(shoppingList.indexOf("Juice", 6)); // 7

let revList = shoppingList.reverse();
console.log(revList);
console.log(revList.length - 1 - revList.indexOf("Juice")); // 7
