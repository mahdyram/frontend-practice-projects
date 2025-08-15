حق با توئه — اون ارور دقیقاً به‌خاطر همین خطه:

```js
useEffect(() => getAdvice(), []);
```

چرا؟ چون `getAdvice` **async** هست و وقتی این‌طوری می‌نویسی، **Arrow Function به‌صورت ضمنی خروجیِ `getAdvice()` رو برمی‌گردونه**؛ خروجیِ یک تابع async هم یک **Promise**ه.
ولی `useEffect` فقط باید یا **هیچی برنگردونه** (undefined) یا **یک تابع clean-up** برگردونه. Promise که برگرده، React فکر می‌کنه clean-up دادی و می‌زنه به خطا: _“useEffect must not return anything besides a function…”_ و بعد هم _destroy is not a function_.

### راه‌حل‌های صحیح

یکیش رو انتخاب کن؛ همه درستن:

1. همون call، ولی داخل بلاک تا چیزی return نشه

```js
useEffect(() => {
  getAdvice(); // Promise برمی‌گرده، اما خود useEffect چیزی برنمی‌گردونه
}, []);
```

2. الگوی توصیه‌شده با IIFE async + cleanup اختیاری (پایدارتر)

```js
useEffect(() => {
  const controller = new AbortController();

  (async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice", {
        signal: controller.signal,
      });
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    } catch (err) {
      if (err.name !== "AbortError") console.error(err);
    }
  })();

  return () => controller.abort(); // لغو درخواست در unmount
}, []);
```

3. اگر می‌خوای کوتاه بنویسی: Promise رو عمداً “بی‌اثر” کن

```js
useEffect(() => {
  void getAdvice();
}, []);
// یا
useEffect(() => {
  getAdvice().catch(console.error);
}, []);
```

### یک نکته درباره React 18 و StrictMode

در حالت توسعه، `useEffect` ممکنه **دوبار** اجرا بشه تا باگ‌ها زودتر معلوم بشن؛ پس ممکنه دفعه اول _count_ روی 2 بره. این در تولید (production) رخ نمی‌ده. اگر برای توسعه هم نمی‌خوای دوبار اجرا بشه، می‌تونی (فقط در dev) این گارد رو بذاری:

```js
const didRun = useRef(false);
useEffect(() => {
  if (didRun.current) return;
  didRun.current = true;
  getAdvice();
}, []);
```

جمع‌بندی: مشکل از “برگشتن Promise از useEffect” بود. یکی از الگوهای بالا رو جایگزین کن، ارور برطرف می‌شه.

---

---
