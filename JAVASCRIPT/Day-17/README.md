# 🚀 JavaScript Day 17 – Event Delegation & Memory Leaks

Today I explored two crucial JavaScript topics that are often overlooked by beginners but extremely important for building **scalable and optimized applications**.

---

## 🧠 What is Event Delegation?

**Event Delegation** is a technique in JavaScript where instead of adding event listeners to multiple child elements, we **attach a single event listener to a common parent**, and detect the clicked child using `event.target`.

This works because of a concept called **event bubbling**, where events propagate from the child → parent → root.

---

### ✅ Why Use Event Delegation?

- 📈 **Performance Boost** – Fewer listeners means less memory usage.
- 🔁 **Dynamic Elements** – Works even for elements added later via JavaScript.
- ✅ Clean & Maintainable Code

---

### 🔍 Real Example: To-Do List

```html
<ul id="todoList">
  <li>Buy Groceries</li>
  <li>Read Book</li>
  <li>Build a Project</li>
</ul>

<script>
  const todoList = document.getElementById("todoList");

  todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.style.textDecoration = "line-through";
      console.log("Completed:", e.target.textContent);
    }
  });
</script>
```

- ✅ Even if new  items are added later, this single listener will still work!

# 💣 What is a Memory Leak?

A Memory Leak in JavaScript occurs when your app consumes memory but fails to release it even after it’s no longer needed.

This can cause:

- 🐢 Slow performance

- 🧠 High RAM usage

- 💥 Browser crashes (especially in SPAs like React apps)
## 🔥 Common Causes of Memory Leaks:

| Cause                          | Example                                    |
| ------------------------------ | ------------------------------------------ |
| 🔁 Uncleared timers            | `setInterval()` not stopped                |
| 🧷 Event listeners not removed | `addEventListener()` used but no `remove`  |
| 👻 Detached DOM references     | DOM removed but still held in JS variables |
| 🧠 Closures holding memory     | Functions keeping old objects in memory    |

## 🔍 Leak Example (Don’t do this)
```js
let btn = document.getElementById("submit");

function handleClick() {
  console.log("Button Clicked");
}

// ❌ Not removed later — causes memory leak if button is deleted
btn.addEventListener("click", handleClick);
```
## ✅ Best Practices to Avoid Leaks:
- Use removeEventListener when cleaning up

- Always clear intervals and timeouts

- Use let/const instead of global variables

- Break unnecessary closures

- Use tools like Chrome DevTools → Memory Tab → Heap Snapshot

## 📝 Summary
- ✅ Event Delegation improves performance by reducing the number of event listeners.

- ✅ It’s powerful for handling dynamic content (like lists or cards).

- ❌ Memory Leaks can silently kill performance if you’re not careful with timers, listeners, and closures.

- ✅ Clean up your code regularly and avoid holding on to old DOM nodes or large objects.
---
*I will continue updating this repository with my daily learning progress. Stay tuned!*