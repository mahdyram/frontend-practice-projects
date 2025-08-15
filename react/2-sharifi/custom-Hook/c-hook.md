باشه، بریم سراغ **Custom Hook** از پایه و با همه جزئیاتش
(یکم طولانی میشه ولی بعدش دیگه کامل میگیری 😄).

---

## 📌 ۱. هوک (Hook) در React چیه؟

هوک‌ها توابع خاصی هستن که به ما اجازه میدن **state**، **lifecycle** و قابلیت‌های داخلی React رو **داخل کامپوننت‌های تابعی (Function Component)** استفاده کنیم.

مثال هوک‌های داخلی:

- `useState` → مدیریت state
- `useEffect` → کنترل side effect (مثل fetch، تایمر و ...)
- `useContext` → دسترسی به context
- `useRef` → دسترسی به DOM یا نگهداری داده بدون re-render

---

## 📌 ۲. Custom Hook چیه؟

**Custom Hook** در اصل یک **تابع معمولی جاوااسکریپت** هست که از یک یا چند هوک داخلی React استفاده می‌کنه و منطق قابل استفاده مجدد (Reusable Logic) رو داخل خودش قرار میده.

> یعنی: اگر دیدی تو چند کامپوننت داری کد تکراری می‌نویسی (مثل fetch کردن داده)، میتونی اون کد رو به شکل یک Custom Hook دربیاری و هرجا لازم شد فقط صداش بزنی.

---

## 📌 ۳. چرا Custom Hook درست می‌کنیم؟

چون:

1. **کد تمیزتر و کوتاه‌تر** میشه.
2. **منطق جدا از UI** میشه (Separation of Concerns).
3. میشه **منطق رو به راحتی بین چند کامپوننت استفاده کرد**.
4. نگهداری و تغییر راحت‌تره (یک جا تغییر بدی همه جا درست میشه).

---

## 📌 ۴. قوانین Custom Hook

1. **نامش باید با `use` شروع بشه** (مثلاً `useFetch`, `useAuth`).

   - اینطوری React میفهمه که این تابع یک هوک هست و قوانین هوک‌ها رو روش اعمال میکنه.

2. **فقط در بالاترین سطح (top-level) صدا زده بشه**.

   - یعنی نباید داخل شرط یا حلقه باشه.

3. **فقط در کامپوننت تابعی یا یک Custom Hook دیگه** صدا زده بشه.

   - نه در فانکشن معمولی یا کلاس‌ها.

---

## 📌 ۵. مثال ساده

فرض کن تو دو کامپوننت میخوای زمان فعلی رو هر ثانیه آپدیت کنی.

🔻 بدون Custom Hook:

```jsx
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}
```

اگه یک کامپوننت دیگه هم همین کد رو بخواد، باید دوباره کپی‌پیست کنیم → تکراری!

---

🔹 با **Custom Hook**:

```jsx
function useClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return time;
}
```

و استفاده:

```jsx
function Clock() {
  const time = useClock();
  return <p>{time.toLocaleTimeString()}</p>;
}
```

حالا هرجا بخوای ساعت نشون بدی، فقط `useClock()` رو صدا میزنی.

---

## 📌 ۶. مثال کاربردی‌تر: `useFetch`

همین هوکی که نوشتی، یک نمونه واقعی هست.
این هوک مسئول fetch داده و مدیریت سه حالت **loading**, **error**, **data** هست.

مزیت:

- تو هر کامپوننتی که نیاز به داده داری، فقط `useFetch(url)` رو صدا میزنی.
- نیازی به نوشتن دوباره `useEffect` و مدیریت state نیست.

---

## 📌 ۷. نکات حرفه‌ای در طراحی Custom Hook

1. **سعی کن ورودی‌ها و خروجی‌ها ساده باشه**

   - مثلا ورودی `url`، خروجی `{ data, loading, error }`.

2. **منطق رو مستقل از UI نگه دار**

   - Custom Hook نباید JSX برگردونه.

3. **قابلیت استفاده مجدد**

   - اگه فقط برای یک کامپوننت خاص نوشتی، ارزش Custom Hook شدن نداره.

4. **پشتیبانی از cleanup**

   - مثلا تو `useFetch` وقتی کاربر صفحه رو ترک کرد، درخواست fetch لغو بشه (`AbortController`).

---

## 📌 ۸. جمع‌بندی

- Custom Hook = یک تابع که از هوک‌های داخلی استفاده می‌کنه.
- هدف = جدا کردن منطق قابل استفاده مجدد از UI.
- مزیت = تمیزتر شدن کد، حذف تکرار، راحتی نگهداری.
- قانون = با `use` شروع بشه و فقط در سطح بالا اجرا بشه.

---

اگر بخوای میتونم **یک نسخه پیشرفته از `useFetch`** برات بسازم که:

- پشتیبانی از لغو درخواست داشته باشه.
- اتوماتیک تعداد داده‌ها رو محدود کنه.
- کش (cache) کنه تا درخواست‌های تکراری نفرسته.

این باعث میشه واقعا سطح هوکت حرفه‌ای بشه.

---

---

باشه، این نسخه پیشرفته `useFetch` رو برات می‌سازم که سه تا قابلیت داره:

1. **لغو درخواست** با `AbortController` → جلوگیری از warning «memory leak».
2. **محدود کردن تعداد داده‌ها** → مثلا فقط ۱۰ تا اول رو برگردونه.
3. **کش (Cache)** برای جلوگیری از درخواست‌های تکراری به همون URL.

---

### `useFetch.js`

```javascript
import { useEffect, useState, useRef } from "react";

// کش سراسری برای همه درخواست‌ها
const cache = {};

export default function useFetch(url, limit = null) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // یک ref برای AbortController
  const controllerRef = useRef(null);

  useEffect(() => {
    if (!url) return;

    // اگر داده از قبل کش شده باشه
    if (cache[url]) {
      setData(limit ? cache[url].slice(0, limit) : cache[url]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    // ساخت کنترلر لغو
    const controller = new AbortController();
    controllerRef.current = controller;

    fetch(url, { signal: controller.signal })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`Failed to fetch: ${resp.status}`);
        }
        return resp.json();
      })
      .then((result) => {
        cache[url] = result; // ذخیره در کش
        setData(limit ? result.slice(0, limit) : result);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    // cleanup → لغو درخواست وقتی کامپوننت unmount شد
    return () => controller.abort();
  }, [url, limit]);

  return { data, loading, error };
}
```

---

### استفاده در `Fetch.jsx`

```jsx
import useFetch from "./useFetch";

export default function Fetch() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    10 // فقط 10 داده اول
  );

  return (
    <div>
      {loading && <p>getting data ...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <h2>10 first data:</h2>
          <ul>
            {data.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
```

---

### 📌 ویژگی‌های این نسخه

- **حرفه‌ای‌تر از نسخه ساده** چون:

  - جلوی درخواست اضافی رو می‌گیره (با cache).
  - درخواست رو وسط کار میشه قطع کرد.
  - `limit` داره و دیگه مجبور نیستی `slice` رو تو کامپوننت بزنی.

- هشدار «Can't perform a React state update on an unmounted component» رو حذف می‌کنه.

---

من میتونم همین رو **یک مرحله پیشرفته‌تر** کنم که قابلیت **auto-refresh داده‌ها هر X ثانیه** رو هم داشته باشه (مثلاً هر ۳۰ ثانیه یکبار داده‌ها رو بگیره).
این برای داشبوردها و دیتاهای زنده خیلی کاربردیه.
