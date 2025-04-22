// Arrays

const product = ["book", 99, false];

console.log(product); // [ 'book', 99, false ]
console.log(product[1]); // 99
console.log(product.length); // 3

// ***********

// product = []  =>  TypeError: Assignment to constant variable.
product[3] = true;
console.log(product); // [ 'book', 99, false, true ]

// ***********

product.push("pen");
console.log(product); // [ 'book', 99, false, true, 'pen' ]

product.unshift("notebook");
console.log(product); // [ 'notebook', 'book', 99, false, true, 'pen' ]

product.pop();
console.log(product);

// ***********

const product2 = ["book", 99, false];
console.log(product2);

const [name1] = product2;
console.log(name1); // book

const [name2, price2] = product2;
console.log(name2, price2); // book 99

const [name3, price3, valid3] = product2;
console.log(valid3); // false

const [name4, ...other] = product2;
console.log(name4, other); // book [ 99, false ]
