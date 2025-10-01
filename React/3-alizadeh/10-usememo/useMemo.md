### `useMemo` در React چیست؟

`useMemo` یک **هوک بهینه‌سازی (performance optimization hook)** است که باعث می‌شود محاسبات سنگین یا تولید مقادیر جدید **فقط وقتی وابستگی‌ها تغییر کنند** اجرا شود، نه در هر رندر.

---

## سینتکس

```jsx
const memoizedValue = useMemo(() => {
  // محاسبات سنگین یا مقداری که می‌خواهیم ذخیره شود
  return someCalculation(a, b);
}, [a, b]);
```

- تابعی که به `useMemo` می‌دهیم، فقط وقتی اجرا می‌شود که یکی از مقادیر موجود در آرایه وابستگی‌ها `[a, b]` تغییر کند.
- در بقیه رندرها، React همان مقدار قبلی را برمی‌گرداند (cache).

---

## مثال ساده

```jsx
import { useState, useMemo } from "react";

function ExpensiveCalculation(num) {
  console.log("Calculating...");
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += num * 2;
  }
  return total;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const calculation = useMemo(() => ExpensiveCalculation(count), [count]);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={themeStyle}>
      <h2>Expensive Calculation: {calculation}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setDark((d) => !d)}>Toggle Theme</button>
    </div>
  );
}
```

### بدون `useMemo`

- هر بار که state `dark` تغییر کند، **کل کامپوننت دوباره رندر می‌شود**.
- `ExpensiveCalculation` هر بار از اول اجرا می‌شود، حتی وقتی مقدار `count` عوض نشده.

### با `useMemo`

- محاسبه فقط وقتی دوباره اجرا می‌شود که `count` تغییر کند.
- تغییر `dark` فقط ظاهر را تغییر می‌دهد و نیازی به اجرای مجدد محاسبه نیست.

---

## چه زمانی استفاده کنیم؟

- زمانی که **محاسبات سنگین** دارید (loop بزرگ، عملیات پیچیده، پردازش داده‌ها).
- وقتی مقدار تولیدی یک تابع **در رندرهای بعدی تغییری نمی‌کند** مگر اینکه state یا props خاصی تغییر کند.
- **نه برای هر چیز کوچکی!** چون خودش هم هزینه دارد.

---

---

خیر، **`useEffect` جایگزین `useMemo` نیست** و هدف متفاوتی دارد:

---

### **تفاوت اصلی**

- **`useMemo`**

  - مقدار محاسبه‌شده را _cache_ می‌کند و همان را در رندرهای بعدی استفاده می‌کند.
  - هیچ کاری در "خارج از رندر" انجام نمی‌دهد.
  - هدف: بهینه‌سازی محاسبات و جلوگیری از اجرای دوباره توابع سنگین.

- **`useEffect`**

  - برای انجام **side effect**ها بعد از رندر استفاده می‌شود (فراخوانی API، تغییر DOM، لاگ‌کردن، تایمر و ...).
  - مقدار برنمی‌گرداند، فقط کدی را بعد از رندر اجرا می‌کند.

---

### **چرا `useEffect` جایگزین `useMemo` نمی‌شود؟**

مثال قبلی را تصور کن:

```jsx
const calculation = useMemo(() => ExpensiveCalculation(count), [count]);
```

اگر بخواهیم با `useEffect` پیاده‌سازی کنیم:

```jsx
const [calculation, setCalculation] = useState(0);

useEffect(() => {
  setCalculation(ExpensiveCalculation(count));
}, [count]);
```

- اینجا مجبور شدیم یک **state اضافه** تعریف کنیم.
- هر بار که `count` تغییر کند:

  - کامپوننت **یک‌بار رندر می‌شود**.
  - `useEffect` اجرا می‌شود و `setCalculation` صدا زده می‌شود.
  - دوباره **رندر دوم اتفاق می‌افتد**.

اما در `useMemo`:

- محاسبه در همان رندر اول انجام می‌شود.
- نیازی به **state اضافه** و **دو بار رندر** نیست.

---

### **نتیجه**

- `useEffect` بیشتر برای side-effectهاست.
- `useMemo` برای cache کردن نتایج محاسبات در خود فرآیند رندر.

---

---

عالی، بیاییم **قدم‌به‌قدم** بررسی کنیم که این کد چه اتفاقی می‌افتد و نقش `useMemo` و `React.memo` چیست، و چرا نمی‌توان فقط از یک **متغیر معمولی** یا حتی `useState` استفاده کرد.

---

## 1️⃣ ساختار کلی کامپوننت‌ها

### Person

```jsx
function Person({ person }) {
  console.log("person rendered");

  return (
    <h3>
      {person.fName} {person.lName} - {person.phone}
    </h3>
  );
}

export default memo(Person);
```

- کامپوننت **تابعی ساده** که یک object به نام `person` دریافت می‌کند.
- `console.log` نشان می‌دهد **هر بار که Person render می‌شود**.
- با `React.memo` (یا `memo`) wrap شده، یعنی **اگر props تغییر نکرده باشد، render نمی‌شود**.

---

### PersonForm

```jsx
export default function PersonForm() {
  const [count, setCount] = useState(0);
  const [phone, setPhone] = useState("");

  const person = useMemo(
    () => ({ fName: "ali", lName: "ram", phone }),
    [phone]
  );

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr className="hr2" />

      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Person person={person} />
    </div>
  );
}
```

- `count` فقط برای نمایش و تست رندر اضافی است.
- `phone` مقدار ورودی از کاربر را نگه می‌دارد.
- `person` **یک object شامل fName, lName و phone** است که با `useMemo` ساخته می‌شود.

---

## 2️⃣ چرا `useMemo` اینجا ضروری است؟

فرض کن بدون `useMemo`:

```jsx
const person = { fName: "ali", lName: "ram", phone };
```

- هر بار که Parent (`PersonForm`) رندر شود، **یک object جدید ساخته می‌شود**.
- حتی اگر `phone` تغییر نکرده باشد، `React.memo` آن را **prop تغییر کرده** تشخیص می‌دهد.
- نتیجه: **Person هر بار رندر می‌شود** و "person rendered" چاپ می‌شود.

با `useMemo`:

```jsx
const person = useMemo(() => ({ fName: "ali", lName: "ram", phone }), [phone]);
```

- object `person` **فقط وقتی `phone` تغییر کند** ساخته می‌شود.
- در رندرهای دیگر، همان object قبلی برگردانده می‌شود.
- حالا `React.memo` تشخیص می‌دهد که prop `person` تغییر نکرده → Person **re-render نمی‌شود**.

✅ پس `useMemo` برای **ثابت نگه داشتن reference object بین renderها** است.

---

## 3️⃣ چرا نمی‌توانیم از یک متغیر معمولی استفاده کنیم؟

```jsx
const person = { fName: "ali", lName: "ram", phone };
```

- در هر render **یک object جدید ساخته می‌شود**.
- React.memo نمی‌تواند جلوی رندر اضافی را بگیرد چون reference تغییر کرده است.

---

## 4️⃣ چرا نمی‌توانیم از useState استفاده کنیم؟

```jsx
const [person, setPerson] = useState({ fName: "ali", lName: "ram", phone });
```

- technically می‌شود، ولی:

  - باید هر بار که `phone` تغییر کرد، با `setPerson` مقدار جدید را بفرستیم.
  - یعنی کار اضافه و پیچیده‌تر برای **حفظ هماهنگی بین phone و person**.
  - با useMemo این کار کاملاً اتوماتیک است و نیازی به state اضافی نیست.

---

## 5️⃣ نقش دقیق هر ابزار

| ابزار        | کاربرد                                                                                       |
| ------------ | -------------------------------------------------------------------------------------------- |
| `useState`   | نگه‌داری state محلی کامپوننت و trigger رندر هنگام تغییر آن                                   |
| `useMemo`    | cache کردن مقدار (مثل object یا محاسبات سنگین) تا وقتی وابستگی تغییر نکند، دوباره ساخته نشود |
| `React.memo` | جلوگیری از **re-render کامپوننت فرزند** وقتی props تغییر نکرده باشد                          |

---

## 6️⃣ جریان اتفاقات در این کد

1. کامپوننت mount می‌شود.
2. `person` با `useMemo` ساخته می‌شود.
3. `Person` render می‌شود → "person rendered" چاپ می‌شود.
4. کاربر count را افزایش می‌دهد:

   - `PersonForm` رندر می‌شود.
   - `phone` تغییر نکرده → `person` همان reference قبلی است.
   - `React.memo` → Person **render نمی‌شود**.

5. کاربر phone را تغییر می‌دهد:

   - `PersonForm` رندر می‌شود.
   - `phone` تغییر کرده → `useMemo` object جدید می‌سازد.
   - `React.memo` → Person **render می‌شود** و "person rendered" چاپ می‌شود.

---

💡 **جمع‌بندی:**

- `React.memo` فقط جلوی render اضافی برای props **تغییر نکرده** را می‌گیرد.
- برای reference-type props (مثل object یا array) باید **useMemo** یا **useState** استفاده کنیم تا reference ثابت بماند.
- متغیر معمولی داخل render → reference جدید → memo کار نمی‌کند.
- useState → کار می‌کند ولی نیازمند مدیریت state است. useMemo → ساده و خواناتر.

---

- **`useMemo`** برای **ممورایز کردن مقدار نهایی** (نتیجه یک محاسبه، آرایه یا آبجکت) استفاده می‌شود تا در هر رندر دوباره ساخته نشود مگر اینکه وابستگی‌هایش تغییر کنند.
- **`useCallback`** برای **ممورایز کردن خود تابع** استفاده می‌شود تا آدرس (reference) تابع بین رندرها ثابت بماند مگر اینکه وابستگی‌ها تغییر کنند.

یعنی:

- اگر مقدار نهایی یک محاسبه (مثل یک لیست فیلترشده یا یک آبجکت جدید) مهم است → **`useMemo`**
- اگر یک تابع را به عنوان prop به کامپوننت فرزند می‌فرستی و نمی‌خواهی هر بار رندر تغییر کند → **`useCallback`**
