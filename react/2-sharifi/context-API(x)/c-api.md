کد `App` که دادی خیلی خوب ترکیب دو روش متفاوت پاس دادن داده در React رو نشون میده:

- یکی با **props معمولی** (Parent1)
- یکی با **Context API** (Parent2 در داخل Provider)

اجازه بده کامل توضیح بدم:

---

### بخش اول — پروپس معمولی (Normal Props):

```jsx
let isLogin1 = true;
let browser1 = "Edge";

return (
  <div>
    <h1>with normal props:</h1>
    <hr />
    <Parent1 isLogin1={isLogin1} browser1={browser1} />
    <hr className="hr1" />
```

- اینجا مقدارهای `isLogin1` و `browser1` به صورت مستقیم تعریف شدن.
- این مقدارها به `Parent1` که احتمالا از props استفاده می‌کنه پاس داده میشن.
- این روشی کلاسیک و ساده برای پاس دادن داده‌ها از والد به فرزند تو React هست.
- به عنوان مثال `Parent1` می‌تونه این مقدارها رو بگیره و به فرزندانش (مثلا `GrandChild1`) منتقل کنه.

---

### بخش دوم — Context API:

```jsx
<AppDataProvider>
  <h1>with context api:</h1>
  <hr />
  <Parent2 />
</AppDataProvider>
```

- `AppDataProvider` یک **Context Provider** هست که داده‌ها (state یا props) رو تو خودش نگه می‌داره و به همه کامپوننت‌های فرزند در داخلش میده.
- `Parent2` کامپوننتی هست که داخل `AppDataProvider` رندر میشه و می‌تونه با `useContext(NewContext)` داده‌ها رو دریافت کنه (مثل `GrandChild2` که قبلا فرستادی).
- این روش برای انتقال داده‌های عمیق در درخت کامپوننت خیلی بهتره و نیازی به ارسال دستی props به هر لایه نیست (prop drilling حل میشه).

---

### جمع‌بندی

- `Parent1` و فرزندانش از **props معمولی** استفاده می‌کنند.
- `Parent2` و فرزندانش داده‌ها را از طریق **Context** می‌گیرند که توسط `AppDataProvider` فراهم شده.
- استفاده از Context مخصوصا وقتی مفیده که داده باید خیلی عمیق یا در بخش‌های مختلف برنامه به اشتراک گذاشته شود.
- برای داده‌های ساده و محلی، استفاده از props کماکان ساده‌تر و واضح‌تر است.

---

---

حتما! بریم سراغ **Context API در React** و توضیح کاملش.

---

## مقدمه Context API

فرض کن یه اپلیکیشن داری که داده‌ای مثل وضعیت لاگین کاربر، تم رنگ، زبان یا اطلاعات سراسری دیگه رو می‌خوای به خیلی کامپوننت‌های عمیق درخت کامپوننت‌ها بدی.

### روش معمول (props drilling)

اگر بخوای این داده رو از والد به فرزند، بعد نوه، بعد نتیجه و ... پاس بدی، باید تو هر کامپوننت به صورت دستی props منتقل کنی. این کار به مرور:

- کد پیچیده و نامرتب میشه
- کامپوننت‌های واسطه‌ای که داده رو فقط انتقال میدن، باید اضافه نوشته بشن

---

## راه حل: Context API

**Context API** یه راهکار داخلی React برای به اشتراک گذاشتن داده بین کامپوننت‌ها بدون نیاز به ارسال دستی props لایه به لایه است.

### سه بخش اصلی Context API:

1. **ساخت Context**
2. **Provider** (فراهم کننده داده)
3. **Consumer** (استفاده کننده داده)

---

### 1. ساخت Context

مثلا در فایل `NewContext.js`:

```jsx
import React, { createContext, useState } from "react";

export const NewContext = createContext();
```

- این خط یک Context جدید می‌سازد که ما اسمش را `NewContext` گذاشتیم.

---

### 2. ساخت Provider

Provider کامپوننتی است که داده را در خودش نگه می‌دارد و به همه فرزندانش درخت React می‌دهد.

مثلاً در همان `NewContext.js`:

```jsx
export function AppDataProvider({ children }) {
  const [isLogin2, setIsLogin2] = useState(true);
  const [browser2, setBrowser2] = useState("Chrome");

  const value = { isLogin2, browser2, setIsLogin2, setBrowser2 };

  return <NewContext.Provider value={value}>{children}</NewContext.Provider>;
}
```

- `AppDataProvider` یک کامپوننت است که از `useState` برای مدیریت وضعیت‌ها استفاده می‌کند.
- مقدار `value` که شامل داده‌ها و توابع تغییر state هست به Provider داده می‌شود.
- تمام کامپوننت‌هایی که داخل `AppDataProvider` رندر شوند، به این داده‌ها دسترسی دارند.

---

### 3. استفاده از داده‌ها در کامپوننت‌ها (Consumer)

برای خواندن داده‌ها در کامپوننت‌ها، دو روش داریم:

#### روش اول: هوک `useContext`

مثل کدی که قبلاً برای `GrandChild2` فرستادی:

```jsx
import { useContext } from "react";
import { NewContext } from "./NewContext";

export default function GrandChild2() {
  const data = useContext(NewContext);

  return (
    <div>
      <h4>GrandChild-2</h4>
      <h5 style={{ color: data.isLogin2 ? "green" : "red" }}>
        {data.isLogin2 ? "Welcome to site" : "Please login"}
      </h5>
      <h5>Your browser is {data.browser2}</h5>
    </div>
  );
}
```

- `useContext(NewContext)` داده داخل Provider را برمی‌گرداند.
- بعد می‌توانیم این داده را در JSX استفاده کنیم.

#### روش دوم: استفاده از Consumer

روش قدیمی‌تر (قبل از هوک‌ها) به این صورت بود:

```jsx
import { NewContext } from "./NewContext";

export default function GrandChild2() {
  return (
    <NewContext.Consumer>
      {(data) => (
        <div>
          <h4>GrandChild-2</h4>
          <h5 style={{ color: data.isLogin2 ? "green" : "red" }}>
            {data.isLogin2 ? "Welcome to site" : "Please login"}
          </h5>
          <h5>Your browser is {data.browser2}</h5>
        </div>
      )}
    </NewContext.Consumer>
  );
}
```

---

## جمع‌بندی ساده

- **Context** می‌سازیم با `createContext()`
- یک **Provider** می‌سازیم که داده‌ها و توابع را در `value` می‌گیرد و به کل subtree می‌دهد
- در هر کجای درخت کامپوننت می‌تونیم با `useContext` داده‌ها رو دریافت کنیم و استفاده کنیم
- دیگه لازم نیست props رو چند لایه بفرستیم (prop drilling حل میشه)

---

## ساختار کامل یک مثال Context API ساده:

```jsx
// NewContext.js
import React, { createContext, useState } from "react";

export const NewContext = createContext();

export function AppDataProvider({ children }) {
  const [isLogin2, setIsLogin2] = useState(true);
  const [browser2, setBrowser2] = useState("Chrome");

  const value = { isLogin2, browser2, setIsLogin2, setBrowser2 };

  return <NewContext.Provider value={value}>{children}</NewContext.Provider>;
}
```

```jsx
// GrandChild2.js
import { useContext } from "react";
import { NewContext } from "./NewContext";

export default function GrandChild2() {
  const data = useContext(NewContext);

  return (
    <div>
      <h4>GrandChild-2</h4>
      <h5 style={{ color: data.isLogin2 ? "green" : "red" }}>
        {data.isLogin2 ? "Welcome to site" : "Please login"}
      </h5>
      <h5>Your browser is {data.browser2}</h5>
    </div>
  );
}
```

```jsx
// App.js
import Parent2 from "./components/context-api/Parent2";
import { AppDataProvider } from "./components/context-api/NewContext";

function App() {
  return (
    <AppDataProvider>
      <Parent2 />
    </AppDataProvider>
  );
}

export default App;
```

---

---
