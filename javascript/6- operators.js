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
// ++ & --

let num4 = 5;
let result4 = num4++;
console.log(result4, num4); // 5 6   avval num4 ro mirize to result4 va ba'd num4 ra yeki ezaf mikonad.

let num5 = 5;
let result5 = ++num5;
console.log(result5, num5); // 6 6   avval num4 ra yeki ezaf mikonad va ba'd num4 ro mirize to result4.

let counter1 = 5;
console.log(++counter1); // 6
console.log(counter1); // 6

let counter2 = 5;
console.log(counter2++); // 5
console.log(counter2); // 6

let x = 5;
console.log(3 * x--); // 15
console.log(x); // 4

let y = 5;
console.log(3 * --y); // 12
console.log(y); // 4

// -----------------
// ?=

let nr = 7;
nr = nr + 4;
console.log(nr); // 11

let nr2 = 7;
nr2 += 4;
console.log(nr2); // 11

let nr3 = 7;
nr3 *= 4;
console.log(nr3); // 28

let n = 2;
n *= 3 + 5; //
console.log(n); // 16

// -----------------
// =

let a = 1;
let b = 3;

let c = 9 - (a = b + 2);

console.log(a); // 5
console.log(c); // 4

// -----------------

let a, b, c;

a = b = c = 2 + 2;

console.log(a, b, c);

// better:

let a, b, c;

c = 2 + 2;
b = c;
a = c;

console.log(a, b, c);

// -----------------
// ,

let a = (3, 7);
console.log(a); // 7

let b = (7, 3);
console.log(b); // 3

let c = (1 + 2, 3 + 4);
console.log(c); // 7

let a, b, c;
a = 1;
b = 3;
for (c = a * b; a < 10; a++) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

// -----------------------------------
// Comparison Operators

// dar operatore == ham manande operator haye hesabi,
// ebteda tabdil be number soorat migirad
// (albate agar har do taraf string bashand digar tabdil nemishavand balke az moghaiiese vajeh name ei estfade mishavad).

console.log(Number(false)); // 0
console.log(Number("")); // 0
console.log(0 == false); // true
console.log("" == false); // true

console.log("21" > 7); // true
console.log("21" > "7"); // false  =>  "7" az "2" dar loghat jaigah bozorgtari darad.
console.log("01" == 1); // true
console.log(true == 1); // true
console.log(false == 0); // true

// -----------------

let a = 0;
console.log(Boolean(a)); // false
console.log(Number(a)); // 0

let b = "0";
console.log(Boolean(b)); // true
console.log(Number(b)); // 0

console.log(a == b); // true  =>  rira operatore == ba numbere amalvand ha kar darad na booleane anha.

// -----------------
// amma dar operatpre ===, barabari ra bedone tabdil be number moghaiese mikonad.

console.log("" == false); // true
console.log(0 == false); // true
console.log(3 == "3"); // true

console.log("" === false); // false
console.log(0 === false); // false
console.log(3 === "3"); // false

// -----------------

console.log(5 != 5); // false

console.log(5 != "5"); // false

console.log(5 !== "5"); // true

// -----------------
// estesna dar ==: amalgare ==, undefined va null ra ba ham barabar va anhara ba har meghdare digari nabarabar migirad.

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0

console.log(undefined == null); // true
console.log(0 == null); // false
console.log(undefined == NaN); // false

console.log(undefined === null); // false

// -----------------
// > < in string

console.log("2" > "12"); // true  =>  dar loghat, "2" bozorgtar az "1" ast.
console.log("a" > "A"); // true
console.log("a" > "Z"); // true
console.log("Z" > "A"); // true
console.log("Glow" > "Glee"); // true
console.log("Bee" > "Be"); // true

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
