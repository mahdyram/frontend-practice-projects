باشه، بیایم **قدم‌به‌قدم و کامل** مفاهیم `createAsyncThunk` و `extraReducers` و ارتباطش با `createSlice` در Redux Toolkit را توضیح بدهیم، بعد هم یک مثال کامل با کد عملی.

---

## ۱. `createSlice` چیست؟

`createSlice` یک روش **جدید و ساده‌تر** برای ساخت **reducer و action** در Redux است.
مزیت‌ها:

- دیگر لازم نیست `switch-case` را دستی بنویسی.
- همزمان **reducer و action creator** تولید می‌کند.
- ساختار state و نحوه تغییر آن را به صورت **محلی (local)** مدیریت می‌کند.

مثال ساده:

```javascript
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

- `increment` و `decrement` اتوماتیک ساخته می‌شوند.
- state را می‌توانی مستقیماً تغییر دهی چون Redux Toolkit از `Immer` استفاده می‌کند.

---

## ۲. `createAsyncThunk` چیست و چرا نیاز داریم؟

در Redux سنتی، مدیریت **درخواست‌های async** (مثل fetch API یا axios) کمی سخت بود:

1. نیاز بود ۳ اکشن بسازیم: `REQUEST`, `SUCCESS`, `FAILURE`.
2. در reducer هر کدام را جدا هندل کنیم.
3. برای async logic از `redux-thunk` یا middleware دیگر استفاده کنیم.

`createAsyncThunk` کار را ساده می‌کند:

- به جای ساخت اکشن‌ها و thunk دستی، **یک تابع async می‌سازیم**.
- Redux Toolkit خودش سه اکشن زیر را اتوماتیک تولید می‌کند:

  1. `pending` → وقتی درخواست شروع شد.
  2. `fulfilled` → وقتی درخواست موفق شد و داده برگشت.
  3. `rejected` → وقتی درخواست شکست خورد.

مثال:

```javascript
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postFetch = createAsyncThunk(
  "posts/fetchPosts", // اسم اکشن
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data; // داده که به reducer می‌رود
  }
);
```

حالا Redux Toolkit خودکار این سه اکشن را می‌سازد:

- `posts/fetchPosts/pending`
- `posts/fetchPosts/fulfilled`
- `posts/fetchPosts/rejected`

---

## ۳. `extraReducers` چیست؟

در `createSlice`:

- بخش `reducers` فقط برای **اکشن‌های محلی slice** است.
- برای اکشن‌های **خارجی یا async** (مثل `createAsyncThunk`) از `extraReducers` استفاده می‌کنیم.

مثال:

```javascript
const postSlice = createSlice({
  name: "posts",
  initialState: { posts: [], status: "" },
  reducers: {}, // برای اکشن‌های محلی
  extraReducers: (builder) => {
    builder
      .addCase(postFetch.pending, (state) => {
        state.status = "Loading"; // درخواست شروع شد
      })
      .addCase(postFetch.fulfilled, (state, action) => {
        state.status = "Success"; // درخواست موفق بود
        state.posts = action.payload; // داده API
      })
      .addCase(postFetch.rejected, (state) => {
        state.status = "Failed"; // درخواست شکست خورد
      });
  },
});
```

- `builder.addCase` برای **حالت‌های مختلف async thunk** است.
- state را بر اساس `pending/fulfilled/rejected` به روز می‌کند.

---

## ۴. نسخه کامل و عملی پروژه با React + Redux Toolkit

### a. Slice (redux/postSlice.js)

```javascript
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk برای گرفتن پست‌ها
export const postFetch = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  } catch (err) {
    console.error("Axios request failed:", err);
    throw err;
  }
});

const postSlice = createSlice({
  name: "post",
  initialState: { posts: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postFetch.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postFetch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(postFetch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
```

---

### b. Store (redux/store.js)

```javascript
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;
```

---

### c. کامپوننت React (components/Post.jsx)

```javascript
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postFetch } from "../redux/postSlice";

export default function Post() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.post);

  useEffect(() => {
    if (status === "idle") dispatch(postFetch());
  }, [dispatch, status]);

  if (status === "loading") return <h2>Loading...</h2>;
  if (status === "failed") return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

### d. App اصلی (main.jsx یا index.jsx)

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import Post from "./components/Post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Post />
  </Provider>
);
```

---

✅ این ساختار:

- کاملاً با Redux Toolkit است.
- Async request با `createAsyncThunk` انجام می‌شود.
- State شامل `posts`, `status` و `error` است.
- UI بر اساس `status` تغییر می‌کند.

---

---

در کدی که فرستادی، `throw err` داخل تابع async ای که به `createAsyncThunk` داده‌ای استفاده شده است:

```javascript
export const postFetch = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  } catch (err) {
    console.error("Axios request failed:", err);
    throw err; // ← اینجا
  }
});
```

### نقش `throw err` در اینجا

1. وقتی درخواست axios شکست بخورد (مثلاً سرور جواب ندهد یا خطا 404 رخ دهد) خطا در `catch` می‌افتد.
2. `throw err` باعث می‌شود که **Promise مربوط به async thunk رد شود**.
3. Redux Toolkit وقتی Promise رد شود، به طور خودکار **اکشن `rejected`** را dispatch می‌کند.

پس به زبان ساده:

- `pending` → وقتی درخواست شروع شد.
- `fulfilled` → وقتی `return data` اجرا شد.
- `rejected` → وقتی `throw err` یا خطایی رخ داد.

اگر `throw err` را حذف کنیم:

- خطا در console چاپ می‌شود ولی اکشن `rejected` **dispatch نمی‌شود** و slice نمی‌تواند state را برای حالت شکست بروزرسانی کند.

---

---

باشه، بیاییم **قدم‌به‌قدم و کامل** این بخش‌ها را توضیح بدهیم تا کاملاً متوجه شوی.

---

## ۱. چرا `status` را اول `"idle"` گذاشتیم؟

در slice ما داریم:

```javascript
initialState: { posts: [], status: "idle", error: null }
```

### مفهوم `"idle"`

- `"idle"` یعنی **هنوز هیچ کاری برای fetch پست‌ها انجام نشده است**.
- وضعیت‌های دیگر:

  - `"loading"` → درخواست API در حال اجراست
  - `"succeeded"` → درخواست موفقیت‌آمیز بود
  - `"failed"` → درخواست شکست خورده

اگر مقدار اولیه را خالی می‌گذاشتیم (`""`)، تشخیص اینکه **هنوز fetch انجام نشده** سخت می‌شد.
با `"idle"`:

```javascript
if (status === "idle") dispatch(postFetch());
```

می‌فهمیم که فقط **یک بار** هنگام mount کامپوننت باید API فراخوانی شود.

---

## ۲. نقش `useEffect` و dependency array

```javascript
useEffect(() => {
  if (status === "idle") dispatch(postFetch());
}, [dispatch, status]);
```

### الف) چرا از useEffect استفاده می‌کنیم؟

- می‌خواهیم **در همان لحظه mount شدن کامپوننت**، درخواست API را ارسال کنیم.
- اگر این کار را مستقیم در render انجام دهیم، کامپوننت **هر بار که rerender شود** دوباره dispatch می‌کند → باعث loop می‌شود.

### ب) چرا شرط `status === "idle"` داریم؟

- تا **تنها یک بار** هنگام mount API فراخوانی شود.
- اگر status `"loading"` یا `"succeeded"` یا `"failed"` باشد، دیگر dispatch نمی‌کنیم.

### ج) dependency array `[dispatch, status]`

- **dispatch**: تابع dispatch از Redux همیشه ثابت است، اما ESLint توصیه می‌کند آن را در dependency array بیاوریم.
- **status**: چون ما شرط داریم که فقط وقتی `"idle"` است dispatch کنیم، React باید به تغییر `status` هم واکنش نشان دهد.

  - اگر status تغییر کند (مثلاً بعد از `fulfilled` یا `rejected`) effect دوباره اجرا نشود چون شرط دیگر true نیست.

---

## ۳. چرا نمی‌توانستیم فقط `[]` بگذاریم؟

```javascript
useEffect(() => {
  dispatch(postFetch());
}, []);
```

- این هم کار می‌کند، اما ESLint هشدار می‌دهد چون **status داخل useEffect استفاده شده ولی در dependency array نیست**.
- استفاده از `[dispatch, status]` هم مطابق استاندارد React است و رفتار صحیح و امن را تضمین می‌کند.

---

### خلاصه:

| بخش                          | مفهوم                                                                   |
| ---------------------------- | ----------------------------------------------------------------------- |
| `status: "idle"`             | هنوز fetch انجام نشده                                                   |
| `status: "loading"`          | در حال درخواست API                                                      |
| `status: "succeeded"`        | درخواست موفق                                                            |
| `status: "failed"`           | درخواست شکست خورده                                                      |
| `useEffect`                  | ارسال درخواست هنگام mount                                               |
| `[dispatch, status]`         | اطمینان از اجرای effect فقط وقتی شرط درست است و جلوگیری از هشدار ESLint |
| شرط `if (status === "idle")` | جلوگیری از ارسال دوباره API                                             |

---

---

برای این حالت (فراخوانی async thunk در mount) **حرفه‌ای‌ترین و مرسوم‌ترین روش** استفاده از `useEffect` به همراه **چک وضعیت (`status`) و dependency تنها `dispatch`) است** تا:

1. درخواست فقط یک بار اجرا شود.
2. ESLint هشدار ندهد.
3. کد تمیز و خوانا باشد.

---

### نکات حرفه‌ای:

1. **چک `status === "idle"`** باعث می‌شود dispatch **فقط یک بار** اجرا شود.
2. **dependency array `[dispatch, status]`**:

   - dispatch همیشه ثابت است اما ESLint توصیه می‌کند آن را بیاوریم.
   - status چون در شرط استفاده شده، باید dependency باشد تا React رفتار درست داشته باشد.

3. **نمایش UI بر اساس وضعیت** (`loading`, `failed`, `succeeded`) خوانا و استاندارد است.
4. **استفاده از async thunk** باعث می‌شود نیاز به `try/catch` یا callback‌های اضافی در کامپوننت نباشد.
