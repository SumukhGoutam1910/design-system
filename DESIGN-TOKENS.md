# 🎨 Sumukh Design System – Tokens

This file documents the color, spacing, and typography tokens used in the project.

---

## 🎨 Color Tokens

| Token      | Description         | Class Name         |
|------------|---------------------|--------------------|
| Primary    | Main brand color    | `bg-indigo-500`    |
| Secondary  | Accent elements     | `bg-pink-500`      |
| Success    | Positive messages   | `bg-green-500`     |
| Warning    | Cautionary tone     | `bg-yellow-400`    |
| Error      | Errors or issues    | `bg-red-500`       |
| Info       | Informational       | `bg-blue-500`      |
| Surface    | Card backgrounds    | `bg-white/10`      |
| Background | Page background     | `bg-neutral-900`   |
| Text       | Main text color     | `text-white`       |

---

## 📏 Spacing Tokens

| Token   | Value   | Tailwind Class |
|---------|---------|----------------|
| XS      | 4px     | `h-1`          |
| SM      | 8px     | `h-2`          |
| MD      | 16px    | `h-4`          |
| LG      | 24px    | `h-6`          |
| XL      | 32px    | `h-8`          |

---

## 🔤 Typography Tokens

| Token       | Class                | Sample                  |
|-------------|----------------------|--------------------------|
| Heading 1   | `text-4xl font-bold` | The quick brown fox     |
| Heading 2   | `text-2xl font-bold` | The quick brown fox     |
| Body Text   | `text-base`          | The quick brown fox     |
| Caption     | `text-sm`            | The quick brown fox     |

---

## ♿ Accessibility (WCAG 2.1 AA Contrast)

| Text on Background     | Contrast Ratio | WCAG Compliant |
|------------------------|----------------|----------------|
| White on #111827       | 12.6:1         | ✅ Yes (AA/AAA) |
| Indigo-500 on white    | 4.8:1          | ✅ Yes (AA)     |
| Yellow-400 on black    | 14.1:1         | ✅ Yes (AAA)    |
| Red-500 on white       | 3.9:1          | ⚠️ No (Use bolder text) |

---