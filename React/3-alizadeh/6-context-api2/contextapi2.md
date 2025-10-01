### معرفی **Context API** در React

Context API راهی برای **اشتراک‌گذاری داده‌ها** بین کامپوننت‌ها است، بدون اینکه مجبور شویم props را از یک کامپوننت به دیگری (Prop Drilling) منتقل کنیم.

دو بخش اصلی دارد:

1. **ساخت Context** با `createContext()`

2. **استفاده از Provider** برای در دسترس قرار دادن مقدار به همه کامپوننت‌های فرزند

---

## توضیح فایل‌ها به ترتیب

### 1. `ProductsContext.js`

```javascript
import { createContext } from "react";
export const ProductsContext = createContext();
```

- در این فایل یک Context ساخته می‌شود.
- `createContext()` یک شیء Context ایجاد می‌کند که می‌تواند داده را در اختیار تمام کامپوننت‌هایی قرار دهد که از Provider آن استفاده می‌کنند.
- اینجا فقط تعریف Context را داریم، بدون Provider.

---

### 2. `ProductsProvider.jsx`

```javascript
import { ProductsContext } from "./ProductsContext";
export default function ProductsProvider({ children }) {
  return (
    <ProductsContext.Provider value={10000}>
      {children}
    </ProductsContext.Provider>
  );
}
```

- **Provider** ساخته می‌شود که Context را با مقدار `value={10000}` در اختیار کامپوننت‌های فرزندش قرار می‌دهد.
- `children` همان کامپوننت‌هایی هستند که بین تگ‌های `<ProductsProvider>...</ProductsProvider>` قرار می‌گیرند.
- هر کامپوننتی که در داخل این Provider باشد، می‌تواند مقدار 10000 را با `useContext(ProductsContext)` بخواند.

---

### 3. `main.jsx`

```javascript
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductsProvider from "./context/ProductsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
```

- این فایل نقطه شروع اپلیکیشن است.
- `ProductsProvider` دور کل `App` پیچیده شده است، یعنی همه کامپوننت‌های داخل App (و زیرمجموعه‌هایش) به مقدار Context دسترسی خواهند داشت.
- در این حالت، مقدار `10000` در کل اپلیکیشن قابل استفاده است.

---

### جمع‌بندی جریان کار

1. **ساخت Context** → `ProductsContext.js`

2. **ایجاد Provider و مقداردهی** → `ProductsProvider.jsx`

3. **قرار دادن Provider در سطح بالا** → `main.jsx`

4. **استفاده از Context در کامپوننت‌ها** → با هوک `useContext(ProductsContext)`
