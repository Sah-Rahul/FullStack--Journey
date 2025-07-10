const user = { name: "Rahul", address: { city: "Kathmandu" } };
console.log(user?.address?.city);
 // Kathmandu
console.log(user?.contact?.phone);
 // undefined (no error)
