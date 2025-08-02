// ========================================
// Interaction

// alert   =>   `serfan namayeshe yek payam va chizi ra barnemigardanad.`
alert("hello");

// ----------------------------------------
// prompt   =>   `agar 'ok' shavad, matni ke karbar neveshte(be tore khodkar be string tabdil mishavad) va dar soorate 'cancel', null ra barmigardanad.`

prompt("title", ["default"]); // braket haye atrafe 'default' neshan az ekhtiari bodane in parametr ast.

prompt("hello dear, are you from?", "Iran");

// --------------------

let firstName = prompt("enter your first name");
let lastName = prompt("and enter your last name");
let message = `hello ${firstName} ${lastName}`;
alert(message);

// --------------------

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
console.log(a + b); // 12

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
console.log(+a + +b); // 3

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);
console.log(a + b); // 3

// ----------------------------------------
// confirm   =>   `baraye 'ok' meghdare true va braye 'cancel' meghdare false ra barmigardanad.`

let result3 = confirm("question");
alert(result3); // true or false

// --------------------

let isAdmin = confirm("are you admin?");
alert(isAdmin);
