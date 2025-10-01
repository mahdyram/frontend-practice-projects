خیلی خوب سوال پرسیدی 👌
هر دوتا کدی که نوشتی با **async/await** نوشته شدن، ولی شرایطشون فرق داره.
بریم مرحله به مرحله:

---

## 🔹 کد اول (getUsers)

```js
async function getUsers() {
  const users = [{ name: "ali" }, { name: "negar" }];
  const isOk = Math.random() < 0.5;

  if (isOk) {
    return users; // مثل resolve
  } else {
    throw new Error("Use a vpn"); // مثل reject
  }
}
```

### اینجا چی اتفاق می‌افته؟

- تابع `getUsers` **async** هست → یعنی **خودکار یک Promise برمی‌گردونه**.
- داخل تابع:

  - یه آرایه از کاربران ساختیم.
  - یه شرط تصادفی داریم (`Math.random()`).
  - اگه شرط درست باشه → `return users` → معادل **resolve(users)**.
  - اگه شرط غلط باشه → `throw new Error("Use a vpn")` → معادل **reject("Use a vpn")**.

---

### تابع `run`

```js
async function run() {
  try {
    const res = await getUsers();
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
}

run();
```

- اینجا با `await` صبر می‌کنیم تا Promise برگرده.
- اگه `resolve` شد → مقدارش توی `res` ذخیره میشه.
- اگه `reject` شد → خطا می‌ره توی `catch`.

📌 پس این مثال بیشتر برای **شبیه‌سازی دستی یک Promise** هست، یعنی خودت مشخص می‌کنی که resolve یا reject بشه.

---

## 🔹 کد دوم (getAdvice)

```js
async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log(data.slip.advice);
  } catch (err) {
    console.error("Failed to fetch advice:", err);
  }
}
```

### اینجا چی اتفاق می‌افته؟

- این بار داریم از **fetch API** استفاده می‌کنیم → خودش یک **Promise واقعی** برمی‌گردونه (برای درخواست HTTP).
- `await fetch(...)` صبر می‌کنه تا پاسخ سرور بیاد.
- بعد چک می‌کنیم:

  ```js
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  ```

  چون حتی اگه اینترنت وصل باشه، ممکنه سرور خطا بده (مثلاً 404 یا 500).

- `await res.json()` → داده‌ها رو از فرمت JSON به شیء جاوااسکریپتی تبدیل می‌کنه.
- در نهایت مقدار (`data.slip.advice`) رو لاگ می‌کنیم.

📌 این مثال برای **کار عملی با Promiseها** هست، جایی که واقعاً باید منتظر پاسخ یک سرور بمونی، نه فقط شبیه‌سازی دستی.

---

## 🔑 تفاوت‌های اصلی

| ویژگی           | getUsers (بالایی)                      | getAdvice (پایینی)                         |
| --------------- | -------------------------------------- | ------------------------------------------ |
| نوع Promise     | دستی ساخته شده با `return` و `throw`   | Promise واقعی برگردونده‌شده توسط `fetch`   |
| منبع داده       | یه آرایه ثابت داخل کد                  | داده از سرور (API اینترنتی)                |
| شبیه‌سازی/واقعی | فقط برای تمرین async/await و try/catch | نمونه‌ی واقعی از استفاده در پروژه          |
| خطاها           | تصادفی ایجاد میشه (`Math.random`)      | ممکنه از سرور بیاد یا به خاطر اینترنت باشه |

---

👉 خلاصه:

- **کد اول** برای تمرین مفاهیم پایه‌ای async/await و اینکه بدونی `return` = resolve و `throw` = reject.
- **کد دوم** برای استفاده واقعی از async/await در کار با APIها (مثل گرفتن داده از سرور با fetch).

---

---

آره دقیقاً 🎯

تابع **`fetch`** خودش به صورت پیش‌فرض **یک Promise برمی‌گردونه**.

یعنی وقتی می‌نویسی:

```js
const res = fetch("https://api.adviceslip.com/advice");
```

اینجا `res` در همون لحظه **یه Promise** هست (نه خود جواب سرور).
به همین دلیل لازمه که:

- یا از `.then().catch()` استفاده کنی:

  ```js
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
  ```

- یا از `await` استفاده کنی:

  ```js
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data);
  ```

📌 پس فرقش با مثال بالایی (`getUsers`) اینه که اونجا خودت **Promise رو ساختی**، ولی اینجا خود `fetch` برات یه **Promise آماده** می‌ده.

می‌خوای یه جدول مقایسه بین `fetch` و `setTimeout` بزنم تا کامل برات روشن شه؟
