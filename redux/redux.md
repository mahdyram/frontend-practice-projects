عالیه 👌
بریم سراغ **Redux** که یکی از مهم‌ترین مفاهیم توی دنیای React و مدیریت state هست.

---

## 🔹 Redux چیست؟

- **Redux** یک کتابخانه‌ی **مدیریت state** برای جاوااسکریپت است.
- در ابتدا برای **React** خیلی محبوب شد، ولی مستقل از React هست و میشه در هر فریم‌ورکی (یا حتی JS خام) استفاده‌اش کرد.
- ایده اصلی: همه‌ی state اپلیکیشن در یک **store واحد (global state)** نگه‌داری میشه.

---

## 🔹 چرا Redux؟

بدون Redux، در پروژه‌های بزرگ React ممکنه با مشکل **prop drilling** مواجه بشیم:

- باید state رو از والد به فرزند و همینطور پایین‌تر پاس بدی.
- مدیریت state پیچیده و پراکنده میشه.

Redux اومد تا:

1. یک **محل مرکزی (store)** برای state داشته باشی.
2. تغییرات state فقط از طریق یک **رویه مشخص (actions → reducer)** انجام بشه.
3. state قابل پیش‌بینی (predictable) باشه.

---

## 🔹 اصول Redux

1. **Single Source of Truth**
   همه state اپلیکیشن در یک جا (store) نگهداری میشه.

2. **State is Read-only**
   تغییر state فقط با ارسال یک **action** انجام میشه (مستقیم دستکاری نمی‌کنیم).

3. **Changes via Pure Functions**
   تابع‌هایی به اسم **reducer** مشخص می‌کنن که وقتی یک action میاد، state چطور تغییر کنه.

---

## 🔹 اجزای اصلی

1. **Store**
   محلی که state نگهداری میشه.

2. **Action**
   یک شی جاوااسکریپتی که میگه "چه اتفاقی افتاده"

   ```js
   { type: "INCREMENT", payload: 1 }
   ```

3. **Reducer**
   یک تابع pure که state جدید رو بر اساس state قبلی و action برمی‌گردونه.

   ```js
   function counterReducer(state = { count: 0 }, action) {
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

4. **Dispatch**
   برای ارسال action به reducer استفاده میشه.

---

## 🔹 مثال ساده (vanilla Redux)

```javascript
import { createStore } from "redux";

// reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// store
const store = createStore(counterReducer);

// subscribe
store.subscribe(() => console.log(store.getState()));

// dispatch actions
store.dispatch({ type: "INCREMENT" }); // { count: 1 }
store.dispatch({ type: "INCREMENT" }); // { count: 2 }
store.dispatch({ type: "DECREMENT" }); // { count: 1 }
```

---

## 🔹 Redux در React

برای راحتی کار با React، کتابخونه‌ی **react-redux** معرفی شد. این کتابخونه:

- به React اجازه میده به state سراسری وصل بشه.
- با **Provider** کامپوننت‌ها رو به Store متصل می‌کنه.
- از هوک‌هایی مثل `useSelector` و `useDispatch` استفاده میشه.

---

## 🔹 کی Redux استفاده کنیم؟

- وقتی state پروژه بزرگ و پیچیده است.
- وقتی چندین کامپوننت به state مشترک نیاز دارن.
- وقتی منطق تغییر state زیاده و پراکنده‌ست.

❌ برای پروژه‌های کوچیک (مثل Todo ساده)، Context API یا حتی useState کافی هست.

---

---

سؤال خیلی خوبی پرسیدی 👌
بیاییم دقیق مقایسه کنیم:

---

## 🔹 `useReducer`

- یک **هوک داخلی React** است.
- برای **مدیریت state محلی (local state)** در یک کامپوننت استفاده میشه.
- وقتی state یه کامپوننت **پیچیده‌تر از یک useState ساده** باشه، useReducer گزینه‌ی بهتریه.
- فقط همون کامپوننتی که ازش استفاده کرده، state رو می‌بینه (مگر اینکه با Context اشتراک‌گذاری بشه).

---

## 🔹 Redux (یا Redux Toolkit)

- یک **کتابخونه خارجی** برای **مدیریت state سراسری (global state)** است.
- می‌تونی state رو بین چندین کامپوننت و حتی کل اپلیکیشن به اشتراک بذاری.
- ابزارهای جانبی مثل devtools، middleware، async handling (`createAsyncThunk`) داره.
- برای پروژه‌های بزرگ و تیمی عالیه چون state و منطق تغییرش **متمرکز و قابل پیش‌بینی** میشه.

---

## 🔹 پس جواب

❌ Redux (یا Redux Toolkit) **جایگزین useReducer نیست**.

🔹 تفاوت کاربری:

- اگر state فقط به یک یا چند کامپوننت محدود میشه → **useReducer** کافیه.
- اگر state باید بین بخش‌های مختلف اپلیکیشن (global) به اشتراک گذاشته بشه یا خیلی پیچیده است → **Redux Toolkit** بهتره.

---

✅ در واقع `useReducer` و Redux شباهت مفهومی دارن (هر دو reducer و action دارن)،
ولی کاربردهاشون فرق می‌کنه:

- `useReducer` = مدیریت state محلی
- `Redux` = مدیریت state سراسری

---

---

خیلی خوب، پس بریم سراغ **Redux Toolkit (RTK)** 👌

---

## 🔹 Redux Toolkit چیه؟

- **Redux Toolkit** یا به اختصار RTK، کتابخونه‌ی رسمی تیم Redux هست (سال ۲۰۱۹ معرفی شد).
- هدفش اینه که نوشتن کدهای Redux رو خیلی **ساده‌تر**، **کوتاه‌تر** و **کم‌خطای‌تر** کنه.
- در واقع یه **ابزار کمکی** روی Redux عادیه، نه جایگزینش.

---

## 🔹 چرا Redux Toolkit ساخته شد؟

Redux نسخه‌ی کلاسیک یه سری مشکل داشت:

1. **کد زیاد و تکراری** (boilerplate code)

   - برای هر تغییر state باید action type تعریف می‌کردی، action creator می‌ساختی، reducer می‌نوشتی.

2. **تنظیمات زیاد**

   - `createStore`، `combineReducers`، middleware و غیره.

3. **نیاز به نصب کتابخونه‌های جانبی** (مثل redux-thunk برای async).

👉 Redux Toolkit اومد این مشکلات رو حل کنه.

---

## 🔹 ویژگی‌های اصلی Redux Toolkit

1. **`configureStore`**
   ساخت store رو ساده می‌کنه و خودش middleware پیش‌فرض (مثل thunk) رو اضافه می‌کنه.

2. **`createSlice`**

   - همزمان reducer و action creator رو می‌سازه.
   - نیاز نیست دیگه دستی action type و action creator بنویسی.

3. **پشتیبانی از Immer.js**
   تو reducer می‌تونی به شکل “mutable” کد بزنی (مثل تغییر مستقیم state)، ولی پشت صحنه immutable نگه می‌داره.

   ```js
   state.value += 1; // به نظر تغییر مستقیمه، اما Immer اینو immutable نگه می‌داره
   ```

4. **Thunk داخلی برای async**
   نیازی به نصب جداگانه‌ی redux-thunk نداری.

5. **ساختار استاندارد پروژه**
   همه چیز (state + actions + reducers) توی یک “slice” قرار می‌گیره → کد تمیزتر.

---

## 🔹 یک مثال ذهنی

در Redux کلاسیک:

- تعریف action type
- ساخت action creator
- نوشتن reducer
- اضافه کردن به store

در RTK:

- فقط با `createSlice` همه اینا رو با هم می‌سازی.

---

## 🔹 مقایسه کوتاه

| ویژگی      | Redux کلاسیک               | Redux Toolkit               |
| ---------- | -------------------------- | --------------------------- |
| کد تکراری  | زیاد                       | خیلی کم                     |
| ساخت Store | دستی با `createStore`      | راحت با `configureStore`    |
| Reducer    | باید immutable دستی بنویسی | خودش با Immer مدیریت می‌کنه |
| Async      | نیاز به نصب redux-thunk    | داخلی داره                  |
| یادگیری    | پیچیده‌تر                  | ساده‌تر و استانداردتر       |

---

💡 پس در عمل، اگه امروز بخوای توی یک پروژه React از Redux استفاده کنی، **تقریباً همه توصیه می‌کنن از Redux Toolkit استفاده کنی**، چون کدنویسی خیلی کمتر میشه و خطاها کمتر میشن.

---

---

عالیه 👌
بیا مرحله به مرحله یه **Counter ساده** رو با **Redux Toolkit + React** بسازیم.

---

## 🔹 مرحله ۱: نصب پکیج‌ها

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 🔹 مرحله ۲: ساخت Slice

یک فایل مثلا `counterSlice.js` داخل پوشه `features/counter/` بساز:

```javascript
// features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // اینجا به نظر میاد mutable هست ولی Immer پشت صحنه immutable نگه می‌داره
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // استفاده از payload
    },
  },
});

// export reducer + actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## 🔹 مرحله ۳: ساخت Store

یک فایل مثلا `store.js` بساز:

```javascript
// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

---

## 🔹 مرحله ۴: اتصال Store به React

در `main.jsx` یا `index.js`:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

## 🔹 مرحله ۵: استفاده در کامپوننت

```javascript
// Counter.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value); // گرفتن state
  const dispatch = useDispatch(); // آماده برای dispatch کردن action

  return (
    <div style={{ padding: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "10px" }}
      >
        -
      </button>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        style={{ marginLeft: "10px" }}
      >
        +5
      </button>
    </div>
  );
}

export default Counter;
```

---

## 🔹 نتیجه

- همه state در **store** نگهداری میشه.
- **CounterSlice** همزمان reducer و action creator ها رو تولید کرده.
- در کامپوننت با `useSelector` state رو می‌گیریم و با `dispatch` تغییرش می‌دیم.

---

### خلاصه

- **Redux** یک کتابخانه برای مدیریت state سراسری (global state) اپلیکیشن است.
- معمولاً Redux همراه با کتابخانه **React-Redux** برای یکپارچه‌سازی Redux و React استفاده می‌شود.
- **Redux Toolkit** استاندارد امروزی برای نوشتن منطق Redux است.
- الگوی به‌روزرسانی Redux، بخش **«چه اتفاقی افتاده»** را از **«چگونه state تغییر می‌کند»** جدا می‌کند.
- **Actions** آبجکت‌های ساده‌ای هستند که یک فیلد `type` دارند و توضیح می‌دهند که **چه اتفاقی در برنامه افتاده است**.
- **Reducers** توابعی هستند که مقدار جدید state را بر اساس state قبلی + یک action محاسبه می‌کنند.
- یک **Redux store** هر بار که یک action dispatch می‌شود، root reducer را اجرا می‌کند.
- Redux از یک ساختار **جریان داده یک‌طرفه (one-way data flow)** استفاده می‌کند.
- **State** وضعیت اپلیکیشن را در یک لحظه مشخص توصیف می‌کند و UI بر اساس آن state رندر می‌شود.

### روند کار وقتی اتفاقی در اپلیکیشن می‌افتد:

1. UI یک action را dispatch می‌کند.
2. Store reducers را اجرا می‌کند و state بر اساس آنچه رخ داده به‌روزرسانی می‌شود.
3. Store به UI اطلاع می‌دهد که state تغییر کرده است.
4. UI دوباره بر اساس state جدید رندر می‌شود.

---

### خلاصه 2

- ما می‌توانیم با استفاده از **API `configureStore` در Redux Toolkit** یک Redux store بسازیم.
- `configureStore` یک تابع reducer را به‌عنوان آرگومان ورودی می‌گیرد.
- `configureStore` به‌صورت خودکار Store را با تنظیمات پیش‌فرض مناسب پیکربندی می‌کند.
- منطق Redux معمولاً در فایل‌هایی به نام **"slice"** سازمان‌دهی می‌شود.
- یک **slice** شامل reducer logic و actions مرتبط با یک ویژگی یا بخش خاص از state است.
- API `createSlice` در Redux Toolkit برای هر reducer که تعریف می‌کنید، **action creator** و **action type** تولید می‌کند.

### قوانین reducer در Redux

- باید فقط یک state جدید را بر اساس `state` و `action` ورودی محاسبه کند.
- باید **immutable update** انجام دهد (یعنی با کپی کردن state موجود، تغییر ایجاد کند).
- نباید شامل منطق asynchronous یا side effect باشد.
- API `createSlice` در Redux Toolkit از کتابخانه **Immer** استفاده می‌کند که امکان نوشتن تغییرات به شکل «mutating» را می‌دهد، ولی در اصل immutable update انجام می‌شود.

### Selectors (انتخاب‌کننده‌ها)

- خواندن مقادیر از state با توابعی به نام **selectors** انجام می‌شود.
- Selectors به صورت `(state: RootState)` آرگومان می‌گیرند و یا یک مقدار از state برمی‌گردانند یا مقدار جدیدی از آن استخراج می‌کنند.
- Selectors می‌توانند در فایل slice نوشته شوند یا به صورت inline در hook `useSelector`.

### Async Logic (منطق ناهمزمان)

- منطق async معمولاً در توابع خاصی به نام **thunks** نوشته می‌شود.
- Thunks آرگومان‌های `dispatch` و `getState` را دریافت می‌کنند.
- Redux Toolkit به‌صورت پیش‌فرض middleware مربوط به **redux-thunk** را فعال می‌کند.

### React + Redux

- کتابخانه **React-Redux** امکان تعامل کامپوننت‌های React با store را فراهم می‌کند.
- با قرار دادن کل برنامه داخل `<Provider store={store}>`، تمام کامپوننت‌ها به store دسترسی پیدا می‌کنند.
- Hook `useSelector` به کامپوننت‌ها اجازه می‌دهد مقادیر را از store بخوانند.
- Hook `useDispatch` به کامپوننت‌ها اجازه می‌دهد actions را dispatch کنند.
- در استفاده از **TypeScript**، معمولاً hooks از پیش‌تعریف‌شده مثل `useAppSelector` و `useAppDispatch` ساخته می‌شوند تا typeها مدیریت شوند.

### نکته مهم

- **Global state** باید داخل Redux store نگهداری شود.
- **Local state** باید در خود کامپوننت React باقی بماند.

---

---

باشه 👌
بیا همون **Redux Toolkit Counter** رو یه کم ارتقا بدیم، ولی نه خیلی پیچیده:
این بار می‌خوایم با **`createAsyncThunk`** یه مقدار رو از یک API بگیریم و بذاریم توی state.

---

## 🔹 مرحله ۱: تغییر Slice

```javascript
// features/counter/counterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// یک action async می‌سازیم
// اینجا برای تست از jsonplaceholder استفاده می‌کنیم
export const fetchRandomNumber = createAsyncThunk(
  "counter/fetchRandomNumber",
  async () => {
    const res = await fetch(
      "https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=1"
    );
    const data = await res.json();
    return data[0]; // عدد برمی‌گرده
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomNumber.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomNumber.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value += action.payload; // عددی که گرفتیم رو به value اضافه می‌کنیم
      })
      .addCase(fetchRandomNumber.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## 🔹 مرحله ۲: استفاده در کامپوننت

```javascript
// Counter.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  fetchRandomNumber,
} from "./features/counter/counterSlice";

function Counter() {
  const { value, status, error } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Count: {value}</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "10px" }}
      >
        -
      </button>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        style={{ marginLeft: "10px" }}
      >
        +5
      </button>

      <br />
      <br />

      <button onClick={() => dispatch(fetchRandomNumber())}>
        {status === "loading" ? "Loading..." : "Add Random Number"}
      </button>

      {status === "failed" && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default Counter;
```

---

## 🔹 توضیح

- با `createAsyncThunk` یک action async ساختیم.
- وقتی صدا زده میشه:

  - `pending` → status = loading
  - `fulfilled` → عدد رو گرفتیم و به state اضافه می‌کنیم
  - `rejected` → خطا ذخیره میشه

---

👀 حالا دیگه یه نمونه‌ی ساده ولی کاربردی از async action با Redux Toolkit داری.

می‌خوای بعدش برات یه **ساختار پیشنهادی فولدرها در پروژه واقعی** (مثلاً وقتی چند feature داری) هم نشون بدم؟

---

---

عالیه 👌
وقتی پروژه‌ت بزرگ‌تر میشه و چندین بخش (feature) مختلف داره، بهتره کدهای Redux رو مرتب کنی.
الگوی پیشنهادی که خود تیم Redux Toolkit هم توصیه می‌کنه، چیزی به اسم **“feature-based folder structure”** هست.

---

## 📂 ساختار پیشنهادی فولدرها

```ruby
src/
│
├── app/                 # global app configuration
│   ├── store.js         # create and configure store
│   └── rootReducer.js   # (optional) if you have multiple reducers
│
├── features/            # each feature of the app has its own folder
│   ├── counter/
│   │   ├── counterSlice.js    # slice for counter
│   │   ├── Counter.jsx        # related component
│   │   └── Counter.module.css # (optional) styling file
│   │
│   ├── todos/
│   │   ├── todosSlice.js     # slice for todos
│   │   ├── Todos.jsx         # related component
│   │   └── api.js            # (optional) API file for this feature
│   │
│   └── auth/
│       ├── authSlice.js      # slice for auth
│       ├── AuthForm.jsx      # related component
│       └── api.js            # (optional) API file for this feature
│
├── components/          # shared / reusable components (e.g. Button, Navbar)
│
├── hooks/               # custom hooks
│
├── utils/               # helper functions (e.g. formatDate, calculateTax, ...)
│
└── index.js / main.jsx  # application entry point
```

---

## 🔹 چند نکته مهم

1. **هر feature پوشه خودش رو داره**:

   - Slice مخصوص خودش
   - کامپوننت‌های مرتبط
   - API یا فایل‌های helper مربوط به همون feature

2. **store** همیشه توی `app/` تعریف میشه.

   - همه‌ی sliceها در `store.js` جمع میشن.

3. **components/** برای چیزهای عمومی و قابل استفاده مجدد (shared UI components).

4. **utils/** یا **services/** برای کدهایی که هیچ ربطی به UI ندارن (مثل توابع کمکی یا سرویس‌های API).

---

## 🔹 یک مثال واقعی

فرض کن اپلیکیشن داری با ۳ بخش:

- شمارنده (counter)
- لیست کارها (todos)
- احراز هویت (auth)

همه چیزشون از هم جداست، ولی همگی در `store.js` جمع میشن:

```javascript
// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todos/todosSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    auth: authReducer,
  },
});
```

---

👉 اینطوری پروژه‌ت **مقیاس‌پذیر (scalable)** و **مرتب** میشه.
هر بخش جدید فقط یه پوشه‌ی جدید توی `features/` می‌سازه، slice و کامپوننت خودش رو میاره، و توی store اضافه میشه.

---

می‌خوای برات یه **Todo ساده** هم با همین ساختار (feature-based) پیاده کنم تا کامل دستت بیاد؟
