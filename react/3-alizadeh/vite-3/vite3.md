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

![Hook Flow](https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png)

---

✅ در فایل `main.js`، کامپوننت `<React.StrictMode>` حذف شد.  
این یعنی اپلیکیشن دیگر در حالت StrictMode اجرا نمی‌شود و برخی هشدارها یا بررسی‌های اضافی که React در توسعه نشان می‌دهد، فعال نخواهند بود.

---

عالیه 👍
بذار سه‌تا حالت رو از اول مرتب و مقایسه‌ای توضیح بدم. این یکی از اون نکات مهم **لایف‌سایکل useState** هست که خیلی‌ها اولش قاطی می‌کنن.

---

## 🟢 حالت 1:

```jsx
const [count, setCount] = useState(getInitialCount());
```

- اینجا پرانتز گذاشتی → یعنی تابع **بلافاصله** اجرا میشه.
- پس هر بار که کامپوننت render بشه، اول `getInitialCount()` صدا زده میشه و نتیجه‌ش به `useState` داده میشه.
- اما ⚠️ نکته: مقدار state فقط همون دفعه اول ذخیره میشه، دفعه‌های بعد ری‌اکت مقدار state قبلی رو نگه میداره.
- با این وجود چون آرگومان باید حساب بشه، تابع هر بار اجرا میشه.

👉 خروجی console:

- بار اول:

  ```
  Init
  render
  ```

- بعد از هر کلیک:

  ```
  Init
  render
  ```

---

## 🟢 حالت 2:

```jsx
const [count, setCount] = useState(getInitialCount);
```

- اینجا پرانتز نداری → یعنی داری خود **تابع** رو میدی به `useState`.
- ری‌اکت میگه: اگه آرگومان یه تابع بود، من فقط **بار اول (initial render)** اون رو اجرا می‌کنم.
- بعدش برای رندرهای بعدی دیگه تابع رو صدا نمی‌زنه.

👉 خروجی console:

- بار اول:

  ```
  Init
  render
  ```

- بعد از هر کلیک:

  ```
  render
  ```

---

## 🟢 حالت 3:

```jsx
const [count, setCount] = useState(() => getInitialCount());
```

- این حالت همون **lazy initializer** هست.
- فرق ظاهریش با حالت 2 اینه که اینجا توی arrow function خودت صریحاً تابع رو صدا میزنی.
- ری‌اکت این arrow function رو فقط **بار اول** اجرا می‌کنه.
- از نظر رفتار، کاملاً معادل حالت 2 هست.

👉 خروجی console:

- بار اول:

  ```
  Init
  render
  ```

- بعد از هر کلیک:

  ```
  render
  ```

---

## 📝 جدول مقایسه

| حالت | کد                                  | اجرای تابع init                    | خروجی console                                    |
| ---- | ----------------------------------- | ---------------------------------- | ------------------------------------------------ |
| 1    | `useState(getInitialCount())`       | هر بار render                      | بار اول: `Init, render` <br> بعد: `Init, render` |
| 2    | `useState(getInitialCount)`         | فقط بار اول (React خودش صدا میزنه) | بار اول: `Init, render` <br> بعد: `render`       |
| 3    | `useState(() => getInitialCount())` | فقط بار اول (lazy init)            | بار اول: `Init, render` <br> بعد: `render`       |

---

🔑 خلاصه:

- اگه مقدار اولیه ساده باشه (مثل `0` یا `"hi"`)، مستقیم می‌نویسی.
- اگه مقدار اولیه با محاسبه یا فانکشن سنگین به دست میاد (مثلاً fetch یا loop بزرگ)، باید حالت 2 یا 3 استفاده کنی تا فقط بار اول اجرا بشه و هربار render بیخودی دوباره محاسبه نشه.

---

---

سؤال خیلی خوبی پرسیدی 👌
حالا دیگه بذار از نگاه **React** (نه این کد خاص) توضیح بدم که وقتی یک کامپوننت دوباره رندر میشه چه مراحلی طی میشه و چرا اون سه حالت مختلف فرق دارن.

---

## 🔄 لایف‌سایکل فانکشن کامپوننت‌ها در React

1. **کامپوننت فانکشنیه = همون فانکشن هر بار صدا زده میشه**
   وقتی ری‌اکت تصمیم می‌گیره یک کامپوننت رو رندر کنه (چه بار اول، چه بار دوم، ...)، خیلی ساده میاد تابع اون کامپوننت رو **از اول** اجرا می‌کنه.

   یعنی:

   ```jsx
   function MyComp() {
     console.log("function body running...");
     return <div>Hi</div>;
   }
   ```

   هر بار state یا props تغییر کنه → ری‌اکت دوباره `MyComp()` رو صدا میزنه.

---

2. **useState و سایر hookها "حافظه" دارن**
   اگه ری‌اکت هر بار همه‌چیز رو از صفر اجرا کنه، هیچ stateای باقی نمی‌مونه.
   برای همین React برای هر کامپوننت یک **حافظه داخلی (state bucket)** نگه میداره.

   وقتی میگی:

   ```jsx
   const [count, setCount] = useState(0);
   ```

   - بار اول: مقدار `0` داخل حافظه ری‌اکت ذخیره میشه.
   - دفعه‌های بعد: ری‌اکت مقدار ذخیره‌شده رو برمی‌گردونه، نه اون `0` اولیه.

   👉 یعنی `useState` فقط در **mount (اولین بار)** مقدار اولیه رو استفاده میکنه، بعدش همون مقدار ذخیره شده برمی‌گرده.

---

3. **پس چرا گاهی تابع اولیه دوباره اجرا میشه؟**
   این به شکل نوشتن `useState` برمی‌گرده:

   - وقتی می‌نویسی `useState(getInitialCount())` → ری‌اکت باید **اول** اون پرانتز رو حساب کنه تا آرگومان رو بدست بیاره. پس تابع هر بار اجرا میشه (قبل از اینکه React به حافظه خودش برسونه).

   - وقتی می‌نویسی `useState(getInitialCount)` یا `useState(() => getInitialCount())` → اینجا آرگومان یک تابع هست. ری‌اکت این رو نگه می‌داره و فقط در **mount** صداش میزنه.

---

4. **چه چیز باعث re-render میشه؟**

   - تغییر state با `setState` (`setCount`, `setTodos`, ...)
   - تغییر props از والد
   - تغییر context (اگه از `useContext` استفاده کرده باشی)
   - تغییر forceUpdate (خیلی کم استفاده)

   👉 در همه این حالت‌ها، کل فانکشن کامپوننت **از اول** اجرا میشه.

---

5. **اما React باهوشه:**

   - JSX جدید رو با Virtual DOM قبلی مقایسه می‌کنه (diffing).
   - فقط بخش‌هایی از DOM واقعی (Real DOM) رو که تغییر کردن، آپدیت می‌کنه.
   - این یعنی هر بار فانکشن دوباره صدا زده میشه، ولی **همه DOM از نو ساخته نمیشه**.

---

## 🔑 مفهوم کلی

- هر بار رندر = فانکشن کامپوننت دوباره اجرا میشه.
- ولی `useState` (و سایر هوک‌ها) حافظه‌شون رو نگه می‌دارن و مقدار قبلی رو برمی‌گردونن.
- اگه مقدار اولیه `useState` رو به شکل یک **تابع بلافاصله اجراشده** بنویسی، اون تابع هر بار قبل از ذخیره خوانده میشه.
- اگه به شکل **تابع lazy** بنویسی، ری‌اکت فقط بار اول اون رو اجرا میکنه.

---

### یه تشبیه 🚀

کامپوننت رو مثل یک **ماشین حساب** در نظر بگیر:

- هر بار که میگی "حساب کن"، ماشین از اول دکمه‌ها رو فشار میده (تابع کامپوننت اجرا میشه).
- ولی `useState` مثل یک **حافظه داخلی** توی ماشین حسابه که جواب‌های قبلی رو ذخیره می‌کنه.
- حالا اگه ورودی اولیه رو با پرانتز بدی (`getInitialCount()`)، انگار هر بار قبل از استفاده از حافظه، دوباره داری محاسبه اولیه انجام میدی.
- اگه خود تابع رو بدی (`getInitialCount`)، انگار میگی "این فرمول رو فقط دفعه اول حساب کن، بعدش دیگه جواب قبلی رو از حافظه بده."

---

---

```jsx
import { useState } from "react";

export default function A9() {
  const [users, setUsers] = useState([]);

  console.log(users);

  async function loadUsers() {
    try {
      const res = await fetch("https://dummyjson.com/users");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setUsers([...data.users]);
    } catch (err) {
      console.error(err.message);
    }
  }
  loadUsers();

  return (
    <div>
      <h2>lifecycle</h2>
      <ul>
        {users.map(({ id, firstName, lastName }) => (
          <li key={id}>
            {firstName} {lastName}
          </li>
        ))}
      </ul>
      <hr className="hr1" />
    </div>
  );
}
```

خوب حالا تو این کد فاجعه ای که داره اتفاق میفته رو کامل توضیح بده , هم خود فاجعه و هم دلیل پشت پردش رو کامل

---

کاملاً درست میگی که این کد «فاجعه» است؛ بیایم دقیق و مفهومی از منظر React بازش کنیم.

# چه فاجعه‌ای رخ می‌دهد؟

1. **طوفان رندر و درخواست شبکه (request storm)**
   تو بدنه‌ی کامپوننت، `loadUsers()` را مستقیم صدا زده‌ای. هر رندر ⇒ `loadUsers()` دوباره اجرا ⇒ یک `fetch` جدید.
   وقتی پاسخ برگرده، `setUsers(...)` اجرا میشه ⇒ **رندر جدید** ⇒ دوباره `loadUsers()` ⇒ **باز هم fetch** … و این چرخه همین‌طور ادامه پیدا می‌کنه. نتیجه‌اش: ده‌ها/صدها درخواست بیهوده به API.

2. **Race condition (حالت سبقت پاسخ‌ها)**
   چون هر رندر یک درخواست تازه می‌فرسته، ممکنه پاسخِ درخواست جدید **قبل** از پاسخِ قبلی برسه یا برعکس. در این حالت UI ممکنه با **داده‌ی قدیمی‌تر** به‌روزرسانی بشه (last write wins ولی لزوماً آخرین داده «جدیدترین» نیست).

3. **مصرف منابع + تجربه‌ی کاربری بد**
   CPU، شبکه، باتری و سهمیه‌ی API هدر میره، احتمال rate-limit و ارورهای عجیب بالا میره.

4. **Strict Mode بدترش می‌کند (Dev)**
   در React 18، تو حالت توسعه با `<React.StrictMode>`، بعضی چیزها (از جمله mount اولیه) **عمداً دو بار** اجرا می‌شن تا سایدافکت‌های ناایمن لو برن. یعنی حتی اگر فکر کنی «یک‌بار» صدا می‌زنم، در Dev عملاً **دو بار** صدا می‌خوره؛ پس درخواست‌ها دو برابر هم می‌شن.

---

# چرا این اتفاق می‌افتد؟ (منطق پشت پرده‌ی React)

- **رندر باید «خالص» (pure) باشد.**
  فانکشن کامپوننت هر بار که props/state/context عوض میشه، **از اول** اجرا میشه. بدنه‌ی کامپوننت نباید سایدافکت داشته باشه (مثل fetch، تایمر، دست‌کاری DOM…).
- **سایدافکت‌ها باید بعد از commit انجام شوند.**
  React دو فاز دارد:

  - _Render phase_: فقط محاسبه‌ی JSX؛ باید قابل تکرار و بدون اثر جانبی باشد.
  - _Commit phase_: اعمال تغییرات روی DOM؛ **اینجا**ست که `useEffect` اجرا می‌شود و جای درستِ کارهای جانبی است.

- وقتی `loadUsers()` را **در render phase** صدا می‌زنی، عملاً قانون «بدون سایدافکت» را می‌شکنی. بعد هم `setUsers` که می‌آد، re-render می‌سازی و حلقه تشکیل میشه.

---

# اصلاح درست (الگوی استاندارد)

سایدافکتِ fetch را به `useEffect` منتقل کن تا **بعد از commit** و با **کنترل دفعات اجرا** انجام شود.

```jsx
import { useEffect, useRef, useState } from "react";

export default function A9() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      try {
        const res = await fetch("https://dummyjson.com/users", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setUsers(data.users); // نیازی به اسپرد نیست
      } catch (err) {
        // اگر اثر لغو شد، ارور AbortError را نادیده بگیر
        if (err.name !== "AbortError") console.error(err.message);
      }
    }

    loadUsers();
    // cleanup: اگر کامپوننت قبل از اتمام fetch unmount شد یا effect دوباره اجرا شد، درخواست را لغو کن
    return () => controller.abort();
  }, []); // [] یعنی فقط روی mount اجرا شود
}
```

## نکات تکمیلی

- **چرا AbortController؟**
  اگر کامپوننت قبل از رسیدن پاسخ unmount شود، با abort جلوی setState روی کامپوننتِ از بین رفته را می‌گیری و نشت حافظه/هشدارها را کاهش می‌دهی.
- **StrictMode در Dev**
  حتی با `[]`، در توسعه ممکن است اثرِ mount **دو بار** اجرا شود. این رفتار در Production وجود ندارد. اگر واقعاً لازم شد در Dev فقط یک‌بار fetch شود، می‌توانی از یک فلگ ref استفاده کنی:

  ```jsx
  const didFetch = useRef(false);
  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    // ... fetch
  }, []);
  ```

  ولی معمولاً تحملِ دوبار fetch در Dev قابل قبول‌تر از افزودن منطق اضافی است.

---

# جمع‌بندیِ مفهومی

- بدنه‌ی کامپوننت باید **خالص** باشد؛ هیچ سایدافکتی (fetch/تایمر/…) در آن.
- هر بار رندر یعنی **فانکشن دوباره اجرا می‌شود**؛ پس هر چیزی در بدنه بگذاری ممکن است بارها اجرا شود.
- سایدافکت‌ها را همیشه در `useEffect` (یا `useLayoutEffect` در موارد خاص) انجام بده تا **پس از commit** و با **کنترل تعداد اجرا** انجام شوند.
- با `AbortController` و/یا الگوهای کنترلی از **race** و **memory leak** جلوگیری کن.

---

آها گرفتم ✅  
بذار نسخه‌ی **خیلی ساده‌تر** رو برات بنویسم، بدون اون داستان‌های اضافی مثل `AbortController`.

---

### نسخه‌ی ساده فقط با `useEffect` 👇

```jsx
import { useState, useEffect } from "react";

export default function A9() {
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("https://dummyjson.com/users");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setUsers(data.users);
      } catch (err) {
        console.error(err.message);
      }
    }

    loadUsers();
  }, []); // [] یعنی فقط بار اول (mount) اجرا شود

  return (
    <div>
      <h2>lifecycle</h2>
      <ul>
        {users.map(({ id, firstName, lastName }) => (
          <li key={id}>
            {firstName} {lastName}
          </li>
        ))}
      </ul>
      <hr className="hr1" />
    </div>
  );
}
```

---

### چرا این درست کار می‌کنه؟

1. `useEffect(() => {...}, [])` یعنی:

   - این تابع فقط **بعد از اولین بار رندر شدن کامپوننت** اجرا بشه.
   - پس دیگه مثل قبل، هر بار رندر جدید درخواست fetch نمی‌فرسته.

2. `loadUsers()` داخل `useEffect` تعریف و صدا زده میشه.

   - اینطوری `fetch` فقط یک بار انجام میشه (زمانی که کامپوننت mount میشه).

3. وقتی داده‌ها رسیدن، `setUsers` مقدار state رو تغییر میده ⇒ ری‌اکت دوباره کامپوننت رو رندر می‌کنه ⇒ لیست users روی صفحه نمایش داده میشه.

---

### فرقش با کد اولیه‌ی تو

- توی کد قبلی: `loadUsers()` مستقیم توی بدنه‌ی کامپوننت بود ⇒ هر رندر یک fetch جدید ⇒ حلقه بی‌نهایت.
- توی این کد: `loadUsers()` فقط یک بار توی `useEffect` اجرا میشه ⇒ هیچ حلقه‌ی بی‌نهایتی وجود نداره.

---

---

خیلی خوب که پرسیدی 👌
بیایم قدم به قدم خیلی ساده و مفهومی توضیح بدیم:

---

## ۱. اول بفهمیم "cleanup" یعنی چی؟

در React وقتی از `useEffect` استفاده می‌کنی، می‌تونی یک **تابع برگشتی** (return function) هم بدی. این تابع بهش میگن **cleanup function**.

یعنی:

```jsx
useEffect(() => {
  console.log("effect اجرا شد");

  return () => {
    console.log("cleanup اجرا شد");
  };
}, []);
```

- وقتی کامپوننت **از بین بره (unmount بشه)** → cleanup اجرا میشه.
- یا وقتی **قبل از اجرای دوباره‌ی effect** ری‌اکت بیاد effect قبلی رو پاک کنه → cleanup اجرا میشه.

---

## ۲. چرا در fetch به cleanup نیاز داریم؟

فرض کن:

- کامپوننت `A9` میاد یک fetch می‌زنه (مثلاً ۵ ثانیه طول می‌کشه).
- بعد از ۱ ثانیه، کاربر میره به صفحه دیگه → `A9` از بین میره (unmount).
- ولی درخواست fetch هنوز توی راهه!
- وقتی پاسخ برگرده، `setUsers(...)` صدا زده میشه. مشکل اینجاست که این کامپوننت دیگه وجود نداره!

🔴 نتیجه: ارور می‌گیری (`Warning: Can't perform a React state update on an unmounted component`).

---

## ۳. راه حل → cleanup با **AbortController**

اینجاست که میایم از `AbortController` استفاده می‌کنیم:

- یک controller می‌سازیم.
- درخواست fetch رو با اون controller می‌فرستیم.
- توی cleanup، `controller.abort()` رو صدا می‌زنیم تا درخواست نیمه‌کاره **لغو بشه**.

مثال:

```jsx
useEffect(() => {
  const controller = new AbortController();

  async function loadUsers() {
    try {
      const res = await fetch("https://dummyjson.com/users", {
        signal: controller.signal,
      });
      const data = await res.json();
      setUsers(data.users);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error(err.message);
      }
    }
  }

  loadUsers();

  // cleanup
  return () => controller.abort();
}, []);
```

---

## ۴. جمع‌بندی ساده

- **بدون cleanup**: اگه کامپوننت سریع unmount بشه، ممکنه `setState` روی چیزی که دیگه وجود نداره اجرا بشه → خطا یا memory leak.
- **با cleanup**: وقتی کامپوننت نابود شد، درخواست رو هم لغو می‌کنی → هیچ اتفاق بدی نمیفته.

---

👉 می‌خوای من یه مثال خیلی ساده عملی بزنم (با `setTimeout`) تا نشون بدم فرق **بدون cleanup** و **با cleanup** چی میشه؟

---عالی 😄
می‌خوایم یه مثال خیلی ساده با `setTimeout` بسازیم تا رفتار **بدون cleanup** و **با cleanup** رو ببینی، بدون اینکه به fetch یا شبکه کاری داشته باشیم.

---

## مثال عملی بدون cleanup

```jsx
import { useState, useEffect } from "react";

export default function TimerExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // شبیه fetch که طول میکشه، یک تایمر 3 ثانیه‌ای داریم
    setTimeout(() => {
      setCount(1); // state تغییر می‌کنه
      console.log("State updated!");
    }, 3000);
  }, []);

  return <div>Count: {count}</div>;
}
```

### رفتار:

1. کامپوننت mount میشه → تایمر شروع میشه.
2. اگر قبل از ۳ ثانیه کاربر کامپوننت رو از بین ببره (unmount) → تایمر هنوز اجرا میشه.
3. وقتی تایمر اجرا میشه، `setCount` صدا زده میشه → **ارور** میگیری:

```
Warning: Can't perform a React state update on an unmounted component
```

---

## مثال عملی با cleanup

```jsx
import { useState, useEffect } from "react";

export default function TimerExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(1);
      console.log("State updated!");
    }, 3000);

    // cleanup function
    return () => {
      clearTimeout(timer);
      console.log("Cleanup: timer cleared");
    };
  }, []);

  return <div>Count: {count}</div>;
}
```

### رفتار:

1. کامپوننت mount میشه → تایمر شروع میشه.
2. اگر قبل از ۳ ثانیه کامپوننت unmount بشه → cleanup اجرا میشه → تایمر لغو میشه (`clearTimeout`).
3. دیگر هیچ ارور یا هشدار دریافت نمی‌کنیم، چون state روی کامپوننتی که وجود نداره تغییر نمی‌کنه.

---

### 🔑 نکته اصلی:

- هر چیزی که **بعد از مدتی یا غیرهمزمان اجرا میشه** (مثل fetch، setTimeout، setInterval) → **ممکنه بعد از unmount هم اجرا بشه**.
- همیشه با **cleanup function** آن را لغو کن تا از خطا و نشت حافظه جلوگیری بشه.

---

---

آره، الان `console.log(users)` **دو بار اجرا میشه**. بیایم دقیق و مفهومی از پشت پرده‌ی React توضیحش بدیم:

---

## ۱️⃣ چرا دوبار اجرا میشه؟

### مرحله اول: اولین رندر (mount)

1. کامپوننت `A9` **اولین بار** اجرا میشه → تابع کامپوننت run میشه.
2. `useState([])` مقدار اولیه (`[]`) رو برمی‌گردونه → `users = []`.
3. `console.log(users)` اجرا میشه → **چاپ `[]`**.
4. JSX ساخته میشه و DOM render میشه.
5. بعد React میره و effect `useEffect(() => {...}, [])` رو اجرا میکنه → `loadUsers()` صدا زده میشه.
6. fetch شروع میشه اما هنوز پاسخی برنگشته، state تغییر نکرده، پس رندر جدید نداریم.

---

### مرحله دوم: وقتی fetch تموم میشه

1. بعد از چند میلی‌ثانیه، پاسخ fetch میاد → `setUsers([...data.users])` اجرا میشه.
2. **setState باعث re-render میشه** → کل تابع کامپوننت دوباره اجرا میشه.
3. حالا `users` مقدار جدیدش (`data.users`) است.
4. `console.log(users)` دوباره اجرا میشه → این بار **چاپ array واقعی کاربران**.
5. JSX دوباره ساخته و DOM با داده جدید آپدیت میشه.

---

## ۲️⃣ نکات پشت پرده

- **React کامپوننت فانکشنیه = هر رندر = اجرای کل تابع**
  هر بار state تغییر کنه یا props عوض بشه → React دوباره تابع کامپوننت رو run میکنه.
- **useState فقط مقدار state رو نگه می‌داره**
  وقتی re-render رخ میده، مقدار جدید `users` برگردونده میشه، ولی مقدار اولیه `[]` دیگه استفاده نمیشه.
- **useEffect با \[]**
  این effect فقط بار اول mount اجرا میشه، ولی وقتی `setUsers` state رو تغییر میده → re-render جدید رخ میده.
- بنابراین `console.log(users)` در **هر رندر** اجرا میشه → دو بار در Dev/Production.

---

### ۳️⃣ نتیجه

- **بار اول:** `console.log([])` → state اولیه
- **بار دوم:** `console.log([...users fetched])` → state بعد از fetch

💡 نکته: این رفتار طبیعی React هست و نشونه‌ی درست کار کردن state و re-render است.

---

---

عالی، این کد یک **مثال کلاسیک از dependent `useEffect`** هست. بذار مفهومی توضیح بدم چه اتفاقی میفته و نکات پشت پرده رو روشن کنیم.

---

## ۱️⃣ ساختار کلی

- دو state داریم:

  ```js
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(5);
  ```

- `useEffect` وابسته به `[count]` هست:

  ```js
  useEffect(() => { ... }, [count]);
  ```

  یعنی **هر بار که `count` تغییر کنه**، این effect اجرا میشه.

- در effect داریم `fetch` که تعداد کاربران رو بر اساس `count` میاره و در state `users` ذخیره می‌کنه.

- دکمه `Add Users` باعث میشه `count` پنج واحد زیاد بشه → trigger شدن effect.

---

## ۲️⃣ رفتار پشت پرده React

### مرحله اول: mount

1. کامپوننت mount میشه.
2. stateها مقدار اولیه‌شون دارن: `users = []` و `count = 5`.
3. JSX ساخته میشه و DOM render میشه.
4. React بعد از commit phase، `useEffect` رو اجرا می‌کنه → `loadUsers()` صدا زده میشه.
5. fetch اجرا میشه، وقتی پاسخ رسید → `setUsers([...data.users])` صدا زده میشه → **re-render** اتفاق میفته.
6. دوباره JSX ساخته میشه، این بار با لیست کاربران واقعی.

---

### مرحله دوم: هر بار count تغییر کنه

1. کاربر روی دکمه کلیک می‌کنه → `setCount((c) => c + 5)` اجرا میشه.
2. state `count` تغییر می‌کنه → **re-render** اتفاق میفته.
3. تابع کامپوننت دوباره اجرا میشه، JSX با مقدار جدید `count` ساخته میشه.
4. چون dependency array `[count]` تغییر کرده، React effect رو دوباره اجرا می‌کنه → `loadUsers()` دوباره fetch می‌کنه و `users` آپدیت میشه.
5. وقتی `setUsers` اجرا شد → دوباره re-render برای آپدیت لیست.

💡 نکته: `users` تغییر کرده ولی effect دوباره اجرا نمیشه چون `[count]` تغییر نکرده.

---

## ۳️⃣ جمع‌بندی رفتار

| رویداد              | چه اتفاقی میفته                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------- |
| Mount اولیه         | effect اجرا میشه، fetch میره، `users` آپدیت میشه، re-render بعدی                             |
| کلیک دکمه           | `count` تغییر → re-render → effect دوباره اجرا → fetch جدید → `users` آپدیت → re-render جدید |
| تغییر state `users` | فقط re-render اتفاق میفته، effect دوباره اجرا نمیشه چون `[count]` تغییر نکرده                |

---

### ✅ نکته مفهومی

- `useEffect(..., [deps])` = اجرای **سایدافکت وابسته به state/props مشخص**
- تغییر state که در `[deps]` نیست → effect اجرا نمی‌شه
- تغییر state که در `[deps]` هست → effect دوباره اجرا میشه → fetch یا هر سایدافکت مجدد

---

---

![Hook Flow](https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png)

#### همنطور که از تصویر پیداست (بخش های مربوط به Effects , دو لاین آخر):

- run افکت (بدنه useEffect) صرفا در mount کامپوننت اتفاق میافتد
- در update اول cleanup افکت (بخش return در useEffect) و سپس run افکت اتفاق میافتد
- و در آخر در unmount , فقط cleanup اتفاق میافتد

#### مثال :

```jsx
import { useEffect, useState } from "react";

export default function A11() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Render");

    return () => {
      console.log("Clean-Up");
    };
  }, [count]);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <hr className="hr1" />
    </div>
  );
}
```
