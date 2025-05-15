// -----------------------------------
// Arithmetic Operators

let num = 5;
num = num + 1;
console.log(num); // 6

let num2 = 5;
num2++;
console.log(num2); // 6

let num3 = 5;
num3--;
console.log(num3); // 4

// -----------------

let num4 = 5;
let result4 = num4++;
console.log(result4, num4); // 5 6   avval num4 ro mirize to result4 va ba'd num4 ra yeki ezaf mikonad.

let num5 = 5;
let result5 = ++num5;
console.log(result5, num5); // 6 6   avval num4 ra yeki ezaf mikonad va ba'd num4 ro mirize to result4.

// -----------------

let nr = 7;
nr = nr + 4;
console.log(nr); // 11

let nr2 = 7;
nr2 += 4;
console.log(nr2); // 11

let nr3 = 7;
nr3 *= 4;
console.log(nr3); // 28

// -----------------------------------
// Comparison Operators

let n1 = 7;
let n2 = 7;
console.log(n1 == n2); // true

let n1 = 7;
let n2 = "7";
console.log(n1 == n2); // true

let n1 = 7;
let n2 = "7";
console.log(n1 === n2); // false   3mosavi alave bar meghdar, type ha ro ham barresi mikonad.

// -----------------

let n1 = 5;
let n2 = 5;
console.log(n1 != n2); // false

let n1 = 5;
let n2 = "5";
console.log(n1 != n2); // false

let n1 = 5;
let n2 = "5";
console.log(n1 !== n2); // true

// -----------------------------------
// Logical Operators

let test1 = 1;
let test2 = 2;
let test3 = 3;

console.log((test3 > test1) & (test2 < test3)); // 1
console.log(test3 > test1 && test2 < test1); // false

console.log((test3 > test1) | (test2 < test3)); // 1
console.log(test3 > test1 || test2 < test1); // true

console.log(test3 > test1); // true
console.log(!(test3 > test1)); // false
