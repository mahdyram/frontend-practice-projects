// ========================================
// Promises
// @ts-nocheck

function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];

  return users;
}

const myUsers = getUsers();
console.log(myUsers);

// --------------------

function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];

  return new Promise(() => {});
}

const myUsers = getUsers();
console.log(myUsers); // Promise { <pending> } (see in console)

// --------------------

function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];

  return new Promise(() => {});
}

const myUsers = getUsers();
console.log(myUsers); // Promise { <pending> }

myUsers.then(() => console.log("Finish")); // nothing

// ----------------------------------------
// resolve

function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];

  return new Promise((resolve) => {
    resolve("Ok!");
  });
}

const myUsers = getUsers();
console.log(myUsers); // Promise {<fulfilled>: 'Ok!'}

myUsers.then(() => console.log("Finish")); // Finish

// --------------------

function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];

  return new Promise((resolve) => {
    resolve("Ok!");
  });
}

const myUsers = getUsers();
console.log(myUsers); // Promise {<fulfilled>: 'Ok!'}

myUsers.then((res) => console.log(res)); // Ok!

// --------------------
//#region moadel ba async

async function getUsers() {
  const users4 = [{ name: "ali" }, { name: "negar" }];

  return "Ok!"; // moadele resolve dar Promise
}

const myUsers = getUsers();
console.log(myUsers); // Promise {<fulfilled>: 'Ok!'}

myUsers.then((res) => console.log(res)); // Ok!

//#endregion

// --------------------

function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ok!");
    }, 1000);
  });
}

const myUsers = getUsers();
console.log(myUsers); // Promise { <pending> }

myUsers.then((res) => {
  console.log(myUsers); // Promise {<fulfilled>: 'Ok!'}
  console.log(res); // Ok!
});

// ----------------------------------------
// reject

function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Not Ok!");
    }, 1000);
  });
}

const myUsers = getUsers();
console.log(myUsers); // Promise { <pending> }

myUsers
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(myUsers); // Promise {<rejected>: 'Not Ok!'}
    console.log(err); // Not Ok!
  });

// --------------------
//#region moadel ba async

async function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];

  throw "Not Ok!"; // moadele reject dar Promise
}

getUsers()
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); // Not Ok!

//#endregion

// ----------------------------------------
// example

function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];

  return new Promise((resolve, reject) => {
    const isOk = Math.random() < 0.5;

    setTimeout(() => {
      isOk ? resolve("Ok!") : reject("Not Ok!");
    }, 1000);
  });
}

const myUsers = getUsers();
console.log(myUsers); // Promise { <pending> }

myUsers
  .then((res) => {
    console.log(myUsers); // Promise {<fulfilled>: 'Ok!'}
    console.log(res); // Ok!
  })
  .catch((err) => {
    console.log(myUsers); // Promise {<rejected>: 'Not Ok!'}
    console.log(err); // Not Ok!
  });

// ----------------------------------------
// 3 raveshe asli

// 1- <new Promise>  with  <then.catch>
// 2- <new Promise>  with  <async(try-catch)>
// 3- <async func>   with  <async(try-catch)> "behtarin"

// --------------------
// *1*

function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];

  return new Promise((resolve, reject) => {
    const isOk = Math.random() < 0.5;

    if (isOk) {
      return resolve(users);
    } else {
      reject("Use a vpn");
    }
  });
}

getUsers()
  .then((res) => {
    console.log(res); // [ { name: 'ali' }, { name: 'negar' } ]
  })
  .catch((err) => {
    console.log(err); // Use a vpn
  });

// --------------------
// *2*

function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];

  return new Promise((resolve, reject) => {
    const isOk = Math.random() < 0.5;

    if (isOk) {
      return resolve(users);
    } else {
      reject("Use a vpn");
    }
  });
}

async function run() {
  try {
    const res = await getUsers();
    console.log(res); // [ { name: 'ali' }, { name: 'negar' } ]
  } catch (err) {
    console.log(err); // Use a vpn
  }
}

run();

// --------------------
// *3*

async function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];

  const isOk = Math.random() < 0.5;

  if (isOk) {
    return users; // like resolve
  } else {
    throw new Error("Use a vpn"); // like reject
  }
}

async function run() {
  try {
    const res = await getUsers();
    console.log(res); // [ { name: 'ali' }, { name: 'negar' } ]
  } catch (err) {
    console.log(err.message); // Use a vpn
  }
}

run();

// --------------------
// noskhe kootahe *3*

async function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];
  if (Math.random() < 0.5) return users;
  throw new Error("Use a vpn");
}

(async () => {
  try {
    const res = await getUsers();
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
})();

// ========================================
// Fetch

// ----------------------------------------
// then.catch

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json(); // return a promise
    })
    .then((data) => {
      console.log(data.slip.advice);
    })
    .catch((err) => {
      console.error("Failed to fetch advice:", err.message);
    })
    .finally(() => {
      console.log("\n✅ Promise done - (resolve or reject)");
    });
}

getAdvice();

// ----------------------------------------
// async/await

async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log(data.slip.advice);
  } catch (err) {
    console.error("Failed to fetch advice:", err.message);
  } finally {
    console.log("\n✅ Promise done - (resolve or reject)");
  }
}

getAdvice();

// --------------------
// kootahtar:

(async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log(data.slip.advice);
  } catch (err) {
    console.error("Failed to fetch advice:", err.message);
  } finally {
    console.log("\n✅ Promise done (resolve or reject)");
  }
})();
