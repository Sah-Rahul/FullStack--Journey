// ✅ Shallow Copy (only first level is copied)
let user1 = {
  name: "Rahul",
  address: { city: "Nepal" },
};

let shallowCopy = { ...user1 }; // spread operator

shallowCopy.name = "Sahil";
shallowCopy.address.city = "India"; // ❗ This affects original too

console.log("user1.city:", user1.address.city); // ❌ India
console.log("shallowCopy.city:", shallowCopy.address.city); // India

// ✅ Deep Copy using structuredClone (modern)
let user2 = {
  name: "Rahul",
  address: { city: "Nepal" },
};

let deepCopy = structuredClone(user2);
deepCopy.address.city = "Bhaktapur";

console.log("user2.city:", user2.address.city); // ✅ Nepal
console.log("deepCopy.city:", deepCopy.address.city); // ✅ Bhaktapur

// ✅ Deep Copy using JSON (with limitations)
let jsonCopy = JSON.parse(JSON.stringify(user2));
jsonCopy.address.city = "Pokhara";

console.log("jsonCopy.city:", jsonCopy.address.city); // ✅ Pokhara
console.log("user2.city again:", user2.address.city); // ✅ Nepal
