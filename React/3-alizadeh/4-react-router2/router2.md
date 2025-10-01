```jsx
import Layout from "./components/Layout";

function App() {
  return <Layout />;
}

export default App;

---

import { RouterProvider, NavLink } from "react-router-dom";
import { router } from "../routes";

export default function Layout() {
  return (
    <div>
      <header>
        <h1>This is Header</h1>
        <ul>
          <li>
            <NavLink to={"/movies"}>movies</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>about us</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>contact us</NavLink>
          </li>
        </ul>
        <hr />
      </header>

      <main>
        <RouterProvider router={router} />
        <hr />
      </main>

      <footer>
        <h2>This is Footer</h2>
      </footer>
    </div>
  );
}
```

اینجا یه مشکل داری:

تو کد `Layout` اومدی **`RouterProvider`** رو گذاشتی وسط لایه (بین هدر و فوتر):

```jsx
<main>
  <RouterProvider router={router} />
  <hr />
</main>
```

ولی ساختار **react-router-dom v6.4+** اینطوری نیست ⚠️

📌 **نکته مهم:**
`RouterProvider` باید **یکبار** بالاترین سطح اپ باشه (معمولاً تو `main.jsx` یا `index.jsx`) و دیگه نباید وسط کامپوننت‌ها بیاد. چون اون کل context رو ایجاد می‌کنه.

---

یعنی چیزی شبیه این باید باشه:

### 🔹 main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

---

### 🔹 Layout.jsx

اینجا دیگه لازم نیست `RouterProvider` بیاری. فقط `Outlet` بذار (جایی که روت‌های فرزندت لود می‌شن):

```jsx
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <h1>This is Header</h1>
        <ul>
          <li>
            <NavLink to="/movies">movies</NavLink>
          </li>
          <li>
            <NavLink to="/about">about us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact us</NavLink>
          </li>
        </ul>
        <hr />
      </header>

      <main>
        <Outlet /> {/* اینجا محتوای صفحات میاد */}
        <hr />
      </main>

      <footer>
        <h2>This is Footer</h2>
      </footer>
    </div>
  );
}
```

---

یعنی خلاصه:

- `RouterProvider` فقط تو `main.jsx` باشه ✅
- تو `Layout` از `Outlet` استفاده کن برای رندر شدن صفحات ✅

---

آها خوب پرسیدی 👌

`Outlet` یکی از کامپوننت‌های خود **react-router-dom** هست.

📌 **تعریف ساده:**
`<Outlet />` مثل یه **جای خالی** (placeholder) عمل می‌کنه که محتویات روت‌های فرزند (child routes) میان اونجا رندر می‌شن.

---

### مثال:

فرض کن تو `routes.js` اینجوری تعریف کردی:

```jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Movies from "./pages/Movies";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // این لایه ثابت
    children: [
      { path: "movies", element: <Movies /> },
      { path: "about", element: <About /> },
    ],
  },
]);
```

---

### Layout.jsx

```jsx
export default function Layout() {
  return (
    <div>
      <header>Header ثابت</header>

      <main>
        <Outlet /> {/* محتوای Movies یا About اینجا نشون داده میشه */}
      </main>

      <footer>Footer ثابت</footer>
    </div>
  );
}
```

---

🔹 وقتی کاربر بره به `/movies`:

- `Layout` میاد
- تو `<Outlet />` کامپوننت `Movies` نشون داده میشه

🔹 وقتی بره `/about`:

- `Layout` همچنان میاد
- تو `<Outlet />` کامپوننت `About` نشون داده میشه

---

پس `Outlet` باعث میشه **یه Layout ثابت (مثلاً هدر/فوتر) داشته باشی** و فقط بخش وسط (محتوای صفحه) عوض بشه.

---

آها عالیه 👌
الان فهمیدم چرا به مشکل خوردی.

تو فایل `routes.js` که گذاشتی، روت‌ها رو مستقیم تعریف کردی (بدون parent).
به همین خاطر، `Layout`ت (هدر/فوتر ثابت) هیچ جا وارد بازی نشده.

---

### باید اینجوری باشه 👇

```jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Movie from "./components/pages/Movie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // لایه ثابت (هدر، فوتر)
    children: [
      { index: true, element: <Home /> }, // مسیر "/" => Home
      { path: "movies", element: <Movies /> },
      { path: "movies/:id", element: <Movie /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
```

---

### تغییرات مهم:

1. `Layout` رو گذاشتم به عنوان **element اصلی**.
2. روت‌های دیگه شدن **children**.
3. تو `Layout.jsx` باید حتما `Outlet` بذاری:

```jsx
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <h1>This is Header</h1>
        <ul>
          <li>
            <NavLink to="/movies">movies</NavLink>
          </li>
          <li>
            <NavLink to="/about">about us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact us</NavLink>
          </li>
        </ul>
        <hr />
      </header>

      <main>
        <Outlet /> {/* اینجا محتوای صفحات رندر میشه */}
        <hr />
      </main>

      <footer>
        <h2>This is Footer</h2>
      </footer>
    </div>
  );
}
```

---

🔹 نتیجه:

- همیشه Header و Footer ثابت می‌مونه.
- وسط صفحه (`Outlet`) بسته به مسیر، یکی از `Home / Movies / About / Contact / Movie` رندر میشه.

---

سؤال خیلی خوبی پرسیدی 👌
الان دیگه لازم نیست `App` مستقیم `Layout` رو رندر کنه، چون **`Layout` داخل `router` تعریف شده**.

باید توی `App.jsx` فقط `RouterProvider` بذاری:

```jsx
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

---

### توضیح:

- `App` دیگه نیازی نداره `Layout` رو ایمپورت کنه.
- `router` مسئول نشون دادن `Layout` و بقیه صفحه‌هاست.
- هر بار مسیر عوض بشه، `RouterProvider` خودش تصمیم می‌گیره چی رو رندر کنه (مثلاً Home یا Movies).

---

🔑 جمع‌بندی:

- `App.jsx` ⇒ فقط `RouterProvider`
- `routes.js` ⇒ ساختار روت‌ها (با `Layout` به عنوان parent)
- `Layout.jsx` ⇒ `header + <Outlet /> + footer`

---

---

خیلی عالی نوشتی 👌

الان تو `Movies.jsx` داری لیست رو نشون میدی و برای هر فیلم فقط `id` رو تو URL می‌فرستی.
پس توی `Movie.jsx` وقتی `id` رو گرفتی، دیگه اسم فیلم نداری.

دو تا راه ساده داری:

---

### 🔹 راه ۱ (export/import لیست فیلم‌ها)

لیست فیلم‌ها رو از `Movies.jsx` بیرون بیار و export کن، بعد تو `Movie.jsx` import کن و با `id` اسم فیلم رو پیدا کن.

```jsx
// moviesData.js
export const moviesList = [
  { id: 1, name: "SpiderMan" },
  { id: 2, name: "Venom" },
  { id: 3, name: "SuperMan" },
];
```

```jsx
// Movies.jsx
import { Link } from "react-router-dom";
import { moviesList } from "./moviesData";

export default function Movies() {
  return (
    <div>
      <h2>Movies:</h2>
      <ul>
        {moviesList.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <br />
      <Link to={"/"}>home</Link>
    </div>
  );
}
```

```jsx
// Movie.jsx
import { useParams, Link } from "react-router-dom";
import { moviesList } from "./moviesData";

export default function Movie() {
  const { id } = useParams();
  const movie = moviesList.find((m) => m.id === Number(id));

  return (
    <div>
      <h3>This is movie-{id}</h3>
      <h3>Name: {movie?.name}</h3>
      <Link to="/movies">Movies</Link>
    </div>
  );
}
```

---

### 🔹 راه ۲ (ارسال name با state موقع لینک)

```jsx
// Movies.jsx
<Link to={`/movies/${id}`} state={{ name }}>
  {name}
</Link>
```

```jsx
// Movie.jsx
import { useParams, useLocation, Link } from "react-router-dom";

export default function Movie() {
  const { id } = useParams();
  const { state } = useLocation();

  return (
    <div>
      <h3>This is movie-{id}</h3>
      <h3>Name: {state?.name || "Unknown"}</h3>
      <Link to="/movies">Movies</Link>
    </div>
  );
}
```

---

🔑 پیشنهاد من برای پروژه کوچیک همین **راه ۱ (import/find)** هست چون مطمئن و ساده‌ست.

میخوای من برات نسخه‌ی کامل `moviesData.js + Movies.jsx + Movie.jsx` آماده کنم تا مستقیم کار کنه؟
