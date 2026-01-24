# ⚛️ React Optimization Basics

 

## 📌 Topics Covered (So Far)
- React re-render problem
- `React.memo`
- `useCallback`
- `React.memo + props issue`
- Comparison & best practices

---

## ❓ Why Optimization is Needed
React **re-renders components whenever state or props change**. Many times, child components re-render **without needing to**, causing performance issues.

---

## 🚫 Problem: Unnecessary Re-render

```jsx
import React, { useState } from "react";

const Child = () => {
  console.log("Child render");
  return <h2>Child</h2>;
};

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Child />
    </>
  );
}
```

❌ Child re-renders even though it does not depend on `count`.

---

## ✅ Solution 1: React.memo

### What is React.memo?
`React.memo` is a **Higher Order Component** that prevents re-rendering if props do not change.

```jsx
import React, { memo } from "react";

const Child = memo(() => {
  console.log("Child render");
  return <h2>Child</h2>;
});

export default Child;
```

✔️ Child will NOT re-render if parent updates without changing props.

---

## ⚠️ React.memo + Props Problem

```jsx
const data = { name: "Rahul" };
<Child data={data} />;
```

❌ Every render creates a **new object reference**, so `React.memo` fails.

---

## ❌ React.memo + Function Prop Issue

```jsx
const Child = React.memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Child onClick={handleClick} />
    </>
  );
}
```

❌ Function reference changes → Child re-renders.

---

## ✅ Solution 2: useCallback

### What is useCallback?
`useCallback` memoizes a **function reference**.

```jsx
import React, { useCallback, useState } from "react";

const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

✔️ Same function reference across renders.

---

## ✅ React.memo + useCallback (Perfect Combo)

```jsx
const Child = React.memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Child onClick={handleClick} />
    </>
  );
}
```

✔️ Parent re-renders
✔️ Child does NOT re-render

---

## 🆚 Comparison Table

| Feature | React.memo | useCallback |
|------|-----------|------------|
| Purpose | Prevent component re-render | Prevent function recreation |
| Used for | Components | Functions |
| Returns | Component | Function |
| Works with | Props | Dependencies |

---

## 🧠 When to Use (Important)

### ✅ Use React.memo when:
- Component is heavy
- Props rarely change

### ✅ Use useCallback when:
- Passing function as props
- Child component is memoized

### ❌ Avoid when:
- Component is small
- No re-render issue exists

---

## 🎯 Interview One-Liners
- React.memo uses shallow comparison
- Functions & objects change by reference
- useCallback optimizes function props
- Over-optimization can hurt performance

---

### ⭐ If you find this useful, give the repo a star!

