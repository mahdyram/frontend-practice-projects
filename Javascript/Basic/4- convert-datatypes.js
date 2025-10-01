// ========================================
// Convert DataTypes

console.log(3 + 5); // 8
console.log(typeof (3 + 5)); // number

console.log(3 + "5"); // 35
console.log(typeof (3 + "5")); // string

console.log("3" + 5); // 35
console.log(typeof ("3" + 5)); // string

console.log("3" + "5"); // 35
console.log(typeof ("3" + "5")); // string

// ----------------------------------------

console.log(2 + 2 + "1"); // 41  string
console.log("1" + 2 + 2); // 122
console.log(2 + "1" + 2); // 212

// --------------------

console.log("3" - "5"); // -2
console.log(typeof ("3" - "5")); // number

console.log(3 - "5"); // -2
console.log(typeof (3 - "5")); // number

// --------------------

console.log("3" * "5"); // 15
console.log(typeof ("3" * "5")); // number

console.log(3 * "5"); // 15
console.log(typeof (3 * "5")); // number

console.log(3 * "ali"); // NaN
console.log(typeof (3 * "ali")); // number

// --------------------

console.log("3" / "5"); // 0.6
console.log(typeof ("3" / "5")); // number

console.log("3" / 5); // 0.6
console.log(typeof ("3" / 5)); // number

console.log("3" % 5); // 3
console.log(typeof ("3" % 5)); // number

console.log("3" ** 5); // 243
console.log(typeof ("3" ** 5)); // number

/* dar natije + dar amaliat haye riazi yek estesna ast vali dar sayere operator ha
khode consol maghadir ra tabdil be number mikonad(Type Conversion). */

// ========================================

console.log(String(3) + 5); // "35"

console.log(String(3) * 5); // 15

// ----------------------------------------

console.log(Number("3") + 5); // 8
console.log(Number("123")); // 123
console.log(Number("12.3")); // 12.3
console.log(Number("   123   ")); // 123

console.log(Number("12,3")); // NaN
console.log(Number("12 3")); // NaN
console.log(Number("   12 3   ")); // NaN
console.log(Number("hello")); // NaN
console.log(Number("123z")); // NaN (error reading a number at "z")
console.log(Number(undefined)); // NaN
console.log(Number(NaN)); // NaN

console.log(Number("")); // 0
console.log(Number(" ")); // 0
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(Number(true)); // 1

// ----------------------------------------

console.log(Boolean()); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean("")); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(5)); // true
console.log(Boolean(" ")); // true
console.log(Boolean("a")); // true
console.log(Boolean("0")); // true
console.log(Boolean("false")); // true

// ----------------------------------------

console.log(5 + true); // 6
console.log(5 * false); // 0
console.log(+true); // 1
console.log(-false); // -0

console.log(5 * ""); // 0
console.log(+""); // 0
console.log(-""); // -0

console.log("4" + 3); // "43"
console.log(+"4" + 3); // 7
console.log(-"4" + 3); // -1
console.log(+"4" + "3"); // "43"
console.log(+"4" + +"3"); // 7
console.log(+"4" + -"3"); // 1

console.log("4" * 3); // 12
console.log(+"4" * 3); // 12

// --------------------

console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1

console.log("  -9  " + 5); // "  -9  5"
console.log("  -9  " - 5); // -14

console.log("" + 2); // "2"
console.log(" " + 2); // "2"

console.log(" \t \n" + 2); // "2"
console.log(" \t \n" - 2); // -2
console.log(+" \t \n"); // 0

console.log(null + 1); // 1
console.log(undefined + 1); // NaN

// --------------------

let apples = "2";
let oranges = "3";

console.log(apples + oranges); // "23"

console.log(Number(apples) + Number(oranges)); // 5

// or easier:
console.log(+apples + +oranges); // 5

// ----------------------------------------

let num = prompt("Enter a number"); // 3
let result = num + 5;
alert(typeof result + "  |  " + result);

let num2 = prompt("Enter a number2"); // 3
let result2 = Number(num2) + 5;
alert(`${typeof result2}  |  ${result2}`);

// prompt() string khoroji midahad.
