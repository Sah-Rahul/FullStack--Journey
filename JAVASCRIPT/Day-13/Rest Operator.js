// Function parameters
function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3)); // 6

// Object destructuring with rest
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(rest); // { c: 3, d: 4 }
