# ⚛️ React Lifecycle, Cleanup & Advanced Performance (FINAL GUIDE)

This is the **final missing piece** of React + Next.js optimization.
After this document, you can confidently say:

> "I understand React & Next.js performance at an advanced level."

Copy–paste friendly ✅ | Interview-ready ✅ | Production mindset ✅

---

# 1️⃣ React Lifecycle (Modern – Hooks Based)

> React lifecycle = **component ka janam → update → destroy**

In **functional components**, lifecycle is handled via `useEffect`.

---

## 🔁 Lifecycle Phases

| Phase   | Class Component      | Hooks Equivalent            |
| ------- | -------------------- | --------------------------- |
| Mount   | componentDidMount    | useEffect(() => {}, [])     |
| Update  | componentDidUpdate   | useEffect(() => {}, [deps]) |
| Unmount | componentWillUnmount | cleanup function            |

---

## ✅ Mount (Runs Once)

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

✔️ API call
✔️ event listener attach

---

## 🔄 Update (Runs on Dependency Change)

```jsx
useEffect(() => {
  console.log("Count changed", count);
}, [count]);
```

✔️ reacts to state/props change

---

# 🧹 Cleanup Function (MOST IMPORTANT)

> Cleanup = **memory leak prevention**

Cleanup runs when:

* component unmounts
* before next effect runs

---

## ❌ Problem: Missing Cleanup

```jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);
}, []);
```

❌ Event listener never removed
❌ Memory leak

---

## ✅ Correct Cleanup

```jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

✔️ Clean unmount
✔️ No leak

---

## 🔥 Cleanup with setInterval / API

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("Polling");
  }, 1000);

  return () => clearInterval(id);
}, []);
```

---

## 🧠 Interview Gold Line

> Cleanup function replaces componentWillUnmount in hooks.

---

# 2️⃣ React Lifecycle + Performance

## ❌ Anti-Pattern

```jsx
useEffect(() => {
  heavyCalculation();
});
```

❌ Runs on every render

---

## ✅ Optimized

```jsx
const result = useMemo(() => heavyCalculation(), []);
```

---

# 3️⃣ useEffect vs useMemo vs useCallback

| Hook        | Purpose        | Runs          |
| ----------- | -------------- | ------------- |
| useEffect   | Side effects   | After render  |
| useMemo     | Cache value    | During render |
| useCallback | Cache function | During render |

---

# 4️⃣ Advanced React Patterns (Production)

## ✅ Split Effects by Responsibility

```jsx
useEffect(() => {
  fetchData();
}, []);

useEffect(() => {
  logAnalytics(user);
}, [user]);
```

✔️ Clear lifecycle

---

## ✅ AbortController (API cleanup)

```jsx
useEffect(() => {
  const controller = new AbortController();

  fetch(url, { signal: controller.signal });

  return () => controller.abort();
}, []);
```

✔️ Prevent race conditions

---

# 5️⃣ Next.js Lifecycle Thinking

> Next.js lifecycle is **request based**, not component based.

---

## 🧠 Where Code Runs

| Place            | Runs On |
| ---------------- | ------- |
| Server Component | Server  |
| Client Component | Browser |
| Middleware       | Edge    |
| API Route        | Server  |

---

# 6️⃣ Next.js Cleanup & Performance

## ❓ Do we need cleanup in Next.js?

✔️ In **Client Components** → YES
❌ In **Server Components** → NO (request ends)

---

## ✅ Client Component Cleanup

```jsx
"use client";

useEffect(() => {
  const socket = connect();

  return () => socket.disconnect();
}, []);
```

---

# 7️⃣ Next.js Middleware – ADVANCED

> Middleware runs **before route execution** on **Edge Runtime**.

## ✅ Use Middleware For:

* auth
* redirects
* A/B testing
* geo-based routing

❌ Do NOT use for:

* DB queries
* heavy logic

---

## ⚡ Middleware vs useEffect

| Middleware       | useEffect      |
| ---------------- | -------------- |
| Before request   | After render   |
| Edge             | Browser        |
| Routing decision | UI side-effect |

---

# 8️⃣ System Design – React + Next.js

## 🧠 Mental Model

* Minimize client JS
* Move logic to server
* Isolate re-render boundaries
* Clean side effects

---

## ✅ Performance Checklist (FINAL)

* React.memo for heavy UI
* useCallback for function props
* useMemo for derived data
* Cleanup every side-effect
* Prefer Server Components
* Middleware only for routing logic

---

# 🎯 FINAL INTERVIEW RAPID FIRE

* useEffect cleanup prevents memory leaks
* React lifecycle is hook-driven
* Server Components need no cleanup
* Middleware ≠ Express middleware
* Performance = fewer re-renders + less JS

---

# 🏁 FINAL WORD

If you understand this document:
✔️ You are **production ready**
✔️ You can explain **why**, not just **how**
✔️ This is enough for **React + Next.js interviews**

⭐ End of Advanced Guide
