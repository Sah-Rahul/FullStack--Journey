# JavaScript Day 13 – Spread, Rest, Optional Chaining & Ternary

## What I Learned:

- Spread operator (`...`) to clone and merge arrays/objects
- Rest operator (`...`) to collect remaining elements in arrays/objects or function parameters
- Optional chaining (`?.`) to safely access nested properties
- Ternary operator for concise conditional expressions

## Code Examples:

```js
// Spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3];

// Rest
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

// Optional chaining
const city = user?.address?.city;

// Ternary
const status = age >= 18 ? "Adult" : "Minor";
