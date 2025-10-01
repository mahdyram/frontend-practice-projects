آره، بیایم ساده و دقیق توضیح بدیم:

---

### Axios چیست؟

**Axios** یک کتابخانه‌ی **JavaScript** برای ارسال درخواست‌های HTTP است که روی **مرورگر** و **Node.js** کار می‌کند.
به عبارت ساده، Axios یه جایگزین حرفه‌ای برای `fetch` هست و کار با APIها رو راحت‌تر می‌کنه.

---

### ویژگی‌های اصلی Axios

1. **Promise-based**

   - دقیقا مثل `fetch`، Axios هم Promise برمی‌گردونه.

   ```js
   axios
     .get("https://dummyjson.com/users")
     .then((res) => console.log(res.data))
     .catch((err) => console.error(err));
   ```

2. **خودکار تبدیل JSON**

   - تو `fetch` باید صدا بزنی `res.json()`، ولی تو Axios داده‌ها مستقیم تو `res.data` هستند.

3. **مدیریت آسان خطاها**

   - خطاها (مثل 404 یا 500) تو catch قابل دسترس هستن و نیازی به بررسی `res.ok` نداری.

4. **ارسال درخواست‌های POST، PUT، DELETE ساده**

   ```js
   axios
     .post("https://dummyjson.com/users/add", { name: "Ali" })
     .then((res) => console.log(res.data))
     .catch((err) => console.error(err));
   ```

5. **قابلیت تنظیم headers، timeout، و interceptors**

   - خیلی مفید برای Authentication و کار با APIهای پیچیده.

---

### مقایسه کوتاه با fetch

| ویژگی            | fetch                     | Axios                |
| ---------------- | ------------------------- | -------------------- |
| تبدیل JSON       | باید دستی با `res.json()` | خودکار (`res.data`)  |
| خطاهای HTTP      | باید چک کنی `res.ok`      | مستقیماً reject میشه |
| پشتیبانی Node.js | نیاز به polyfill / undici | دارد                 |
| ارسال body JSON  | باید JSON.stringify کنی   | خودش مدیریت می‌کنه   |

---

اگر بخوای، می‌تونم یه مثال **کامل GET و POST با Axios** بزنم که فرقش با fetch خیلی واضح باشه و حتی async/await هم باشه.

میخوای برات آماده کنم؟

---

---

عالی 😎، پس بیایم یه مثال کامل با **Axios** و **fetch** همزمان داشته باشیم، هم GET و هم POST، و با **async/await** هم نشون بدیم تا تفاوت‌ها مشخص بشه.

---

## 1️⃣ نصب Axios (در Node.js یا پروژه فرانت‌اند)

```bash
npm install axios
```

---

## 2️⃣ مثال کامل GET

### با Axios

```js
import axios from "axios";

async function getUsersAxios() {
  try {
    const res = await axios.get("https://dummyjson.com/users");
    console.log("Axios GET:", res.data); // داده JSON مستقیم
  } catch (err) {
    console.error("Axios Error:", err);
  }
}

getUsersAxios();
```

### با fetch

```js
async function getUsersFetch() {
  try {
    const res = await fetch("https://dummyjson.com/users");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log("Fetch GET:", data);
  } catch (err) {
    console.error("Fetch Error:", err);
  }
}

getUsersFetch();
```

> ⚡ تفاوت مهم: تو fetch باید بررسی کنی `res.ok` و `res.json()` صدا بزنی، ولی Axios خودش JSON رو میاره تو `res.data` و خطاها رو هم catch می‌کنه.

---

## 3️⃣ مثال کامل POST

فرض کنیم میخوایم یه کاربر جدید اضافه کنیم.

### با Axios

```js
async function addUserAxios() {
  try {
    const res = await axios.post("https://dummyjson.com/users/add", {
      name: "Ali",
      age: 25,
    });
    console.log("Axios POST:", res.data);
  } catch (err) {
    console.error("Axios POST Error:", err);
  }
}

addUserAxios();
```

### با fetch

```js
async function addUserFetch() {
  try {
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Ali", age: 25 }),
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log("Fetch POST:", data);
  } catch (err) {
    console.error("Fetch POST Error:", err);
  }
}

addUserFetch();
```

> ⚡ تفاوت مهم:
>
> - تو fetch باید `JSON.stringify` بکنی و headers بذاری.
> - Axios خودش JSON می‌فرسته و header رو خودش تنظیم می‌کنه.

---

اگر بخوای، می‌تونم یه **چارت ساده و بصری** بکشم که نشون بده **مسیر fetch و Axios از GET/POST تا رسیدن به داده** چطوریه و فرق‌ها رو راحت‌تر ببینی.

میخوای بکشم؟
