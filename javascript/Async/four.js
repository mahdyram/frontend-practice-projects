// ========================================
// Fetch-Api (jaigozine XMLHttpRequest)

fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Fetch error:", err));

// --------------------

fetch("data.json")
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error("Fetch error:", err.message));

// --------------------

const url7 = "https://jsonplaceholder.typicode.com/todos/7";

console.log(fetch(url7)); // Promise => harvaght khoroji object Promise bood, niaz be "then" va "catch" darim.

fetch(url7).then(
  (res) => console.log(res) // Response
);

fetch(url7).then(
  (res) => console.log(res.json()) // Promise => khoroji promise pas baz ham niaz be "then" darim.
);

fetch(url7)
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch(url7)
  .then((res) => {
    if (!res.ok) {
      throw new Error("not found...");
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

// ----------------------------------------
// then.catch

const url8 = "https://jsonplaceholder.typicode.com/todos/8";

function getDataFetch(url) {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error("not found...");
    return res.json();
  });
}

getDataFetch(url8)
  .then((data) => console.log("getDataFetch: ", data))
  .catch((err) => console.log(err.message));

// ----------------------------------------
// async/await

const url9 = "https://jsonplaceholder.typicode.com/todos/9";

async function getDataFetch2(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("not found...");
  return await res.json();
}

// farakhani ba then.catch:
getDataFetch2(url9)
  .then((data) => console.log("getDataFetch-2: ", data))
  .catch((err) => console.error(err.message));

// farakhani ba async/await:
async function main() {
  try {
    const data = await getDataFetch2(url9);
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
}
main();

// ----------------------------------------
// chand url be tartib:

const url2 = "https://jsonplaceholder.typicode.com/todos/2";
const url3 = "https://jsonplaceholder.typicode.com/todos/3";
const url4 = "https://jsonplaceholder.typicode.com/todos/4";

const getDataFetch3 = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("not found...");
  return await res.json();
};

// then/catch:
getDataFetch3(url2)
  .then((data) => {
    console.log("data url2(then/catch):", data);
    return getDataFetch3(url3);
  })
  .then((data) => {
    console.log("data url3(then/catch):", data);
    return getDataFetch3(url4);
  })
  .then((data) => {
    console.log("data url4(then/catch):", data);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });

// async/await:
async function fetchAll() {
  try {
    const data2 = await getDataFetch3(url2);
    console.log("data url2(async/awai):", data2);

    const data3 = await getDataFetch3(url3);
    console.log("data url3(async/awai):", data3);

    const data4 = await getDataFetch3(url4);
    console.log("data url4(async/awai):", data4);
  } catch (err) {
    console.error("Error:", err.message);
  }
}
fetchAll();

// async/await general:
async function fetchAllGeneral(urls) {
  try {
    for (let url of urls) {
      const data = await getDataFetch3(url);
      console.log(`Data from ${url}:`, data);
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
}
fetchAllGeneral([url2, url3, url4]);

// ========================================
// herfe ei tarin ravesh:

async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Fetch failed:", err.message);
    return null;
  }
}

// use:
(async () => {
  const todo = await fetchData("https://jsonplaceholder.typicode.com/todos/8");
  if (todo) console.log(todo);
})();
