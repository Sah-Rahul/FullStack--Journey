# 🚀 JavaScript Day 12 – Pure Functions, Copy Types, Destructuring

---

## 📚 What I Learned Today

### ✅ 1. Pure Functions

**Definition:**  
A pure function is a function that, given the same input, always returns the same output and does not cause any side effects (like modifying external variables or interacting with the DOM).

**Key Points:**

- Always returns the same output for the same input.
- Does not modify any external or global state.
- No side effects such as DOM manipulation or network calls.

```js
// ❌ Impure Function (has side effects)
let total = 0;
function addToTotal(num) {
  total += num; // Modifies external variable
  return total;
}

// ✅ Pure Function (no side effects)
function add(a, b) {
  return a + b;
}
```

## ✅ 2. Copy Types – Shallow vs Deep Copy

### Definition:

Copying objects in JavaScript can be done in two ways — shallow copy or deep copy — depending on whether nested objects are also copied or just referenced.

### 🔹 Shallow Copy

- Copies only the first-level properties of an object.

- Nested objects are not copied; instead, their references are copied (meaning changes in nested objects affect both copies).

- Created using Object.assign() or spread syntax { ...obj }.

```js
let user = { name: "Rahul", address: { city: "Nepal" } };
let shallow = { ...user };

shallow.address.city = "India"; // ❗ This changes the original object too
```

### 🔹 Deep Copy

- Creates a completely independent copy of an object, including nested objects.

- Changes in the copied object do not affect the original.

Methods for deep copy:

- structuredClone(obj) (modern browsers & Node.js)

- JSON.parse(JSON.stringify(obj)) (limitations: cannot copy functions, undefined, symbols, or circular references)

```js
let deep = structuredClone(user);
deep.address.city = "Bhaktapur"; // ✅ Does NOT affect original
```

### ✅ 3. Destructuring – Clean way to extract values

### Definition:

Destructuring is a syntax that makes it easy to extract values from arrays or properties from objects into distinct variables.

### 🔹 Object Destructuring

```js
const user = { name: "Rahul", age: 21 };
const { name, age } = user;
```

### 🔹 Array Destructuring

```js
const colors = ["red", "blue", "green"];
const [first, second] = colors;
```

### 🔹 Nested Destructuring & Default Values

```js
const user = {
  name: "Rahul",
  address: { city: "Kathmandu" },
};

const {
  address: { city },
} = user;

const [a = 1, b = 2] = [undefined, 10]; // a = 1, b = 10
```

## ✅ Summary

- 📌 Pure functions make your code predictable, testable, and easier to debug.

- 📌 Use deep copy to avoid unintended changes due to shared references in nested objects.

- 📌 Destructuring makes your code cleaner and easier to read by unpacking values from arrays or objects into variables.
