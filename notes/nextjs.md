حتماً! من جزوه تو رو با توجه به **React 19 و Next.js 15** آپدیت می‌کنم و نکات جدید، تغییرات APIها و ساختار `app/` در نسخه‌های جدید Next.js رو لحاظ می‌کنم. این نسخه‌ها کمی با Next.js 13+ تفاوت دارند، مخصوصاً در **Routing، RSC و Data Fetching**. نسخه‌ی جدید با **app directory و React Server Components** کاملاً سازگار شده.

---

# 🌐 Next.js 15 – آپدیت جزوه

## 🔹 Next.js چیست؟

- **Next.js** یک **فریم‌ورک React** هست که برای **ساخت وب‌سایت‌ها و اپلیکیشن‌های مدرن** طراحی شده.
- هدف: ترکیب **CSR / SSR / SSG / RSC** به صورت ساده و بهینه.
- با Next.js می‌تونی SPA بسازی یا سایت‌هایی که کاملاً بهینه برای **SEO و سرعت** هستن.
- نسخه 15، پشتیبانی کامل از **React 19** و **Server Components** رو داره و **Routing و Data Fetching** ساده‌تر شده.

---

## 🔹 ویژگی‌های مهم Next.js 15

1. **رندر انعطاف‌پذیر**

   - پشتیبانی از **CSR**, **SSR**, **SSG**, و **RSC**
   - انتخاب روش رندر برای هر صفحه یا کامپوننت امکان‌پذیر است.

2. **File-based Routing (App Directory)**

   - مسیرها بر اساس ساختار فایل‌ها در `app/` ساخته میشن.
   - صفحات الان به صورت **Server Components** پیش‌فرض هستند.
   - مثال:

     ```
     app/
       page.js → مسیر /
       about/page.js → مسیر /about
     ```

3. **API Routes**

   - می‌تونی endpoint بسازی بدون نیاز به سرور جدا.
   - مثال:

     ```js
     // app/api/hello/route.js
     export async function GET() {
       return new Response(JSON.stringify({ message: "Hello Next.js 15!" }), {
         status: 200,
         headers: { "Content-Type": "application/json" },
       });
     }
     ```

4. **Data Fetching جدید**

   - **Server Components** خودشون می‌تونن async باشن و داده‌ها رو مستقیماً fetch کنن.
   - `getStaticProps` و `getServerSideProps` در `pages/` هنوز پشتیبانی میشن اما در `app/` نیازی نیست.
   - مثال:

     ```js
     // app/products/page.js
     export default async function ProductsPage() {
       const res = await fetch("https://dummyjson.com/products");
       const products = await res.json();

       return (
         <ul>
           {products.products.map((p) => (
             <li key={p.id}>{p.title}</li>
           ))}
         </ul>
       );
     }
     ```

5. **Built-in CSS & Image Optimization**

   - پشتیبانی از CSS Modules، Tailwind CSS و فایل‌های global.
   - `<Image>` برای بهینه‌سازی خودکار تصاویر.

6. **Fast Refresh**

   - تغییرات کد بلافاصله در مرورگر دیده میشن.

---

## 🔹 انواع رندر در Next.js 15

| روش     | توضیح                                                   |
| ------- | ------------------------------------------------------- |
| **SSG** | HTML قبل از Build ساخته میشه.                           |
| **SSR** | HTML روی هر درخواست ساخته میشه.                         |
| **RSC** | React Server Components → کامپوننت بدون state روی سرور. |
| **CSR** | کاملاً روی مرورگر ساخته میشه، با `'use client'`.        |

---

### 🔹 Client vs Server Components

- **Server Component (پیش‌فرض)**

  - async بودن و fetch داده سرور امکان‌پذیره
  - HTML اولیه سریع و SEO-friendly
  - state یا event handler ندارن

- **Client Component**

  - برای state، فرم، event، انیمیشن
  - باید `'use client'` ابتدای فایل باشه
  - React hooks و تعاملات فعال میشن

---

### 🔹 مثال عملی با ترکیب Server و Client Component

**ساختار پروژه:**

```js
app/
 └─ page.js          // Server Component اصلی
 └─ components/
     └─ Header.js    // Server Component
     └─ Counter.js   // Client Component
```

**Header.js (Server Component)**

```js
export default function Header() {
  return (
    <header style={{ padding: "1rem", background: "#eee" }}>
      <h1>وب‌سایت من</h1>
      <p>این کامپوننت سروریه، state نداره</p>
    </header>
  );
}
```

**Counter.js (Client Component)**

```js
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "1rem" }}>
      <p>شمارش: {count}</p>
      <button onClick={() => setCount(count + 1)}>افزایش</button>
    </div>
  );
}
```

**page.js (Server Component اصلی)**

```js
import Header from "./components/Header";
import Counter from "./components/Counter";

export default function Page() {
  return (
    <main style={{ padding: "2rem" }}>
      <Header /> {/* Server Component */}
      <Counter /> {/* Client Component */}
    </main>
  );
}
```

**جریان رندر:**

1. **Header** روی سرور رندر میشه → HTML آماده → سریع و SEO-friendly
2. **Counter** به کلاینت میره → React hydrate می‌کنه → state و event فعال میشن
3. کاربر می‌تونه بدون reload کل صفحه تعامل کنه

---

### 🔹 جمع‌بندی

- **Server Components:** استاتیک، سریع، SEO-friendly، async data fetch
- **Client Components:** dynamic، تعامل کاربر، state و hooks
- **Next.js 15 + React 19:** ترکیب این دو برای بهترین عملکرد و ساده‌ترین Data Fetching

<!-- -------------------------------------------- -->
<hr style="height:5px; background-color:red" />
<!-- -------------------------------------------- -->

برای درک نحوه‌ی کار **کامپوننت‌های سرور (Server Components)** و **کامپوننت‌های کلاینت (Client Components)**، مفید است که با دو مفهوم پایه‌ای وب آشنا شوید:

1. محیط‌هایی که کد برنامه شما می‌تواند در آن‌ها اجرا شود: **سرور** و **کلاینت**
2. **مرز شبکه (Network Boundary)** که کد سرور و کلاینت را از هم جدا می‌کند

---

### محیط‌های سرور و کلاینت

در زمینه‌ی برنامه‌های وب:

![alt text](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Flearn%2Flight%2Flearn-client-and-server-environments.png&w=3840&q=75)

تصویری که مرورگر در سمت چپ و سرور در سمت راست را نشان می‌دهد، جدا شده توسط یک مرز شبکه.

- **کلاینت** به مرورگر روی دستگاه کاربر اشاره دارد که درخواست‌هایی برای کد برنامه شما به سرور ارسال می‌کند و سپس پاسخی که دریافت می‌کند را به رابط کاربری قابل تعامل برای کاربر تبدیل می‌کند.
- **سرور** به کامپیوتری در یک دیتاسنتر اشاره دارد که کد برنامه شما را ذخیره می‌کند، درخواست‌های کلاینت را دریافت می‌کند، محاسباتی انجام می‌دهد و پاسخ مناسب را ارسال می‌کند.

هر محیط قابلیت‌ها و محدودیت‌های خاص خودش را دارد. به عنوان مثال، با انتقال رندرینگ و دریافت داده‌ها به سرور، می‌توانید میزان کدی که به کلاینت ارسال می‌شود را کاهش دهید و عملکرد برنامه خود را بهبود ببخشید. اما همان‌طور که قبلاً یاد گرفتید، برای تعامل‌پذیر کردن رابط کاربری، باید **DOM** را روی کلاینت به‌روز کنید.

بنابراین، کدی که برای سرور و کلاینت می‌نویسید همیشه یکسان نیست. برخی عملیات‌ها (مثلاً گرفتن داده یا مدیریت وضعیت کاربر) بهتر است در یک محیط خاص اجرا شوند.

---

### مرز شبکه (Network Boundary)

**مرز شبکه** یک خط مفهومی است که محیط‌های مختلف را از هم جدا می‌کند.

در React، شما می‌توانید مشخص کنید که این مرز در کجای درخت کامپوننت قرار گیرد.
مثلاً می‌توانید داده‌ها را دریافت کرده و پست‌های یک کاربر را روی سرور رندر کنید (**Server Components**)، سپس دکمه‌ی تعاملی "Like" را برای هر پست روی کلاینت رندر کنید (**Client Components**).

به همین ترتیب، می‌توانید یک کامپوننت **Nav** ایجاد کنید که روی سرور رندر شود و بین صفحات به اشتراک گذاشته شود، اما اگر بخواهید وضعیت فعال لینک‌ها را نمایش دهید، لیست لینک‌ها را روی کلاینت رندر کنید.

![alt text](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Flearn%2Flight%2Flearn-client-server-modules.png&w=3840&q=75)

در پشت صحنه، کامپوننت‌ها به دو **گراف ماژول** تقسیم می‌شوند:

- گراف سرور (Server module graph) شامل تمام **Server Components** است که روی سرور رندر می‌شوند.
- گراف کلاینت (Client module graph) شامل تمام **Client Components** است.

بعد از رندر شدن **Server Components**، یک فرمت داده خاص به نام **React Server Component Payload (RSC)** به کلاینت ارسال می‌شود.
این payload شامل موارد زیر است:

- نتیجه رندر شده‌ی **Server Components**
- جایگاه‌های خالی برای کامپوننت‌های کلاینت و ارجاع به فایل‌های جاوااسکریپت آن‌ها

React از این اطلاعات برای ترکیب کامپوننت‌های سرور و کلاینت استفاده می‌کند و DOM را روی کلاینت به‌روز می‌کند.

---

### استفاده از **Client Components**

همان‌طور که در فصل قبل یاد گرفتید، **Next.js** به طور پیش‌فرض از **Server Components** استفاده می‌کند تا عملکرد برنامه شما بهتر شود و نیازی به کار اضافه برای استفاده از آن‌ها نداشته باشید.

با نگاهی به خطایی که در مرورگر دیده‌اید، Next.js به شما هشدار می‌دهد که دارید از `useState` داخل یک **Server Component** استفاده می‌کنید.
برای رفع این مشکل، دکمه تعاملی "Like" را به یک **Client Component** منتقل کنید.

1. یک فایل جدید به نام `like-button.js` در پوشه‌ی `app` ایجاد کنید:

```javascript
/app/like-button.js

export default function LikeButton() {}
```

2. عنصر `<button>` و تابع `handleClick()` را از `page.js` به این کامپوننت منتقل کنید:

```javascript
/app/like-button.js

export default function LikeButton() {
  function handleClick() {
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
```

3. سپس **state** مربوط به `likes` و import آن را اضافه کنید:

```javascript
/app/like-button.js

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
```

4. برای اینکه این کامپوننت یک **Client Component** باشد، در بالای فایل دستور `'use client'` را اضافه کنید:

```javascript
/app/like-button.js

'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
```

5. حالا در `page.js`، کامپوننت `LikeButton` را وارد کنید:

```javascript
/app/page.js

import LikeButton from './like-button';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
```

حالا وقتی فایل‌ها را ذخیره کرده و برنامه را در مرورگر مشاهده کنید، خطاها رفع شده‌اند و با هر تغییر، مرورگر به‌طور خودکار به‌روز می‌شود.
این ویژگی به نام **Fast Refresh** شناخته می‌شود و بازخورد فوری روی تغییرات شما می‌دهد که به‌طور پیش‌فرض در Next.js فعال است.

---

### خلاصه

- با محیط‌های **سرور** و **کلاینت** آشنا شدید و دانستید چه زمانی از هر کدام استفاده کنید.
- یاد گرفتید که Next.js به طور پیش‌فرض از **React Server Components** استفاده می‌کند تا عملکرد برنامه بهتر شود.
- فهمیدید که چگونه می‌توانید بخش‌های کوچکی از رابط کاربری را تعاملی کنید و به **Client Components** تبدیل کنید.

<!-- -------------------------------------------- -->
<hr style="height:5px; background-color:red" />
<!-- -------------------------------------------- -->

سؤال خیلی خوبیه 👌

بذار روشن کنم:

در **Next.js** وقتی می‌گیم **SSR (Server Side Rendering)** پویاست، یعنی:

- هر بار که کاربر یک صفحه رو درخواست می‌کنه، **در همون لحظه** رندر سمت سرور انجام میشه.
- داده‌ها و HTML خروجی ممکنه بر اساس شرایط مختلف **تغییر کنه**:

  - ورودی کاربر (مثل query params یا فرم)
  - کوکی‌ها یا session
  - داده‌های به‌روز از دیتابیس یا API

- نتیجه‌ی HTML تولید شده **cache نمی‌شه به‌صورت استاتیک** (بر خلاف SSG).

پس:

🔹 **SSR پویا** = هر ریکوئست → اجرای دوباره فانکشن سروری (مثل `getServerSideProps`) → ساخت HTML جدید با داده‌های تازه.

مثال ساده:

```js
export async function getServerSideProps(context) {
  const res = await fetch("https://api.example.com/products");
  const data = await res.json();

  return { props: { products: data } };
}
```

- هر بار که کاربر صفحه رو باز می‌کنه → API فراخوانی میشه → لیست محصولات جدید ساخته میشه → HTML تازه به کاربر تحویل داده میشه.

---

در مقابل:

- **SSG (Static Site Generation)** = خروجی **ثابت** در زمان build یا revalidate.
- **SSR پویا** = خروجی **هر بار تازه** در زمان request.

<!-- -------------------------------------------- -->
<hr style="height:5px; background-color:red" />
<!-- -------------------------------------------- -->

آره 👌 خیلی نکته‌ خوبی گفتی.
ولی تفاوت **CSR** و **SSR پویا** اینجاست:

---

### 🔹 **CSR (Client Side Rendering)**

- صفحه‌ی HTML خام (تقریباً خالی) از سرور میاد.
- بعد جاوااسکریپت روی مرورگر کاربر اجرا میشه و داده‌ها از API گرفته میشه.
- اینجا **رندر همیشه پویا** هست چون داده‌ها در مرورگر گرفته و رندر میشن.
- ولی: محتوای اولیه‌ای که از سرور میاد خالیه → **SEO ضعیف‌تر** و **زمان اولین نمایش کندتر**.

---

### 🔹 **SSR (Server Side Rendering) پویا**

- سرور همون لحظه، HTML کامل رو می‌سازه و به کاربر میده.
- داده‌ها هر بار تازه از API یا دیتابیس میاد.
- پویا هست، ولی فرقش با CSR اینه که **رندر اولیه** روی سرور انجام شده → کاربر از همون اول محتوای کامل می‌بینه، SEO قوی‌تره.

---

### ✅ نتیجه

- CSR = پویاست، ولی رندرش فقط روی کلاینت انجام میشه.
- SSR پویا = پویاست، ولی رندر اولیه روی سرور انجام میشه (بهتر برای SEO و UX).

---

دقیقاً 🎯 درست گرفتی.

- **SSG (Static Site Generation)** → خروجی **ایستا**ست. یعنی در زمان build یک بار ساخته میشه و تا وقتی دوباره build یا revalidate نکنی، همون HTML قدیمی به همه داده میشه → پس **پویا نیست** (مگر با ISR که باز هم نیمه‌پویا میشه).

- **SSR** → پویاست چون در هر request دوباره روی سرور رندر میشه.

- **CSR** → پویاست چون داده‌ها در مرورگر هر بار از API گرفته و رندر میشن.

---

✅ خلاصه خیلی کوتاه:

- **SSG** = ایستا ❌ (غیرپویا)
- **SSR** = پویا ✔️
- **CSR** = پویا ✔️

---

[![Screenshot-2025-09-17-035000.png](https://i.postimg.cc/Pqrdvw0G/Screenshot-2025-09-17-035000.png)](https://postimg.cc/cvjpVrsT)

<!-- -------------------------------------------- -->
<hr style="height:5px; background-color:red" />
<!-- -------------------------------------------- -->
