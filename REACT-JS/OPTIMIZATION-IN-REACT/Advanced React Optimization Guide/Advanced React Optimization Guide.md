# ⚛️ Advanced React Optimization Guide

This repository is a **complete React performance & optimization handbook**, written with **real-world examples**, **interview clarity**, and **system-design thinking**.

---

## 📌 Topics Covered

* useMemo (Deep Dive)
* Custom Hooks
* HOC (Higher Order Components)
* List Optimization
* Lazy Loading & Code Splitting
* Pure React Performance Project
* System Design Angle for React Apps

---

# 1️⃣ useMemo – DEEP DIVE

## ❓ What is useMemo?

`useMemo` memoizes a **computed value** so React does not recalculate it on every render.

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

---

## ❌ Problem: Expensive Calculation

```jsx
function App() {
  const [count, setCount] = useState(0);

  const heavyCalc = () => {
    console.log("heavy calculation");
    let total = 0;
    for (let i = 0; i < 1e7; i++) total += i;
    return total;
  };

  const result = heavyCalc();

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

❌ heavyCalc runs on EVERY render.

---

## ✅ Fix with useMemo

```jsx
const result = useMemo(() => heavyCalc(), []);
```

✔️ Runs once
✔️ Performance boost

---

## 🔥 useMemo for Object / Array Props

```jsx
const data = useMemo(() => ({ name: "Rahul" }), []);
<Child data={data} />;
```

✔️ Stable reference
✔️ React.memo works correctly

---

# 2️⃣ Custom Hooks

## ❓ What is a Custom Hook?

A custom hook extracts **reusable logic** from components.

---

## ✅ Example: useCounter

```jsx
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return { count, increment, decrement };
}
```

```jsx
const { count, increment } = useCounter(10);
```

✔️ Clean code
✔️ Reusable logic

---

# 3️⃣ HOC (Higher Order Component)

## ❓ What is HOC?

A function that **takes a component and returns an enhanced component**.

---

## ✅ Example: withAuth

```jsx
const withAuth = (Component) => {
  return function Protected(props) {
    const isLoggedIn = true;
    if (!isLoggedIn) return <p>Login Required</p>;
    return <Component {...props} />;
  };
};
```

```jsx
export default withAuth(Dashboard);
```

✔️ Cross-cutting logic
✔️ Reusability

---

# 4️⃣ List Optimization

## ❌ Problem: Large List Rendering

```jsx
items.map(item => <Item key={item.id} item={item} />)
```

---

## ✅ Optimization Techniques

* Use `React.memo`
* Use correct `key`
* Pagination / infinite scroll
* Virtualization (react-window)

```jsx
const Item = React.memo(({ item }) => <li>{item.name}</li>);
```

---

# 5️⃣ Lazy Loading & Code Splitting

## ❓ Why?

Reduce initial bundle size.

---

## ✅ Example

```jsx
const Dashboard = React.lazy(() => import("./Dashboard"));
```

```jsx
<Suspense fallback={<Loader />}>
  <Dashboard />
</Suspense>
```

✔️ Faster initial load

---

# 6️⃣ Pure React Performance Project (Idea)

### 🔥 Project: High Performance Product Dashboard

**Features:**

* Large product list (10k+ items)
* Memoized cards
* useCallback for actions
* useMemo for filters
* Lazy-loaded routes

**Tech:**

* React
* Context API
* React.memo

---

# 7️⃣ System Design Angle (React)

## 🧠 Think React as System

### Key Decisions:

* Component granularity
* State location
* Re-render boundaries
* Network caching
* UI virtualization

---

## 🧠 Optimization Checklist

* Memoize heavy components
* Avoid prop drilling
* Split bundles
* Cache API responses
* Use pagination

---

## 🆚 Comparison Summary

| Tool        | Use Case            | Avoid When        |
| ----------- | ------------------- | ----------------- |
| React.memo  | Prevent re-render   | Small components  |
| useCallback | Function props      | No child memo     |
| useMemo     | Heavy calc / object | Cheap calc        |
| Custom Hook | Reuse logic         | One-time logic    |
| HOC         | Cross logic         | Simple components |

---

## 🎯 Interview Ready Lines

* useMemo caches values, useCallback caches functions
* React optimization is about reducing re-renders
* Over-optimization is bad
* Measure before optimize

---

### ⭐ Star this repo if it helped you 🚀
