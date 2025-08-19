// ========================================
// normal Promise

console.log("شروع");

setTimeout(() => {
  console.log("۳ ثانیه گذشت");
}, 3000);

console.log("پایان");

// ----------------------------------------
// start promise

let myPromise = new Promise((resolve, reject) => {
  let success = true; // امتحان کن true یا false بذاری

  if (success) {
    resolve("کار موفق شد ✅");
  } else {
    reject("کار شکست خورد ❌");
  }
});

myPromise
  .then((result) => {
    console.log("نتیجه:", result);
  })
  .catch((error) => {
    console.log("خطا:", error);
  });

// ----------------------------------------
// why promise?

// callback hell
setTimeout(() => {
  console.log("۱ ثانیه گذشت");
  setTimeout(() => {
    console.log("۲ ثانیه گذشت");
    setTimeout(() => {
      console.log("۳ ثانیه گذشت");
    }, 3000);
  }, 2000);
}, 1000);

// --------------------

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${ms / 1000} ثانیه گذشت`);
    }, ms);
  });
}

wait(2000).then((msg) => console.log(msg));

wait(1000)
  .then((msg) => {
    console.log(msg);
    return wait(2000);
  })
  .then((msg) => {
    console.log(msg);
    return wait(3000);
  })
  .then((msg) => console.log(msg));

// --------------------
// why return?

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${ms / 1000} ثانیه گذشت`);
    }, ms);
  });
}

wait(1000)
  .then((msg) => {
    console.log(msg);
    wait(2000); // ⬅️ return حذف شد
  })
  .then((msg) => {
    console.log(msg); // undefined
    return wait(3000);
  })
  .then((msg) => console.log(msg));

// ----------------------------------------
// Error handling

let myPromise = new Promise((resolve, reject) => {
  let success = false; // این بار میذاریم false
  if (success) {
    resolve("همه‌چی خوب پیش رفت ✅");
  } else {
    reject("یه خطا رخ داد ❌");
  }
});

myPromise
  .then((res) => console.log("نتیجه:", res))
  .catch((err) => console.log("خطا:", err))
  .finally(() => console.log("کار تموم شد ✅"));

// ========================================
// Async/Await

async function foo() {
  return 42;
}

function bar() {
  return 42;
}

console.log(foo()); // Promise { 42 }
console.log(bar()); // 42

// --------------------

async function test() {
  return "سلام";
}

console.log(test()); // Promise { 'سلام' }

test().then((msg) => console.log(msg)); // سلام

// --------------------

async function testError() {
  throw new Error("یه خطا رخ داد ❌");
}

testError()
  .then((res) => console.log("نتیجه:", res))
  .catch((err) => console.log("خطا:", err.message));

// --------------------
// with await (be jaye then.catch)

async function testError() {
  throw new Error("یه خطا رخ داد ❌");
}

async function run() {
  try {
    let res = await testError();
  } catch (err) {
    console.log("گرفتیمش:", err.message);
  }
}

run();

// ----------------------------------------

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${ms} میلی‌ثانیه گذشت`), ms);
  });
}

console.log("شروع");

wait(1000)
  .then((msg1) => {
    console.log(msg1);
    return wait(2000);
  })
  .then((msg2) => {
    console.log(msg2);
    return wait(3000);
  })
  .then((msg3) => {
    console.log(msg3);
    console.log("پایان");
  });

// --------------------

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${ms} میلی‌ثانیه گذشت`), ms);
  });
}

async function run() {
  console.log("شروع");

  let msg1 = await wait(1000);
  console.log(msg1);

  let msg2 = await wait(2000);
  console.log(msg2);

  let msg3 = await wait(3000);
  console.log(msg3);

  console.log("پایان");
}

run();

// ----------------------------------------
// Error-handling

let myPromise = new Promise((resolve, reject) => {
  reject("یه خطا رخ داد ❌");
});

myPromise
  .then((res) => console.log("نتیجه:", res))
  .catch((err) => console.log("خطا:", err));

// --------------------

async function test() {
  try {
    let res = await Promise.reject("یه خطا رخ داد ❌");
    console.log(res);
  } catch (err) {
    console.log("گرفتیمش:", err);
  }
}

test();
