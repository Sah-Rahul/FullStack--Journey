# Day 12: useRef Hook in React

## 📌 What is `useRef`?

`useRef` is a React Hook that lets you:

- **Access DOM elements directly** (like `document.querySelector`)
- **Store mutable values** that do NOT trigger re-renders
- **Hold values across renders** without causing a re-render

---

## 🧠 Syntax

```js
const ref = useRef(initialValue);
```
- ref.current is the actual value or DOM element.

## useRef Use Cases
| Use Case        | Example                            |
| --------------- | ---------------------------------- |
| Access DOM      | Focus input field                  |
| Hold timer ID   | For cleanup with `clearInterval()` |
| Mutable counter | Track value without re-render      |
### 🚀 Example 1: Focus an Input on Button Click
```js
const inputRef = useRef();

function handleFocus() {
  inputRef.current.focus();
}

<input ref={inputRef} type="text" />
<button onClick={handleFocus}>Focus Input</button>
```
### 🚀 Example 2: Store setInterval ID for Cleanup
```js
const timerRef = useRef();

useEffect(() => {
  timerRef.current = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => clearInterval(timerRef.current);
}, []);
```
##   Example 3 – Stopwatch with useRef
```js
import { useRef, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return; // Already running
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>⏱ Stopwatch: {seconds}s</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer} style={{ margin: "0 10px" }}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;
```
## 🧠 Difference: useRef vs useState
| Feature          | `useRef` | `useState` |
| ---------------- | -------- | ---------- |
| Triggers render? | ❌ No     | ✅ Yes      |
| DOM access       | ✅ Yes    | ❌ No       |
| Store data?      | ✅ Yes    | ✅ Yes      |
## 📚 Summary
- Use useRef to interact with DOM or store values that don't require UI updates.

- Great for managing timers, intervals, or 3rd-party libraries.

