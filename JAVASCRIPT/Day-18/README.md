# 🚀 JavaScript Day 18 – Module System (import / export)

Today I explored the ES6 **Module System** — one of the most important features for writing clean, scalable, and maintainable code in modern JavaScript.

---

## 📚 What Are JavaScript Modules?

Modules let us **split code into multiple files** and reuse them by exporting & importing.  
This helps:

- Avoid global variable pollution
- Keep logic organized
- Reuse functions and variables across files

---

## ✅ Why Use Modules?

| Without Modules           | With Modules                       |
| ------------------------- | ---------------------------------- |
| All code in one file 🧠💥 | Code split into reusable pieces 🧩 |
| Hard to maintain 🧱       | Easy to debug/test 🧪              |
| Global scope pollution ❌ | Local scope (encapsulated) ✅      |

---

## ✅ Types of Export

### 🔹 1. Named Export

Exporting multiple things from a file using `export`.

```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

### Import like this:

```js
// main.js
import { add, subtract } from "./math.js";
```

## 🔹 2. Default Export

Only one default export per file. Useful when exporting a single main thing.

```js
// greet.js
export default function greet(name) {
  console.log(`Hello, ${name}`);
}
```

## Import like this:

```js
import greet from "./greet.js";
```

## 🛠️ HTML Setup for Modules

```js
You must add type="module" to your <script> tag:

(<script type="module" src="main.js"></script>)``;
```
## ✅ Summary
📌 JavaScript modules keep your codebase clean and DRY

📌 Use export / import to organize logic

📌 Every major framework (React, Vue, Node.js) relies on modules