# 🚨 JavaScript Day 16 – Error Handling (`try`, `catch`, `finally`, `throw`)

Today I learned how to handle errors gracefully in JavaScript using built-in constructs.

---

## 📚 Topics Covered:

### 1️⃣ What is Error Handling?

Error handling helps us:

- Prevent app crashes
- Show helpful messages to users
- Debug issues quickly

---

### 2️⃣ `try`, `catch`, `finally`

#### ✅ Syntax:

```js
async function fetchData() {
  try {
    const res = await fetch("https://api.invalidurl.com/data");
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("❌ API Error:", error.message);
  } finally {
    console.log("📡 Request Finished");
  }
}
fetchData();
```
## 📌 Summary
| Concept   | Use Case                     |
| --------- | ---------------------------- |
| `try`     | Wrap risky code              |
| `catch`   | Handle error gracefully      |
| `finally` | Always run cleanup logic     |
| `throw`   | Create your own custom error |
