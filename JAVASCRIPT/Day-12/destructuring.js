// ✅ Object Destructuring
const user = {
  name: "Rahul",
  age: 21,
  address: {
    city: "Kathmandu",
    country: "Nepal",
  },
};

const { name, age } = user;
console.log(name); // Rahul
console.log(age);  // 21

// ✅ Nested Destructuring
const {
  address: { city, country },
} = user;

console.log(city);    // Kathmandu
console.log(country); // Nepal

// ✅ Renaming & Default Values
const { name: userName = "Guest" } = user;
console.log(userName); // Rahul

// ✅ Array Destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;

console.log(first);  // red
console.log(second); // green

// ✅ Array Destructuring with Default
const [a = 1, b = 2, c = 3] = [undefined, 5];
console.log(a, b, c); // 1 5 3
