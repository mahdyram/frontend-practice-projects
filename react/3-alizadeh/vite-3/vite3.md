نسخه بهینه و کوتاه‌تر کدت می‌تونه این شکلی باشه:

```jsx
import { useState } from "react";

export default function A1() {
  const [num, setNum] = useState(0);

  const handleClick = (action, value = 0) => {
    setNum((prev) => {
      switch (action) {
        case "+":
          return prev + value;
        case "-":
          return prev - value;
        case "reset":
          return 0;
        default:
          return prev;
      }
    });
  };

  const buttons = [
    { action: "-", value: 1, label: "-1" },
    { action: "+", value: 1, label: "+1" },
    { action: "reset", label: "reset" },
    { action: "-", value: 10, label: "-10" },
    { action: "+", value: 10, label: "+10" },
  ];

  return (
    <div>
      <h2>{num}</h2>
      {buttons.map((btn, i) => (
        <button key={i} onClick={() => handleClick(btn.action, btn.value)}>
          {btn.label}
        </button>
      ))}
      <hr className="hr1" />
    </div>
  );
}
```

### تغییرات مهم:

1. **حذف `break` اضافه**
2. **استفاده از `prev` داخل `setNum`** → آپدیت امن‌تر state
3. **ایجاد آرایه `buttons`** → جلوگیری از تکرار کد و راحت‌تر اضافه کردن دکمه‌های جدید
4. **قرار دادن مقدار پیش‌فرض برای `value`** → برای دکمه reset نیازی به ارسال value نیست

## به این شکل کد هم تمیزتره، هم اگه بعداً بخوای دکمه‌های جدید اضافه کنی فقط کافیه تو آرایه `buttons` یه شیء جدید بذاری.

---

---

باشه، از پایه و قدم‌به‌قدم میریم سراغ **Controlled و Uncontrolled Components** در React.
می‌خوام جوری بگم که اول مفهومش رو بگیری، بعد مثال عملی رو ببینی.

---

## 1️⃣ مقدمه — داده‌ها در React چطور مدیریت میشن؟

در React وقتی می‌خوای کاربر داده وارد کنه (مثل **input**، **textarea**، **select**)، دو روش کلی برای مدیریت این داده وجود داره:

- **Controlled Component** → کنترل داده به دست React
- **Uncontrolled Component** → کنترل داده به دست خود DOM (و استفاده از ref برای گرفتن مقدار)

---

## 2️⃣ Controlled Component چیست؟

در این روش، **React صاحب اصلی داده است**.
یعنی مقدار ورودی (`value`) به state وصل میشه و **هر تغییر** با `setState` یا `useState` انجام میشه.

📌 ویژگی‌ها:

- `value` مستقیماً از state میاد
- تغییرات با `onChange` کنترل میشه
- یک منبع واحد داده داریم (**Single Source of Truth** → state)

🔹 مثال:

```jsx
import { useState } from "react";

export default function ControlledExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name} // مقدار همیشه از state میاد
        onChange={(e) => setName(e.target.value)} // هر تغییر، state رو آپدیت می‌کنه
      />
      <p>نام شما: {name}</p>
    </div>
  );
}
```

✅ مزیت: همیشه مقدار در state ذخیره شده، مدیریت ساده‌تر، validation راحت.
⚠️ عیب: هر تغییر باعث re-render میشه (مشکل وقتی زیاد میشه که داده خیلی زیاد باشه).

---

## 3️⃣ Uncontrolled Component چیست؟

در این روش، **DOM خودش داده را مدیریت می‌کند** و React فقط گاهی مقدار را می‌گیرد.
ما از **`ref`** استفاده می‌کنیم تا مقدار ورودی را مستقیماً از DOM بگیریم.

📌 ویژگی‌ها:

- `value` داخل DOM ذخیره میشه (نه داخل state)
- برای گرفتن مقدار باید از `ref` استفاده کنیم
- مناسب وقتی که نیازی به مانیتور کردن لحظه‌ای تغییرات نیست

🔹 مثال:

```jsx
import { useRef } from "react";

export default function UncontrolledExample() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert("نام شما: " + inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} /> {/* هیچ value و onChange نداره */}
      <button onClick={handleSubmit}>نمایش نام</button>
    </div>
  );
}
```

✅ مزیت: کمتر re-render میشه، مناسب برای فرم‌های بزرگ.
⚠️ عیب: داده لحظه‌ای در React نیست، سخت‌تر برای validation یا تغییر آنی.

---

## 4️⃣ تفاوت اصلی Controlled vs Uncontrolled

| ویژگی            | Controlled Component | Uncontrolled Component |
| ---------------- | -------------------- | ---------------------- |
| ذخیره‌سازی داده  | در state React       | در DOM                 |
| گرفتن مقدار      | از state             | از `ref`               |
| تغییر لحظه‌ای UI | آسان و مستقیم        | سخت‌تر                 |
| مدیریت فرم بزرگ  | ممکن ولی سنگین‌تر    | سریع‌تر و سبک‌تر       |

---

## 5️⃣ چه زمانی کدام را انتخاب کنیم؟

- اگر نیاز داری **validation آنی**، **نمایش لحظه‌ای** یا **کنترل کامل** روی ورودی داشته باشی → Controlled بهتره.
- اگر فرم خیلی بزرگه و performance مهمه و نیاز به sync لحظه‌ای نداری → Uncontrolled بهتره.

---

## 6️⃣ مثال مقایسه‌ای کوتاه

🔹 Controlled:

```jsx
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

🔹 Uncontrolled:

```jsx
<input ref={inputRef} />
```

---

اگه بخوای می‌تونم همین الان برات یک **فرم کامل** درست کنم که هر دو روش رو کنار هم نشون بده تا تفاوتشون رو کاملاً با چشم ببینی.
این خیلی کمک می‌کنه تو ذهنت جا بیفته.

---

---

عالی 😄
بیا یک فرم بسازیم که **هم Controlled** باشه هم **Uncontrolled** تا تفاوتش رو واضح ببینی.

---

## 📌 کد مقایسه Controlled vs Uncontrolled

```jsx
import { useState, useRef } from "react";

export default function ControlledVsUncontrolled() {
  // 📍 Controlled
  const [nameControlled, setNameControlled] = useState("");

  // 📍 Uncontrolled
  const nameUncontrolledRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    Controlled Name: ${nameControlled}
    Uncontrolled Name: ${nameUncontrolledRef.current.value}
    `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Input</h2>
      <input
        type="text"
        value={nameControlled}
        onChange={(e) => setNameControlled(e.target.value)}
        placeholder="Controlled name"
      />
      <p>🔹 مقدار در State ذخیره شده: {nameControlled}</p>

      <h2>Uncontrolled Input</h2>
      <input
        type="text"
        ref={nameUncontrolledRef}
        placeholder="Uncontrolled name"
      />
      <p>🔹 مقدار مستقیم از DOM گرفته میشه</p>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 📍 توضیح عملکرد کد

1. **Controlled** → فیلد اول (`nameControlled`)

   - هر تغییری با `setNameControlled` به state میره
   - مقدار همیشه از state میاد (`value={nameControlled}`)
   - توی UI لحظه‌ای نشون داده میشه

2. **Uncontrolled** → فیلد دوم (`nameUncontrolledRef`)

   - React فقط یک ref به این input داره
   - مقدار واقعی داخل DOM ذخیره شده
   - وقتی Submit میشه، از `nameUncontrolledRef.current.value` مقدار رو می‌گیریم

---

💡 وقتی این رو اجرا کنی و توی هر دو فیلد بنویسی،
می‌بینی که **Controlled** بلافاصله مقدار رو زیر input نشون میده، ولی **Uncontrolled** فقط وقتی Submit بزنی مقدارش گرفته میشه.

---

---

عالی 😄
بیا یک فرم بسازیم که **هم Controlled** باشه هم **Uncontrolled** تا تفاوتش رو واضح ببینی.

---

## 📌 کد مقایسه Controlled vs Uncontrolled

```jsx
import { useState, useRef } from "react";

export default function ControlledVsUncontrolled() {
  // 📍 Controlled
  const [nameControlled, setNameControlled] = useState("");

  // 📍 Uncontrolled
  const nameUncontrolledRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    Controlled Name: ${nameControlled}
    Uncontrolled Name: ${nameUncontrolledRef.current.value}
    `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Input</h2>
      <input
        type="text"
        value={nameControlled}
        onChange={(e) => setNameControlled(e.target.value)}
        placeholder="Controlled name"
      />
      <p>🔹 مقدار در State ذخیره شده: {nameControlled}</p>

      <h2>Uncontrolled Input</h2>
      <input
        type="text"
        ref={nameUncontrolledRef}
        placeholder="Uncontrolled name"
      />
      <p>🔹 مقدار مستقیم از DOM گرفته میشه</p>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 📍 توضیح عملکرد کد

1. **Controlled** → فیلد اول (`nameControlled`)

   - هر تغییری با `setNameControlled` به state میره
   - مقدار همیشه از state میاد (`value={nameControlled}`)
   - توی UI لحظه‌ای نشون داده میشه

2. **Uncontrolled** → فیلد دوم (`nameUncontrolledRef`)

   - React فقط یک ref به این input داره
   - مقدار واقعی داخل DOM ذخیره شده
   - وقتی Submit میشه، از `nameUncontrolledRef.current.value` مقدار رو می‌گیریم

---

💡 وقتی این رو اجرا کنی و توی هر دو فیلد بنویسی،
می‌بینی که **Controlled** بلافاصله مقدار رو زیر input نشون میده، ولی **Uncontrolled** فقط وقتی Submit بزنی مقدارش گرفته میشه.

---

---

باشه، این قسمت یه نکته مهم داره که خیلی توی فرم‌ها استفاده می‌شه.

```js
[e.target.name]: e.target.value
```

این **Bracket Notation** در جاوااسکریپت هست.

---

### قدم‌به‌قدم

فرض کن توی این input داری تایپ می‌کنی:

```jsx
<input name="username" value={formValues.username} onChange={handleChange} />
```

وقتی کاربر توش چیزی می‌نویسه:

- `e.target.name` = `"username"`
- `e.target.value` = مقداری که تایپ کرده، مثلا `"mahdi"`

---

### نقش براکت‌ها `[ ]`

وقتی می‌خوای اسم **کلید یک آبجکت** رو به صورت **دینامیک** (پویا) مشخص کنی، باید از براکت استفاده کنی.

مثلا:

```js
let key = "username";
let obj = { [key]: "mahdi" };
console.log(obj); // { username: "mahdi" }
```

---

### در کدت

اینجا:

```js
setFormValues((prev) => ({
  ...prev,
  [e.target.name]: e.target.value,
}));
```

- `...prev` یعنی مقادیر قبلی فرم رو نگه دار (برای اینکه بقیه فیلدها پاک نشن).
- `[e.target.name]` یعنی کلیدی که اسمش همون name این input هست رو پیدا کن.
- `= e.target.value` یعنی مقدار جدید اون کلید رو بگذار همون چیزی که کاربر تایپ کرده.

---

### مثال واقعی از اجرای این کد

فرض کن فرم اینجوریه:

```js
formValues = { username: "", password: "" };
```

و کاربر توی input با name="password" می‌نویسه `"1234"`:

بعد از `handleChange`:

```js
setFormValues((prev) => ({
  ...prev, // { username: "", password: "" }
  ["password"]: "1234", // اینجا name فیلد از input گرفته میشه
}));
// نتیجه: { username: "", password: "1234" }
```

---

یعنی این کار باعث می‌شه **همه inputها با یک تابع مشترک آپدیت بشن** چون `name` تعیین می‌کنه کدوم مقدار باید تغییر کنه.

---

---

تو جاوااسکریپت و تایپ‌اسکریپت این علامت سؤال در
`nameRef.current?.value`
بهش میگن **Optional chaining operator (`?.`)**.

کارش اینه که قبل از دسترسی به یک property، بررسی می‌کنه که مقدار قبل از اون `null` یا `undefined` نباشه.

---

### مثال ساده

فرض کن داریم:

```js
let user = null;
console.log(user.name); // ❌ خطا: نمی‌توان به name از null دسترسی داشت
```

با optional chaining:

```js
let user = null;
console.log(user?.name); // ✅ undefined برمی‌گردونه، بدون خطا
```

---

### در مورد `nameRef.current?.value`

در اینجا:

- `nameRef.current` ممکنه **هنوز مقدار نگرفته باشه** (قبل از اینکه input توی DOM رندر بشه)
- اگه مستقیم بنویسی `nameRef.current.value` و مقدارش null باشه، برنامه خطا میده.
- وقتی `?.` بزاری:

  - اگه `nameRef.current` وجود داشته باشه → میره سراغ `.value`
  - اگه وجود نداشته باشه → همون جا `undefined` برمی‌گردونه و ادامه نمی‌ده.

---

### به زبان خودمونی

میگه:

> «اگه `current` خالی نبود، برو سراغ `.value`، وگرنه بی‌خیالش شو و undefined بده.»

---

---
