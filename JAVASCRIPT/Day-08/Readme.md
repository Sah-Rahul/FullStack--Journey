# 🚀 JavaScript Learning Journey

This repository contains my daily progress in learning JavaScript from beginner to advanced.

---

## 📅 Day 8: Promise Chaining + Callback Hell

### 📚 What I Learned Today:

✅ What is Promise Chaining and how to connect promises step-by-step.  
✅ Built a complete Promise Chaining example to run tasks in sequence.  
✅ Learned about Callback Hell: deeply nested callbacks that are hard to maintain.  
✅ Built a complete Callback Hell example and understood why it’s bad.  
✅ Compared Callback Hell vs Promise Chaining.

---

## 📚 What is Promise Chaining?

👉 Promise Chaining is a technique to run **multiple asynchronous tasks in sequence** by connecting `.then()` methods one after another.

👉 It helps keep the code **clean, readable, and easy to debug.**

### ✅ Example: Promise Chaining

```js
function task(time, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve();
    }, time);
  });
}

task(1000, "Step 1 completed")
  .then(() => task(1000, "Step 2 completed"))
  .then(() => task(1000, "Step 3 completed"))
  .then(() => task(1000, "Step 4 completed"))
  .then(() => console.log("All steps done!"))
  .catch((err) => console.log("Error:", err));
```

## ✅ Key Points:

- Each .then() waits for the previous promise to resolve.

- Clean structure.

- Easy to handle errors using .catch().

## 📚 What is Callback Hell?

👉 Callback Hell happens when callbacks are nested inside callbacks many times, creating code that is hard to read, maintain, and debug.

👉 It looks like a staircase and is also called "Pyramid of Doom."

## ✅ Example: Callback Hell

```js
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback();
  }, 1000);
}

function step4(callback) {
  setTimeout(() => {
    console.log("Step 4 completed");
    callback();
  }, 1000);
}

// Callback Hell Example
step1(() => {
  step2(() => {
    step3(() => {
      step4(() => {
        console.log("All steps done!");
      });
    });
  });
});
```

## ✅ Key Problems:

- Very messy and hard to read.

- Difficult to handle errors.

- Not scalable for large projects.

## 🔍 Quick Comparison: Callback Hell vs Promise Chaining

| Feature        | Callback Hell | Promise Chaining |
| -------------- | ------------- | ---------------- |
| Readability    | ❌ Poor       | ✅ Clean         |
| Error Handling | ❌ Difficult  | ✅ Easy          |
| Scalability    | ❌ Complex    | ✅ Simple        |
| Modern Use     | ❌ Avoided    | ✅ Recommended   |

### 🔥 My Note:

Promise Chaining makes asynchronous JavaScript clean and easy to follow, but Callback Hell creates messy and unreadable code. I now understand why using Promises or async/await is a best practice.

---

_I will continue updating this repository with my daily learning progress. Stay tuned!_
