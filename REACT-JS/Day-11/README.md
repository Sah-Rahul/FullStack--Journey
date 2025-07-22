# Day 11: useEffect Hook in React

## 📌 What is `useEffect`?

`useEffect` is a React Hook that lets you perform **side effects** in function components. Side effects include:

- API calls (e.g., `fetch`)
- Subscriptions
- Event listeners
- Timers
- DOM manipulations

It runs **after the component is rendered**.

---

## 🧠 Syntax

```js
useEffect(() => {
  // side effect logic here

  return () => {
    // cleanup code here (optional)
  };
}, [dependencies]);
```

## useEffect Use Cases

| Use Case           | Description                             |
| ------------------ | --------------------------------------- |
| No dependency      | Runs after **every render**             |
| `[]` empty array   | Runs **only once** after initial render |
| `[value]` in array | Runs when the **value changes**         |

## 🚀 Example 1: Run once after mount (Empty dependency)

```js
useEffect(() => {
  console.log("Component mounted");
}, []);
```

## 🚀 Example 2: API Call on Mount

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

## 🚀 Example 3: Cleanup with return()

```js
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running interval...");
  }, 1000);

  return () => clearInterval(interval); // Cleanup on unmount
}, []);
```

### ⚠️ Common Mistakes

- ❌ Forgetting cleanup in timers or event listeners

- ❌ Not specifying dependencies properly

- ❌ Causing infinite loops if dependency keeps changing

## When to Use useEffect?

| Purpose           | Use useEffect?       |
| ----------------- | -------------------- |
| Fetching data     | ✅                   |
| DOM manipulation  | ✅                   |
| Event listeners   | ✅                   |
| Pure calculations | ❌ (useMemo instead) |

### 🎯 Summary

- useEffect helps manage side effects.

- Can mimic lifecycle methods:

- `componentDidMount` → `useEffect(() => {}, [])`

- `componentDidUpdate` →`useEffect(() => {}, [dep])`
- `componentWillUnmount` → `return () => {}`
