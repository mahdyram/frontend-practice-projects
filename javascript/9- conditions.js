// --------------------------------------
// if

const isCold = true;

if (isCold) {
  console.log("Wear your jacket!");
}
// -------------------

const score = 13;

if (score > 15) {
  console.log("good job");
} else {
  console.log("not good");
}
// -------------------

const score = 11;

if (score > 16) {
  console.log("good job");
} else if (score >= 12) {
  console.log("not bad");
} else {
  console.log("its bad");
}
// -------------------

const price = 99;
const newPrice = 109;

if (newPrice > price) {
  console.log("Discount Added!");
} else if (newPrice < price) {
  console.log(`Price: ${newPrice}`);
} else {
  console.log("Same Price");
}
// --------------------------------------
// ternary

const age = 23;

// if (age > 18) {
//   console.log("access");
// } else {
//   console.log("denied");
// }

let result = age > 18 ? "access" : "denied";
console.log(result);

age > 18 ? console.log("access") : console.log("denied");

// --------------------------------------
// switch

const weekday = 2;

// if (weekday == 1) {
//   console.log("saturday");
// } else if (weekday == 1) {
//   console.log("saturday");
// } else if (weekday == 2) {
//   console.log("sunday");
// } else if (weekday == 3) {
//   console.log("monday");
// }
// ...

switch (weekday) {
  case 1:
    console.log("saturday");
    break;
  case 2:
    console.log("sunday");
    break;
  case 3:
    console.log("monday");
    break;
  default:
    console.log("wrong input!");
}
// -------------------

const weekday = 2;

switch (weekday) {
  case 1:
    console.log("saturday");
    break;
  case 2:
    console.log("sunday");
  case 3:
    console.log("monday");
  default:
    console.log("wrong input!");
}
// -------------------

const weekday = 2;

switch (weekday) {
  case 1:
    console.log("saturday");
    break;
  case 2:
    console.log("sunday");
  case 3:
    console.log("monday");
    break;
  default:
    console.log("wrong input!");
}
// -------------------

let answer;
let randNumber = Math.random(); // 0 <= < 1
randNumber = Math.floor(randNumber * 7); // 0 <= <= 6

switch (randNumber) {
  case 1:
  case 2:
  case 3:
    answer = "'kamtar mosavi 3'";
    break;
  case 4:
  case 5:
  case 6:
    answer = "'bishtar mosavi 4'";
    break;
  default:
    answer = "zero";
}

console.log(randNumber, "-", answer);
