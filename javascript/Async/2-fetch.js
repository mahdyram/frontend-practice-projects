// ========================================
// Fetch

// ----------------------------------------
// GET

const url = "https://api.adviceslip.com/advice";

console.log(fetch(url)); // Promise { <pending> }

fetch(url).then((res) => console.log(res)); // Response {...}

fetch(url).then((res) => console.log(res.json())); // Promise { <pending> }

fetch(url).then((res) => res.json().then((adv) => console.log(adv))); // {...}

// --------------------

const url = "https://api.adviceslip.com/advice";

fetch(url)
  .then((res) => res.json())
  .then((adv) => console.log(adv)) // {advice}
  .catch((err) => console.log(err)); // TypeError...

fetch(url)
  .then((res) => res.json())
  .then(console.log) // {advice}
  .catch(console.error); // TypeError...

// --------------------

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then((advice) => {
      console.log(advice);
    })
    .catch((err) => {
      console.error(err.message);
    })
    .finally(() => {
      console.log("\n✅ Promise done");
    });
}

getAdvice();

// ----------------------------------------
// POST

fetch("https://dummyjson.com/products/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "mahdyram",
    price: 220,
    /* other product data */
  }),
})
  .then((res) => res.json())
  .then(console.log);

// ----------------------------------------
// PUT

/* updating title of product with id 1 */
fetch("https://dummyjson.com/products/1", {
  method: "PUT" /* or PATCH */,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "mahdyram",
  }),
})
  .then((res) => res.json())
  .then(console.log);

// ----------------------------------------
// DELETE

fetch("https://dummyjson.com/products/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then(console.log);

// ========================================
// Async/Await

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then(console.log)
    .catch(console.error);
}

getAdvice();

// ----------------------------------------

function getAdvice() {
  console.log("Hi!");
  fetch("https://api.adviceslip.com/advice").then(console.log);
  console.log("Bye!");
}

getAdvice();
/*
Hi!
Bye!
Response {...}
*/

// --------------------

async function getAdvice() {
  console.log("Hi!");
  await fetch("https://api.adviceslip.com/advice").then(console.log);
  console.log("Bye!");
}

getAdvice();
/*
Hi!
Response {...}
Bye!
*/

// ----------------------------------------

function getAdvice() {
  const res = fetch("https://api.adviceslip.com/advice");
  console.log(res);
}

getAdvice(); // Promise { <pending> }

// --------------------

async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  console.log(res);
}

getAdvice(); // Response {...}

// --------------------

async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  console.log(res);
  const advice = res.json();
  console.log(advice);
}

getAdvice();
/*
Response {...}
Promise { <pending> }
*/

// --------------------

async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  console.log(res);
  const advice = await res.json();
  console.log(advice);
}

getAdvice();
/*
 Response {...}
{advice}
*/

// ----------------------------------------
// try-catch-finally

async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const advice = await res.json();
    console.log(advice);
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log("\n✅ Promise done");
  }
}

getAdvice();

// --------------------

(async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const advice = await res.json();
    console.log(advice);
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log("\n✅ Promise done");
  }
})();

// ----------------------------------------
// AbortController

const controller = new AbortController(); // create a new controller
const signal = controller.signal; // the signal that fetch listens to

(async () => {
  try {
    const res = await fetch("https://api.advicdeslip.com/advice", { signal }); // give fetch the signal
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const advice = await res.json();
    console.log(advice);
  } catch (err) {
    if (err.name === "AbortError") console.log("Aborted:", err.message);
    else console.error(err.message);
  } finally {
    console.log("\n✅ Promise done");
  }
})();

// if you want to cancel the fetch:
controller.abort(); // this causes the fetch promise to reject with an AbortError

// --------------------

const controller = new AbortController();

(async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice", {
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const advice = await res.json();
    console.log(advice);
  } catch (err) {
    if (err.name === "AbortError") console.log("Fetch was aborted!");
    else console.error(err.message);
  } finally {
    console.log("\n✅ Promise done");
  }
})();

setTimeout(() => controller.abort(), 8000); // or cancel fetch after 8s
