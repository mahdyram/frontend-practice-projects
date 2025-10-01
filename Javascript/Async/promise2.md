خیلی خوبه 👌
قبل از اینکه بریم سراغ **Promises** یه سؤال کوچیک:

👉 تو الان درباره‌ی `callbacks` یا همون تابع‌های بازگشتی در جاوااسکریپت چیزی می‌دونی؟
(مثلاً اینکه یه تابعی رو به عنوان ورودی به تابع دیگه میدیم و بعداً اجرا میشه)

این رو می‌پرسم چون **Promises** اومدن تا مشکل اصلی `callbacks` رو حل کنن.

میخوای اول من خیلی کوتاه برات توضیح بدم **callback** چی بود، بعد بریم سراغ **Promises**؟

---

---

عالیه 👍 پس بذار از همینجا شروع کنیم.

### 1. Callback چیه؟

تو جاوااسکریپت بعضی کارها **زمان‌بر** هستن، مثل:

- خوندن داده از اینترنت (fetch)
- تایمر (`setTimeout`)
- خوندن فایل (در Node.js)

جاوااسکریپت نمی‌خواد وقتی منتظر این کارا هستی، همه‌چی قفل بشه.
پس میگه:

> «باشه، من این کار رو شروع می‌کنم. وقتی تموم شد، یه تابعی که تو بهم دادی رو صدا می‌زنم.»

اون تابع همون **callback** هست.

---

### مثال ساده:

```js
console.log("شروع");

setTimeout(() => {
  console.log("۳ ثانیه گذشت");
}, 3000);

console.log("پایان");
```

خروجی:

```md
شروع
پایان
۳ ثانیه گذشت
```

🔎 می‌بینی؟ `setTimeout` بعد از ۳ ثانیه **callback** رو اجرا کرد.

---

### مشکل Callbackها

اگه چندتا کار زمان‌بر پشت سر هم داشته باشیم، کدهامون شبیه “نردبون” میشه:

```js
doSomething(() => {
  doSomethingElse(() => {
    doThirdThing(() => {
      console.log("همه کارها انجام شد!");
    });
  });
});
```

به این میگن **Callback Hell** 😅

---

اینجا بود که **Promise** وارد شد تا کد خواناتر و تمیزتر بشه.

---

---

خب بریم سراغ اصل ماجرا 🚀

---

## 2. Promise چیه؟

**Promise** رو می‌تونی مثل یه «جعبه» تصور کنی که نتیجه‌ی یه کار **زمان‌بر** داخلشه.
این نتیجه ممکنه:

- **موفق** باشه → میگیم _fulfilled_ (با متد `.then` می‌گیریم)
- **شکست بخوره** → میگیم _rejected_ (با متد `.catch` می‌گیریم)

پس یه Promise سه حالت داره:

1. **pending** (در حال انجام کاره)
2. **fulfilled** (با موفقیت انجام شد)
3. **rejected** (با خطا شکست خورد)

---

### مثال ساده:

```js
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
```

---

### نکته مهم

- `resolve` یعنی کار موفق شد → میره تو `.then`
- `reject` یعنی کار شکست خورد → میره تو `.catch`

---

### مثال واقعی (با `setTimeout`):

```js
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${ms} میلی‌ثانیه گذشت`);
    }, ms);
  });
}

wait(2000).then((msg) => console.log(msg));
```

خروجی بعد از ۲ ثانیه:

```md
2000 میلی‌ثانیه گذشت
```

---

اینجا Promise کمک کرد که به‌جای “callback توی callback” بتونیم زنجیره بسازیم:

```js
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
```

---

✍️ حالا سؤال من ازت:
به نظرت تو این کد، چرا بعد از هر `.then` یه `return wait(...)` نوشتیم؟
اگه return رو ننویسیم، چه اتفاقی میفته؟

---

---

سؤال خیلی خوبی پرسیدی 👌
بیاین با هم مقایسه کنیم:

---

### 🔴 بدون Promise (فقط Callback)

فرض کن بخوای همون کار رو (۱ ثانیه صبر، بعد ۲ ثانیه، بعد ۳ ثانیه) با **callback** بنویسی:

```js
setTimeout(() => {
  console.log("۱ ثانیه گذشت");
  setTimeout(() => {
    console.log("۲ ثانیه گذشت");
    setTimeout(() => {
      console.log("۳ ثانیه گذشت");
    }, 3000);
  }, 2000);
}, 1000);
```

🔎 اینجا می‌بینی کدها مثل پله‌پله توی هم میرن (callback hell).
اگر پروژه بزرگ‌تر بشه، نگه‌داری و فهمیدنش خیلی سخت میشه.

---

### 🟢 با Promise

همین کار رو با Promise خیلی خواناتر و مرتب‌تر نوشتیم:

```js
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
```

✅ هر مرحله پشت هم زنجیر شده (chain).
✅ خطاها رو هم خیلی راحت با `.catch` می‌گیریم.
✅ کد تمیزتر و قابل‌درک‌تره.

---

پس دلیل اصلی استفاده از **Promise** اینه که:

1. از **callback hell** نجات پیدا کنیم.
2. بتونیم کارهای **غیرهمزمان (async)** رو مرتب و قابل‌خواندن کنترل کنیم.
3. مدیریت خطا راحت‌تر باشه.

---

حالا که اینو فهمیدیم، می‌خوای برگردیم به سؤالی که پرسیدم؟
🔎 به نظرت اگه تو زنجیره‌ی `.then` ها اون `return wait(...)` رو ننویسیم، چه اتفاقی میفته؟

---

---

سؤال خیلی خوبه 🙂
پس بذار با یک مثال کوچیک و ساده بازش کنیم:

---

### وقتی **return می‌نویسیم**

```js
wait(1000)
  .then((msg) => {
    console.log(msg);
    return wait(2000); // ⬅️ مهم
  })
  .then((msg) => {
    console.log(msg);
    return wait(3000);
  })
  .then((msg) => console.log(msg));
```

اینجا:

1. اول `wait(1000)` اجرا میشه.
2. وقتی تموم شد، نتیجه‌اش میره تو `.then`.
3. چون `return wait(2000)` داریم، مرحله‌ی بعدی **صبر می‌کنه** تا `wait(2000)` هم تموم بشه.
4. بعد تازه میره سراغ `.then` بعدی.

یعنی **هر کار منتظر قبلی میمونه** → کارها پشت سر هم (سریالی) انجام میشن.

---

### وقتی **return نمی‌نویسیم**

```js
wait(1000)
  .then((msg) => {
    console.log(msg);
    wait(2000); // ⬅️ return حذف شد
  })
  .then((msg) => {
    console.log(msg); // msg اینجا چی میشه؟
    return wait(3000);
  })
  .then((msg) => console.log(msg));
```

🔎 اینجا چی میشه؟

- تو `.then` اول، چون ما `return` نکردیم، مقدار پیش‌فرض `undefined` برمی‌گرده.
- پس `.then` دوم **دیگه منتظر اون `wait(2000)` نمیمونه** و فوری اجرا میشه.
- در نتیجه نظم کار به‌هم می‌خوره.

---

✅ نتیجه:

- `return` باعث میشه Promise جدید برگردونده بشه و زنجیره درست کار کنه.
- بدون `return`، زنجیره قطع میشه و `.then` بعدی زودتر اجرا میشه.

---

---

آفرین 👌 پس این بخشو گرفتی.

---

## 3. مدیریت خطا در Promise

یکی از نکات قشنگ Promise اینه که خطاها خیلی راحت مدیریت میشن.

### مثال:

```js
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
```

🔑 نکته‌ها:

- `.catch` همه‌ی خطاها رو می‌گیره.
- `.finally` همیشه اجرا میشه (چه موفق بشه چه خطا بده).

---

## 4. متدهای کاربردی Promise

جاوااسکریپت برای کار با چندتا Promise ابزارهای آماده داره:

1. **`Promise.all([p1, p2, p3])`**
   همه رو با هم اجرا می‌کنه → وقتی _همه موفق بشن_ نتیجه میده.
   (اگه حتی یکی خطا بده، کلش reject میشه)

2. **`Promise.race([p1, p2, p3])`**
   هر کدوم زودتر تموم بشه همون برگردونده میشه.

3. **`Promise.allSettled([p1, p2])`**
   همه رو اجرا می‌کنه → چه موفق چه خطا، آخرش وضعیت هرکدوم رو برمی‌گردونه.

---

## 5. پل به Async/Await

حالا که Promise رو فهمیدی، قدم بعدی **async/await** هست.
در واقع `async/await` همون Promise ـه، فقط با سینتکس ساده‌تر (شبیه کد همزمان).

---

---

عالیه 👌 حالا می‌ریم سراغ **Async/Await**.

---

## 1. ایده اصلی

Async/Await در واقع فقط یه **ظاهر ساده‌تر** برای کار با Promise ـه.

- به جای `.then` و `.catch`
- می‌نویسی مثل اینکه کدت **عادی و مرحله به مرحله** اجرا میشه.

---

## 2. شکل کلی

```js
async function myFunc() {
  try {
    let result = await somePromise();
    console.log("نتیجه:", result);
  } catch (err) {
    console.log("خطا:", err);
  }
}
```

🔑 نکات:

- هر تابعی که `async` باشه **خودش یه Promise برمی‌گردونه**.
- `await` فقط داخل توابع async کار می‌کنه.
- وقتی `await` جلوی یه Promise بذاری → کد تا وقتی اون Promise تموم نشه، **صبر می‌کنه**.

---

## 3. مثال ساده

```js
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
```

خروجی:

```md
شروع
1000 میلی‌ثانیه گذشت
2000 میلی‌ثانیه گذشت
3000 میلی‌ثانیه گذشت
پایان
```

👀 می‌بینی؟ خیلی شبیه کد معمولی مرحله به مرحله‌ست، ولی پشت پرده همچنان Promise استفاده میشه.

---

## 4. مدیریت خطا

```js
async function test() {
  try {
    let res = await Promise.reject("یه خطا رخ داد ❌");
    console.log(res);
  } catch (err) {
    console.log("گرفتیمش:", err);
  }
}

test();
```

---

## پس Async/Await فقط برای تمیزتر نوشتن Promise ـهاست.

سؤال ازت:
به نظرت اگه توی یه تابع `async`، ما هیچ `await` استفاده نکنیم، چه فرقی با یه تابع معمولی داره؟

---

---

خیلی فکر خوبیه 👌 مقایسه کنار هم همیشه باعث میشه مطلب بچسبه.
بریم دونه‌دونه معادلش با **Promise معمولی** رو ببینیم.

---

## 1. اجرای پشت سر هم با **Promise**

(همون مثالی که با `await` زدیم، اینجا با `.then`)

```js
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
```

---

## 2. همون کد با **Async/Await**

```js
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
```

👀 می‌بینی؟ دقیقاً همون کار، فقط فرق توی نحوه‌ی نوشتنشه.

---

## 3. مدیریت خطا با Promise

```js
let myPromise = new Promise((resolve, reject) => {
  reject("یه خطا رخ داد ❌");
});

myPromise
  .then((res) => console.log("نتیجه:", res))
  .catch((err) => console.log("خطا:", err));
```

---

## 4. همون مدیریت خطا با Async/Await

```js
async function test() {
  try {
    let res = await Promise.reject("یه خطا رخ داد ❌");
    console.log(res);
  } catch (err) {
    console.log("گرفتیمش:", err);
  }
}

test();
```

---

📌 جمع‌بندی سریع:

- **Promise معمولی** → `.then` و `.catch`
- **Async/Await** → `await` + `try/catch`

هر دو یکی هستن، فقط **async/await خواناتر و تمیزتره**.

---

حالا برگردیم به سؤال من:
🔎 اگه یه تابع `async` بنویسیم، ولی **هیچ `await` داخلش استفاده نکنیم**، چه فرقی با یه تابع معمولی داره؟

---

---

👌 پس بذار خیلی ساده بگم:

---

### وقتی یه تابع رو `async` می‌کنی:

- اون تابع **همیشه یه Promise برمی‌گردونه**.
- حتی اگه داخلش هیچ `await` ننویسی.

---

### مثال:

```js
async function foo() {
  return 42;
}

function bar() {
  return 42;
}

console.log(foo()); // Promise { 42 }
console.log(bar()); // 42
```

👀 تفاوت:

- `foo()` چون `async` هست → نتیجه‌اش داخل یه Promise پیچیده میشه.
- `bar()` یه عدد عادی برمی‌گردونه.

---

🔑 پس فرقش اینه:

- تابع **معمولی** → مقدار عادی برمی‌گردونه.
- تابع **async** → همیشه Promise برمی‌گردونه (چه `await` باشه چه نباشه).

---

حالا یه تمرین کوچیک برات:  
اگه بنویسم:

```js
async function test() {
  return "سلام";
}

test().then((msg) => console.log(msg));
```

به نظرت توی کنسول چی چاپ میشه؟

---

---

اشکالی نداره 🙂
بیا مرحله‌به‌مرحله بررسی کنیم:

---

### کد:

```js
async function test() {
  return "سلام";
}

test().then((msg) => console.log(msg));
```

---

1. `test()` یه **تابع async** هست → پس خروجیش همیشه یه Promise ـه.
   یعنی اینجا خروجی میشه:

   ```ms
   Promise { "سلام" }
   ```

2. ما گفتیم:

   ```js
   test().then((msg) => console.log(msg));
   ```

   پس وقتی Promise برگرده (fulfill بشه)، مقدار `"سلام"` به `.then` میره.

3. در نتیجه توی کنسول چاپ میشه:

   ```md
   سلام
   ```

---

🔑 نکته‌ای که باید یادت بمونه:

> هرچی توی تابع async `return` کنی → در واقع میشه `resolve` همون Promise.

---

میخوای من حالا مثالی بزنم که نشون بده وقتی **reject** داشته باشیم توی async تابع چه شکلی میشه؟

---

---

عالی 👌 پس ببینیم وقتی یه تابع `async` بخواد خطا بده، چه شکلیه:

---

### مثال با reject

```js
async function testError() {
  throw new Error("یه خطا رخ داد ❌");
}

testError()
  .then((res) => console.log("نتیجه:", res))
  .catch((err) => console.log("خطا:", err.message));
```

---

### چی اتفاق میفته؟

1. `throw new Error(...)` داخل `async` مثل اینه که Promise رو **reject** کردیم.
2. پس `.then` اجرا نمیشه.
3. `.catch` مقدار خطا رو می‌گیره و چاپ می‌کنه.

🔎 خروجی:

```md
خطا: یه خطا رخ داد ❌
```

---

💡 نکته:

- توی async/await هم همین کارو می‌کنیم، فقط به جای `.then/.catch` از `try/catch` استفاده می‌کنیم:

```js
async function run() {
  try {
    let res = await testError();
  } catch (err) {
    console.log("گرفتیمش:", err.message);
  }
}

run();
```

خروجی دقیقاً همون هست:

```md
گرفتیمش: یه خطا رخ داد ❌
```

---

اگه بخوای، می‌تونیم مرحله بعد بریم و **چند Promise با Async/Await همزمان یا پشت سر هم** رو با هم کار کنیم تا کاملاً مسلط بشی.  
میخوای بریم اون مرحله؟

---

---

عالی 👌 پس بریم سراغ **اجرای چند Promise با Async/Await**.

---

## 1️⃣ اجرای پشت سر هم (سریالی)

مثل همون مثال wait که قبل‌تر داشتیم، فقط با چند Promise:

```js
function wait(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}

async function runSerial() {
  let a = await wait(1000);
  console.log("۱:", a);

  let b = await wait(2000);
  console.log("۲:", b);

  let c = await wait(3000);
  console.log("۳:", c);
}

runSerial();
```

- 🔹 اینجا هر مرحله **صبر می‌کنه تا مرحله قبل تموم بشه**.
- زمان کل: ۱ + ۲ + ۳ = ۶ ثانیه

---

## 2️⃣ اجرای همزمان (Parallel)

اگر بخوایم چند Promise همزمان شروع بشن و وقتی همه تموم شدن نتیجه‌ها رو بگیریم، از `Promise.all` استفاده می‌کنیم:

```js
async function runParallel() {
  let results = await Promise.all([wait(1000), wait(2000), wait(3000)]);

  console.log("نتایج:", results);
}

runParallel();
```

- 🔹 همه Promise ها همزمان اجرا میشن.
- زمان کل = زمان طولانی‌ترین Promise = ۳ ثانیه
- خروجی:

```md
نتایج: [1000, 2000, 3000]
```

---

💡 نکته‌ها:

1. **سریالی**: وقتی مرحله بعد منتظر مرحله قبل بمونه
2. **همزمان**: همه با هم شروع میشن، سریع‌تر میشه

---

میخوای برات یه مثال بزنم که **چند Promise همزمان با try/catch و Async/Await مدیریت خطا کنیم**؟
این خیلی کاربردیه تو پروژه‌ها.

---

---

خوبه 😎 پس بریم سراغ **چند Promise همزمان با مدیریت خطا**.

---

### مثال عملی

فرض کن سه Promise داریم، یکی از اونا ممکنه خطا بده:

```js
function wait(ms, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`Promise ${ms} شکست خورد ❌`);
      } else {
        resolve(`${ms} میلی‌ثانیه گذشت ✅`);
      }
    }, ms);
  });
}

async function runAll() {
  try {
    let results = await Promise.all([
      wait(1000),
      wait(2000, true), // این Promise شکست میخوره
      wait(1500),
    ]);

    console.log("نتایج:", results);
  } catch (err) {
    console.log("خطا گرفتیم:", err);
  }
}

runAll();
```

---

### 🔍 نکات مهم:

1. چون از `Promise.all` استفاده کردیم:

   - اگه حتی **یکی از Promise ها reject بشه** → کل `await Promise.all(...)` خطا میده و میره تو `catch`.

2. ترتیب اجرا همزمانه، ولی زمان کل برابر طولانی‌ترین Promiseه (اینجا ۲۰۰۰ میلی‌ثانیه).

---

💡 اگر بخوای همه Promise ها رو اجرا کنی **ولی هیچ کدوم به خاطر خطا قطع نشن**، از `Promise.allSettled` استفاده می‌کنیم:

```js
async function runAllSettled() {
  let results = await Promise.allSettled([
    wait(1000),
    wait(2000, true),
    wait(1500),
  ]);

  console.log(results);
}

runAllSettled();
```

خروجی یه آرایه میده که توش وضعیت هر Promise مشخصه:

```md
[
{ status: 'fulfilled', value: '1000 میلی‌ثانیه گذشت ✅' },
{ status: 'rejected', reason: 'Promise 2000 شکست خورد ❌' },
{ status: 'fulfilled', value: '1500 میلی‌ثانیه گذشت ✅' }
]
```

---

این روش خیلی کاربردیه وقتی میخوای **چند کار همزمان اجرا بشه ولی خطای یکی کل کارو متوقف نکنه**.

---

اگه بخوای، مرحله بعد می‌تونیم یه **جمع‌بندی کامل** از همه مفاهیم Promise و Async/Await با یه مثال واقعی پروژه‌محور بزنیم تا همه چی بچسبه.
میخوای بریم اون مرحله؟

---

---

عالی 😎 پس بریم یه **جمع‌بندی کامل و پروژه‌محور** از همه چی:

---

## سناریو واقعی پروژه

فرض کن داریم یه اپ می‌سازیم که از **سه API مختلف** داده می‌گیره و بعد اون داده‌ها رو نشون میده:

1. API اول → محصولات
2. API دوم → کاربران
3. API سوم → سفارش‌ها

میخوایم:

- اگه همه موفق بودن → همه رو نمایش بدیم
- اگه یکی خطا داد → پیام خطا نشون بدیم
- همه همزمان شروع بشن تا سریع‌تر باشه

---

### 1️⃣ با Promise معمولی

```js
function fetchData(url) {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error(`خطا در ${url}`);
    return res.json();
  });
}

Promise.all([
  fetchData("https://api.example.com/products"),
  fetchData("https://api.example.com/users"),
  fetchData("https://api.example.com/orders"),
])
  .then(([products, users, orders]) => {
    console.log("محصولات:", products);
    console.log("کاربران:", users);
    console.log("سفارش‌ها:", orders);
  })
  .catch((err) => console.log("خطا:", err.message));
```

---

### 2️⃣ همون با Async/Await

```js
async function run() {
  try {
    let [products, users, orders] = await Promise.all([
      fetchData("https://api.example.com/products"),
      fetchData("https://api.example.com/users"),
      fetchData("https://api.example.com/orders"),
    ]);

    console.log("محصولات:", products);
    console.log("کاربران:", users);
    console.log("سفارش‌ها:", orders);
  } catch (err) {
    console.log("خطا:", err.message);
  } finally {
    console.log("پایان عملیات ✅");
  }
}

run();
```

---

### نکات کلیدی که از کل جلسه می‌گیریم:

1. **Callback** → روش قدیمی، وقتی کار async داریم، ممکنه کد به هم بریزه (callback hell).
2. **Promise** → کد تمیزتر، `.then` و `.catch` برای مدیریت نتایج و خطا.
3. **Async/Await** → ظاهر ساده و خواناتر برای Promise ها، با `try/catch` برای خطاها.
4. **اجرای پشت سر هم** → با چند `await` سریالی.
5. **اجرای همزمان** → با `Promise.all` یا `Promise.allSettled`.
6. **مدیریت خطاها** → `.catch` یا `try/catch` و `finally` برای پاکسازی.

---

اگر بخوای، می‌تونم یه **چارت تصویری کوچیک** هم بکشم که فرق Callback / Promise / Async-Await و سریالی/همزمان رو نشون بده تا همه چیز تو ذهن بچسبه.

میخوای این کارو بکنم؟

---

---
