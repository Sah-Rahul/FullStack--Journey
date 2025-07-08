// 🔸  Currying
// "Function that takes one argument at a time and returns a new function."

// Normal function
function multiply(a, b) {
  return a * b;
}

// Curried version
function curriedMultiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = curriedMultiply(2);
console.log(double(5)); // 10
