// ========================================
// if

const isCold = true;
if (isCold) console.log("Wear your jacket!");

const isCold2 = true;
if (isCold2) {
  console.log("weather is cold");
  console.log("Wear your jacket!");
}
// --------------------

const score = 13;

if (score > 15) {
  console.log("good job");
} else {
  console.log("not good");
}
// --------------------

const score = 11;

if (score > 16) {
  console.log("good job");
} else if (score >= 12) {
  console.log("not bad");
} else {
  console.log("its bad");
}
// --------------------

const price = 99;
const newPrice = 109;

if (newPrice > price) {
  console.log("Discount Added!");
} else if (newPrice < price) {
  console.log(`Price: ${newPrice}`);
} else {
  console.log("Same Price");
}

// --------------------
// practice

let whoaryou = prompt("who are you");
if (whoaryou === "admin") {
  let pass = prompt("enter password");
  if (pass === "master") {
    alert("welcome");
  } else if (pass === "" || pass === null) {
    alert("canceled");
  } else {
    alert("wrong password");
  }
} else if (whoaryou === null || whoaryou === "") {
  alert("canceled");
} else {
  alert("i dont know you");
}

// ========================================
// ternary  =>  let result = condition ? value1 : value2;

/*
const age = 23;
if (age > 18) {
  console.log("access");
} else {
  console.log("denied");
}
*/

const age = 23;

age > 18 ? console.log("access") : console.log("denied");

let accessAllowed = age > 18 ? "access" : "denied";
console.log(accessAllowed);

// --------------------

/*
let age = 15;
if (age < 3) {
  message = "Hi, baby!";
} else if (age < 18) {
  message = "Hello!";
} else if (age < 100) {
  message = "Greetings!";
} else {
  message = "What an unusual age!";
}
console.log(message);
*/

let age = 1;

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

console.log(message);

// ========================================
// switch => (just for equality - not ><)

/*
const weekday = 2;
if (weekday == 1) {
  console.log("saturday");
} else if (weekday == 2) {
  console.log("sunday");
} else if (weekday == 3) {
  console.log("monday");
} else {
  console.log("wrong input!");
}
*/

const weekday = 20;

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
// --------------------

const weekday = 2;

switch (weekday) {
  case 1:
    console.log("saturday");
  case 2:
    console.log("sunday");
  case 3:
    console.log("monday");
  default:
    console.log("wrong input!");
}
// --------------------

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
// --------------------

let target = "c";

switch (target) {
  case "a":
    console.log("ali");
    break;
  case "b":
    console.log("bahram");
    break;
  case "c":
    console.log("cina");
    break;
  case "d":
    console.log("davood");
    break;
}

// --------------------
// Grouping of “case”

let answer;
let randNumber = Math.random(); // 0 <= ? < 1
randNumber = Math.floor(randNumber * 7); // 0 <= ? <= 6

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
