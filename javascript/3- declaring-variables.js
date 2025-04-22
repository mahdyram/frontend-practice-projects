// console.log(firstName) => Uncaught ReferenceError: firstName is not defined

let firstName1;
console.log(firstName1); //  undefined

let firstName2;
firstName2 = "rams";
console.log(firstName2); //  rams

let firstName3 = "ram";
console.log(firstName3); //  ram

let firstName4 = "ram";
firstName3 = "ramesh";
console.log(firstName4); //  ramesh

/*****************************************/
// let, var, const :

let age;
age = 23;
age = 30;
console.log(age); // 30

let number1 = 5;
let number2 = 7;
let result = number1 * number2;
console.log(result); // 35

// ***********

var age2;
age2 = 25;
age2 = 20;
console.log(age2); // 20

// ***********

// const PI;  =>   SyntaxError: Missing initializer in const declaration
const PI = 3.14;
// PI = 3.16;  =>  TypeError: Assignment to constant variable.
console.log(PI); // 3.14
