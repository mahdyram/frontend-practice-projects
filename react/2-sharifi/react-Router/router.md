سلام! عالیه که داری React 19 رو یاد می‌گیری و مفاهیمی مثل `useState` و `useEffect` و `useRef` رو بلدی. حالا بریم سراغ React Router که یکی از مهم‌ترین کتابخونه‌ها برای مدیریت مسیردهی (Routing) توی برنامه‌های React هست.

---

## React Router چیه و چرا مهمه؟

در برنامه‌های وب، وقتی روی لینک‌ها کلیک می‌کنیم یا URL رو تغییر می‌دیم، انتظار داریم صفحه تغییر کنه بدون اینکه کل صفحه دوباره رفرش بشه. React Router این امکان رو میده که داخل برنامه React، URL رو کنترل کنی و بر اساس URL نمایش بخش‌های مختلف رو تغییر بدی، بدون رفرش کل صفحه. به این کار میگن **Single Page Application Routing**.

---

## مفاهیم اصلی React Router

### 1. Route

هر `Route` یک مسیر (مثلاً `/about`) و کامپوننت مربوط به اون مسیر رو مشخص می‌کنه.
وقتی URL مرورگر با مسیر Route یکی شد، اون کامپوننت نمایش داده میشه.

### 2. Router

برای استفاده از Route ها، باید کل اپ رو داخل یک `Router` قرار بدی. معمولاً از `BrowserRouter` استفاده می‌کنیم.

### 3. Link

برای حرکت بین صفحات به جای تگ `<a>` از کامپوننت `<Link>` استفاده می‌کنیم تا بدون رفرش صفحه، URL عوض بشه و صفحه React تغییر کنه.

---

## نصب React Router

```bash
npm install react-router-dom@6
```

نسخه 6 جدیدترین و پرکاربردترین نسخه React Router هست.

---

## یک مثال ساده

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>صفحه اصلی</h2>;
}

function About() {
  return <h2>درباره ما</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">خانه</Link> |<Link to="/about">درباره ما</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## توضیح قدم‌به‌قدم

- `BrowserRouter` کل اپ رو می‌پیچونه تا مسیردهی فعال بشه.
- `<Link to="...">` وقتی کلیک بشه URL تغییر میکنه بدون رفرش صفحه.
- `<Routes>` مجموعه‌ای از Route ها رو نگه میداره.
- هر `<Route>` مسیر و کامپوننت مرتبط رو مشخص می‌کنه.
- `element={<Component />}` یعنی وقتی URL به مسیر مشخص شده خورد، این کامپوننت رندر بشه.

---

## نکات مهم React Router v6

- `Switch` حذف شده و به جاش از `Routes` استفاده می‌کنیم.
- مسیرها دقیق‌تر بررسی میشن و اگر چند مسیر بخوان با هم مطابقت داشته باشن، فقط بهترین گزینه انتخاب میشه.
- برای مسیرهای داینامیک مثل `/user/:id` از پارامترها استفاده میشه (در ادامه توضیح میدم).

---

## پارامترهای مسیر (Dynamic Routes)

مثلاً میخوای یه صفحه داشته باشی که اطلاعات کاربر رو بر اساس id نشون بده:

```jsx
function User() {
  const { id } = useParams(); // گرفتن پارامتر id از URL
  return <h2>کاربر شماره {id}</h2>;
}

<Routes>
  <Route path="/user/:id" element={<User />} />
</Routes>;
```

---

## ناوبری برنامه‌نویسی (Programmatic Navigation)

گاهی میخوای از کد (مثلاً بعد از ارسال فرم) مسیر رو تغییر بدی:

```jsx
import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about"); // تغییر مسیر به about
  };

  return <button onClick={handleClick}>برو به درباره ما</button>;
}
```

---

## خلاصه

| مفهوم           | کاربرد                               |
| --------------- | ------------------------------------ |
| `BrowserRouter` | فعال کردن سیستم مسیردهی              |
| `Routes`        | نگهداری مجموعه مسیرها                |
| `Route`         | تعریف مسیر و کامپوننت مرتبط          |
| `Link`          | لینک داخلی برای تغییر مسیر بدون رفرش |
| `useParams`     | گرفتن پارامترهای مسیر داینامیک       |
| `useNavigate`   | تغییر مسیر برنامه‌نویسی              |

---

---
