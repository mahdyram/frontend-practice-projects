حتماً! بیایید `useReducer` را **کامل و مفصل** بررسی کنیم. 😊

---

## 1. مفهوم اصلی `useReducer`

`useReducer` یکی از **هوک‌های React** است که برای **مدیریت حالت (state) پیچیده** استفاده می‌شود.
می‌توان آن را به نوعی جایگزین `useState` دانست، ولی زمانی مفید است که:

- حالت شما شامل چندین فیلد است
- به عملیات پیچیده یا شرطی نیاز دارید
- تغییر حالت به صورت **توالی‌ای از اقدامات (actions)** انجام می‌شود

فرمول کلی آن شبیه به الگوی **Reducer در Redux** است.

---

## 2. سینتکس پایه

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

- `state` → وضعیت فعلی
- `dispatch` → تابعی که برای ارسال **اقدامات (actions)** استفاده می‌کنیم
- `reducer` → تابعی که **حالت جدید** را بر اساس **حالت فعلی** و **action** تولید می‌کند
- `initialState` → مقدار اولیه state

---

## 3. ساختار تابع Reducer

تابع reducer همیشه دو ورودی می‌گیرد:

```javascript
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

- `state` → حالت فعلی
- `action` → عملیاتی که می‌خواهیم انجام دهیم (معمولاً یک شی با `type` و اختیاری `payload`)

---

## 4. مثال ساده

```javascript
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default Counter;
```

✅ در این مثال:

- `dispatch({ type: "INCREMENT" })` → می‌گوید «عملیات افزایش را انجام بده»
- تابع reducer وضعیت جدید را برمی‌گرداند و کامپوننت دوباره رندر می‌شود

---

## 5. کاربردهای اصلی

1. **مدیریت state پیچیده**: وقتی state شامل چندین مقدار مرتبط است، مثلا فرم بزرگ یا چندین گزینه UI
2. **زمانی که تغییر state وابسته به مقدار قبلی است**
3. **زمانی که می‌خواهیم منطق تغییر state را از کامپوننت جدا کنیم**
4. **شباهت به Redux**: برای پروژه‌های بزرگ یا وقتی قصد دارید بعداً به Redux مهاجرت کنید

---

## 6. تفاوت `useState` و `useReducer`

| ویژگی                            | useState            | useReducer                       |
| -------------------------------- | ------------------- | -------------------------------- |
| پیچیدگی state                    | کم                  | متوسط تا زیاد                    |
| تغییر state وابسته به state قبلی | با callback         | طبیعی با reducer                 |
| مدیریت چند action                | غیر مستقیم          | مستقیم و واضح                    |
| مناسب برای                       | فرم‌ها و state ساده | state پیچیده یا متشکل از چند بخش |

---

💡 نکته: حتی اگر state ساده باشد، `useReducer` می‌تواند مفید باشد چون **منطق تغییر state را تمیز و سازمان‌دهی‌شده نگه می‌دارد**.

---

اگر بخواهی، می‌توانم یک **مثال فرم چند فیلدی با useReducer** درست کنم تا واقعاً کاربردش در پروژه‌های واقعی را ببینی.

می‌خوای این کارو بکنم؟
