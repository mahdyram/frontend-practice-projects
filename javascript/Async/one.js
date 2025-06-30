// ========================================
// Intro

console.log(1);
console.log(2);
console.log("hello user");
console.log(3);
console.log(4);

console.log("-".repeat(30));
// --------------------

console.log(1);
console.log(2);
setTimeout(function () {
  console.log("hello user");
}, 1000);
console.log(3);
console.log(4);

console.log("-".repeat(30));
// ----------------------------------------
// Http Request (GET)

const req1 = new XMLHttpRequest();
req1.open("GET", "data.txt"); // in console: Network -> data.txt -> Response: ali ram
req1.onload = function () {
  console.log(req1); // XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
  console.log(req1.status); // 200
  console.log(req1.response); // ali ram
  console.log("Text:", req1.responseText); // Text: ali ram
  console.log(req1.responseURL); // http://127.0.0.1:5500/javascript/Asynchronous/data.txt
};
req1.send();

// --------------------

const req2 = new XMLHttpRequest();
req2.open("GET", "data.json");
req2.onload = function () {
  console.log(req2.responseText); //
  console.log(typeof req2.responseText); // string

  const dta = JSON.parse(req2.responseText);
  console.log(dta); //
  console.log(typeof dta); // object
  console.log(dta[1].lName); // kazemit
};
req2.send();

// --------------------

const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const req3 = new XMLHttpRequest();
req3.open("GET", url1);
req3.onload = function () {
  console.log(req3.responseText); //
  console.log(JSON.parse(req3.responseText)); //
  console.log(JSON.parse(req3.responseText).title); // 'delectus aut autem'
};
req3.send();

// --------------------

const url2 = "https://jsonplaceholder.typicode.com/todos";
const req4 = new XMLHttpRequest();
req4.open("GET", url2);
req4.onload = function () {
  console.log(req4.responseText); //
  console.log(JSON.parse(req4.responseText)); //
  console.log(JSON.parse(req4.responseText)[0].title); // 'delectus aut autem'
};
req4.send();
