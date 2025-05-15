// -------------------------------

console.log(3 + 5); // 8
console.log(typeof (3 + 5)); // number

console.log(3 + "5"); // 35
console.log(typeof (3 + "5")); // string

console.log("3" + 5); // 35
console.log(typeof ("3" + 5)); // string

console.log("3" + "5"); // 35
console.log(typeof ("3" + "5")); // string

// ---------------

console.log("3" - "5"); // -2
console.log(typeof ("3" - "5")); // number

console.log(3 - "5"); // -2
console.log(typeof (3 - "5")); // number

// ---------------

console.log("3" * "5"); // 15
console.log(typeof ("3" * "5")); // number

console.log(3 * "5"); // 15
console.log(typeof (3 * "5")); // number

console.log(3 * "ali"); // NaN
console.log(typeof (3 * "ali")); // number

// ---------------

console.log("3" / "5"); // 0.6
console.log(typeof ("3" / "5")); // number

console.log("3" / 5); // 0.6
console.log(typeof ("3" / 5)); // number

console.log("3" % 5); // 3
console.log(typeof ("3" % 5)); // number

console.log("3" ** 5); // 243
console.log(typeof ("3" ** 5)); // number

/* dar natije + dar string yek estesna ast vali dar sayere operator ha
  khode consol string hara tabdil be number mikonad. */

// -------------------------------

console.log(Number("hello")); // NaN
console.log(Number("3") + 5); // 8

console.log(String(3) + 5); // 35

console.log(Boolean()); // false
console.log(Boolean(0)); // false
console.log(Boolean(5)); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean("a")); // true

// -------------------------------

let num = prompt("Enter a number"); // 3
let result = num + 5;
alert(typeof result + "  |  " + result);

let num2 = prompt("Enter a number2"); // 3
let result2 = Number(num2) + 5;
alert(`${typeof result2}  |  ${result2}`);

// prompt() string khoroji midahad.
