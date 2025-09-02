باشه، پس از صفر تا صد با **pnpm** می‌گم که پروژه Vite + React + MUI + Redux رو روی **GitHub Pages** دیپلوی کنی.

---

## 1️⃣ آماده‌سازی پروژه برای GitHub Pages

1. مطمئن شو پروژه buildable هست:

```bash
pnpm run build
```

این دستور یه پوشه‌ی `dist/` می‌سازه که حاوی فایل‌های آماده برای دیپلوی هست.

2. در `package.json`، یه **homepage** اضافه کن:

```json
{
  "name": "intermediate-smartshop",
  "version": "0.0.0",
  "homepage": "https://<username>.github.io/<repo-name>"
}
```

- `<username>` = نام کاربری GitHub تو
- `<repo-name>` = نام ریپو روی GitHub

---

## 2️⃣ نصب gh-pages

```bash
pnpm add -D gh-pages
```

بعد در `package.json` دو اسکریپت اضافه کن:

```json
"scripts": {
  "predeploy": "pnpm run build",
  "deploy": "gh-pages -d dist"
}
```

- `predeploy` قبل از deploy build می‌سازه.
- `deploy` محتویات `dist` رو روی branch `gh-pages` می‌فرسته.

---

## 3️⃣ ساخت ریپو و push کردن پروژه به GitHub

1. روی GitHub یه ریپو بساز (همون `<repo-name>` که در homepage گذاشتی).
2. پروژه رو git init کن و push کن:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

---

## 4️⃣ تنظیم `vite.config.js` برای روتینگ React Router

اگه پروژه React Router داره و مسیر `/` درست کار نکنه، یه فایل `vite.config.js` بساز:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/<repo-name>/", // اسم ریپو GitHub
});
```

---

## 5️⃣ دیپلوی کردن پروژه

حالا فقط کافیه:

```bash
pnpm run deploy
```

- این دستور `dist` رو روی branch `gh-pages` می‌فرسته و سایتت روی

```
https://<username>.github.io/<repo-name>
```

قابل مشاهده می‌شه.

---

💡 نکته‌ها:

- چون React Router داری، حتما `base` در `vite.config.js` تنظیم بشه.
- آیکون‌ها، فونت‌ها، و فایل‌های MUI باید درست لود بشن، وگرنه مسیرها باید با `/repo-name/` شروع بشن.

---

اگر بخوای، می‌تونم یه **نسخه کامل آماده `package.json` + `vite.config.js` با pnpm** درست کنم که فقط با دو دستور `pnpm install` و `pnpm run deploy` کل پروژه دیپلوی بشه و روتینگ هم درست کار کنه.

میخوای برات آماده کنم؟
