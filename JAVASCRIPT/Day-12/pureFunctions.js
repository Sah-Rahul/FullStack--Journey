// ❌ Impure Function (changes external variable)
let total = 0;
function addToTotal(num) {
  total += num; // Side effect
  return total;
}

// ✅ Pure Function (no side effects)
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8
console.log(add(5, 3)); // 8 (always same)
