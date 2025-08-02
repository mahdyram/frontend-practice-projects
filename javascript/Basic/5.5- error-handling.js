// ========================================
// Errors

// Error Types

// ReferenceError:
/*
console.log(user1);
}
*/

// --------------------
// SyntaxError

/*
if 5>2 {
  console.log("bigger");
}
*/

// --------------------
// TypeError

/*
null.sayHi();
}
*/

// ----------------------------------------
// Error Handling

try {
  let sum = 5 + 2;
  console.log(result);
} catch {
  console.log("erro"); // error
}

console.log("progrom not crashed");

// --------------------

try {
  let sum = 5 + 2;
  console.log(result);
} catch (e) {
  console.log(e);
}

console.log("progrom not crashed");

// --------------------

try {
  let sum = 5 + 2;
  console.log(result);
} catch (e) {
  console.log(e.message); // result is not defined
}

console.log("progrom not crashed");

// --------------------

try {
  let sum = 5 + 2;
  console.log(result);
} catch (e) {
  console.log(e.name); // ReferenceError
}

console.log("progrom not crashed");

// --------------------

try {
  let sum = 5 + 2;
  console.log(result);
} catch (e) {
  console.log(`${e.name}: you had wrong!`); // ReferenceError: you had wrong!
}

console.log("progrom not crashed");

// --------------------
