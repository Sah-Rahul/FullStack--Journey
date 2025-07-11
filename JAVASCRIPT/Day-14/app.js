// 📌 MODULE SYSTEM EXAMPLES (without actual files, for concept understanding)

// Named export concept
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// Default export concept
const greet = (name) => `Hello, ${name}!`;

// Usage example
console.log(add(2, 3));       // 5
console.log(sub(7, 4));       // 3
console.log(greet("Rahul"));  // Hello, Rahul!


// 📌 NULLISH COALESCING (??) vs OR (||)

let username = null;
let displayName = username ?? "Guest";  // ✅ "Guest"
console.log("Username:", displayName);

let count = 0;
let finalCount = count ?? 100;  // ✅ 0 (not 100)
console.log("Count:", finalCount);

let name1 = "";
let nameFallback = name1 || "Anonymous";      // ❌ "Anonymous" (wrong if "" is valid)
let nameSafe = name1 ?? "Anonymous";          // ✅ "" (because it's not null/undefined)
console.log("Safe Name:", nameSafe);


// 📌 ERROR HANDLING

// try-catch-finally
try {
  let data = JSON.parse('{"valid": true}'); // ✅ Valid JSON
  console.log("Parsed:", data);
} catch (err) {
  console.log("❌ Error parsing JSON:", err.message);
} finally {
  console.log("✅ This runs no matter what.");
}

// Custom error using throw
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log("Result:", result);
} catch (err) {
  console.log("❌ Division error:", err.message);
}
