# 🚀 JavaScript Day 14 – Module System, Nullish Coalescing & Error Handling

Today I explored how modern JavaScript supports large-scale apps using **Modules**, handles **safe fallbacks** with `??`, and catches failures using **Error Handling**.

---

## ✅ 1. JavaScript Module System

### 🔹 Why Modules?
- Helps **organize code into separate files**
- Promotes **reusability** and **maintainability**
- Reduces global scope pollution

### 🔹 Named Exports
```js
// math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

// main.js
import { add, sub } from './math.js';
