## Memo (React.memo)

هربار که یک کامپوننت Rerender می‌شود، کامپوننت هایی که به عنوان Children استفاده کرده است نیز Rerender میشوند، حتی اگر props که به آنها فرستاده است تغییر نکرده باشند.
حال به کمک `Memo` میتوان جلوی این اتفاق را گرفت.

---

عالی 😄، پس بیاییم از صفر تا صد **`React.memo`** را بررسی کنیم. من کامل و قدم‌به‌قدم توضیح می‌دهم، همراه با مثال‌های ساده و نکات حرفه‌ای.

---

## 1️⃣ مفهوم اصلی `React.memo`

`React.memo` یک **Higher-Order Component (HOC)** است که برای **بهینه‌سازی عملکرد کامپوننت‌های تابعی (functional components)** استفاده می‌شود.

### هدف:

- جلوگیری از **re-render غیرضروری** کامپوننت‌ها وقتی props آنها تغییر نکرده‌اند.
- مخصوصاً مفید وقتی کامپوننت **سنگین** است یا **رندرهای زیادی** در parent اتفاق می‌افتد.

---

## 2️⃣ نحوه کار

وقتی یک کامپوننت با `React.memo` پیچیده می‌شود:

```js
const MyComponent = React.memo(function MyComponent({ name }) {
  console.log("rendering MyComponent");
  return <div>{name}</div>;
});
```

- React به صورت داخلی **props را shallow compare** می‌کند.
- اگر props همان props قبلی باشند → کامپوننت **re-render نمی‌شود**.
- اگر props تغییر کند → کامپوننت **render می‌شود**.

> ⚠️ توجه: `shallow compare` یعنی فقط **مقایسه مرجع (reference) برای objectها و arrayها**.
> اگر props یک object یا array باشد و محتوای آن تغییر نکرده اما مرجع جدید ساخته شده باشد → کامپوننت باز هم render می‌شود.

---

## 3️⃣ مثال ساده

```js
import React, { useState } from "react";

const Child = React.memo(({ text }) => {
  console.log("Child rendered");
  return <div>{text}</div>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setText(text + "!")}>Change Text</button>
      <h3>Count: {count}</h3>
      <Child text={text} />
    </div>
  );
}
```

### رفتار:

- وقتی روی **Increment Count** کلیک می‌کنی:

  - `App` re-render می‌شود.
  - چون `text` تغییر نکرده، `Child` **render نمی‌شود** → "Child rendered" در console چاپ نمی‌شود.

- وقتی روی **Change Text** کلیک می‌کنی:

  - `text` تغییر کرده → `Child` render می‌شود.

✅ این دقیقاً همان چیزی است که `React.memo` برای آن ساخته شده.

---

## 4️⃣ نکات مهم

1. **فقط برای propsها کار می‌کند**:

   - اگر کامپوننت به state داخلی خودش وابسته باشد، `React.memo` آن state را بهینه نمی‌کند.

2. **Shallow comparison**:

   - برای propsهای primitive (string, number, boolean) عالی است.
   - برای object یا array، اگر مرجع جدید باشد حتی بدون تغییر محتوا، re-render رخ می‌دهد.

3. **می‌توان یک تابع custom برای مقایسه نوشت**:

```js
const Child = React.memo(
  ({ items }) => {
    console.log("Child rendered");
    return <div>{items.length} items</div>;
  },
  (prevProps, nextProps) => {
    // فقط وقتی طول آرایه تغییر کرده render شود
    return prevProps.items.length === nextProps.items.length;
  }
);
```

---

## 5️⃣ چه موقع نباید از `React.memo` استفاده کرد

- اگر کامپوننت **خیلی سبک است** → overhead مقایسه props گاهی بیشتر از render خود کامپوننت است.
- وقتی props **هر بار یک object/array جدید ساخته می‌شوند** → memo کمکی نمی‌کند مگر از `useMemo` یا `useCallback` استفاده کنید.

---

## 6️⃣ نکته حرفه‌ای: ترکیب با `useCallback` و `useMemo`

مثال:

```js
import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []); // بدون تغییر، همیشه یک function

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child onClick={handleClick} />
    </div>
  );
}
```

- بدون `useCallback`، `handleClick` هر render جدید **یک تابع جدید** می‌سازد → `Child` باز هم render می‌شود.
- با `useCallback`، مرجع تابع ثابت می‌ماند → `Child` فقط وقتی واقعاً نیاز باشد render می‌شود.

---

---

کدی که نوشتی نشان می‌دهد `memo` به تنهایی جلوی رندر مجدد را نمی‌گیرد. دلیلش این است که **شیء `text` در هر رندر Reference یک مرجع (reference) جدید می‌سازد**:

```jsx
const text = { name: "Child4" };
```

هر بار که Reference رندر شود، این شیء دوباره ساخته می‌شود و حتی اگر مقدار داخلش تغییر نکرده باشد، از نظر جاوااسکریپت یک **آدرس جدید در حافظه** دارد.
به همین دلیل `memo` تشخیص می‌دهد که props عوض شده و Child4 دوباره رندر می‌شود.

---

### **راه‌حل**

از `useMemo` برای ساختن شیء استفاده کن تا در هر رندر جدید ساخته نشود:

```jsx
import { useState, useMemo } from "react";
import Child4 from "./Child4";

export default function Reference() {
  const [count, setCount] = useState(0);

  const text = useMemo(() => ({ name: "Child4" }), []);

  return (
    <div>
      <h2>Child4 with Memo</h2>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h3>Count: {count}</h3>

      <Child4 text={text} />
      <hr className="hr1" />
    </div>
  );
}
```

---

### **نکته مهم**

- اگر `text` یک مقدار ساده مثل string یا number بود، نیازی به `useMemo` نداشتی.
- مشکل فقط وقتی است که props یک شیء یا آرایه است چون هر بار یک reference جدید می‌گیرد.

---

دقیقاً نکته همین‌جاست:

وقتی از **`useState`** استفاده می‌کنی:

```jsx
const [text, setText] = useState({ name: "Child4" });
```

- شیء `text` **فقط یک‌بار** هنگام mount شدن کامپوننت ساخته می‌شود.
- تا وقتی که **`setText`** فراخوانی نشود، ری‌اکت **همان reference اولیه** را در state نگه می‌دارد.
- بنابراین در رندرهای بعدی، مقدار props برای `Child4` **عوض نشده** و `React.memo` تشخیص می‌دهد که نیازی به رندر مجدد نیست.

---

اما در حالت قبلی:

```jsx
const text = { name: "Child4" };
```

- در هر رندر یک **شیء جدید** ساخته می‌شود.
- حتی اگر مقدار داخلش همان باشد، reference عوض شده و React.memo فکر می‌کند props تغییر کرده‌اند.

---

### **نتیجه**

- `useState` → مقدار را در حافظه نگه می‌دارد و reference ثابت می‌ماند تا زمانی که تغییر دهی.
- تعریف مستقیم شیء داخل فانکشن → در هر رندر یک reference جدید می‌سازد.

---

---

در این کد:

```jsx
const text = { name: "Child4" };
.
.
.
<Child4 text={text.name} />
```

- `text.name` یک **primitive** (رشته `"Child4"`) است.
- وقتی props به صورت **primitive** پاس داده شود (string, number, boolean, null, undefined)،
  React.memo می‌تواند مقدار را به‌درستی مقایسه کند چون مقایسه‌ی primitive ها با `===` انجام می‌شود.

---

### نتیجه

- با وجود اینکه خود `text` یک **object** جدید در هر رندر ساخته می‌شود،
  اما چون به `Child4` مقدار `text.name` (که string است) پاس داده می‌شود،
  **هیچ رندر اضافی** اتفاق نمی‌افتد تا وقتی که مقدار رشته تغییر نکند.

---

### خلاصه

- اگر prop مستقیماً primitive باشد → مقایسه راحت و memo خوب عمل می‌کند.
- اگر prop reference type باشد (object, array, function) → نیاز به useMemo یا useState برای تثبیت reference داریم.

---

---

```jsx
import { useState } from "react";
import Child4 from "./Child4";

const text = { name: "Child4" };

export default function Reference() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Memo with Reference types</h2>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h3>Count: {count}</h3>

      <Child4 text={text} />
      <hr className="hr1" />
    </div>
  );
}
```

اینجا تفاوت مهمی هست:

```jsx
const text = { name: "Child4" };
```

- این شیء **خارج از کامپوننت** تعریف شده.
- در نتیجه فقط یک‌بار ساخته می‌شود و بین تمام رندرها **همان مرجع (reference)** حفظ می‌شود.
- وقتی `count` تغییر می‌کند، کامپوننت `Reference` دوباره رندر می‌شود ولی **متغیر text ثابت است** و به همان object اشاره می‌کند.

---

### نتیجه

- `Child4` دوباره رندر **نخواهد** شد (تا زمانی که props دیگری تغییر نکند).
- چون `React.memo` هنگام مقایسه می‌بیند که `text` همان object قبلی است (`===` برقرار است).

---

### نکته حرفه‌ای

- اگر prop reference-type داخل بدنه‌ی کامپوننت ساخته شود → هر بار object جدید می‌سازد و memo بی‌اثر می‌شود.
- اگر بیرون تعریف شود یا با `useMemo` تثبیت شود → memo درست کار می‌کند.

---

پس در مجموع یا باید متغیر خارج از کامپوننت تعریف شده باشد ، یا اگر داخل کامپوننت هست primitive باشد ، یا اگر داخل و reference است، در useState یا useMemo تعریف شده باشد تا memo بدرستی اثر کند و مانع رندر اضافه شود

البته اگر متغیر ما reference باشد، و نیز به پارامتر یا استیتی از کامپوننت ما نیاز داشته باشد ، باید حتما داخل کامپوننت و از طریق useMemo تعریف شود
مثلا اگر یکی از ولیو‌ های شی ما از استیت بیاید.

---

---
