// ========================================
// Fetch-Api (jaigozine XMLHttpRequest)

const url7 = "https://jsonplaceholder.typicode.com/todos/7";

const res = fetch(url7);
console.log(res); // Promise {<pending>}  =>  harvaght khoroji object Promise bood, niaz be then va catch darim.

fetch(url7).then(function (res) {
  console.log(res); // Response {…}
});

fetch(url7).then(function (res) {
  console.log(res.json()); // Promise {<pending>}
});

fetch(url7)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data); // {userId: 1, id: 7, title: 'illo expedita consequatur quia in', completed: false}
  });

fetch(url7)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("not found...");
    }
  })
  .then(function (data) {
    console.log(data); // {userId: 1, id: 7, title: 'illo expedita consequatur quia in', completed: false}
  })
  .catch(function (err) {
    console.log(err.message);
  });

// ----------------------------------------
// then.catch

const url8 = "https://jsonplaceholder.typicode.com/todos/8";

function getDataFetch(url) {
  return fetch(url).then(function (res) {
    if (!res.ok) {
      throw new Error("not found...");
    }
    return res.json();
  });
}

getDataFetch(url8)
  .then(function (data) {
    console.log("getDataFetch: ", data);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// ----------------------------------------
// async/await

const url9 = "https://jsonplaceholder.typicode.com/todos/9";

async function getDataFetch2(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("not found...");
  }
  return await res.json();
}

// farakhani ba then.catch:
getDataFetch2(url9)
  .then((data) => console.log("getDataFetch: ", data))
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

// then/catch (Promise chaining):
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

// async/await in async-function:
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
