try {
  let json = '{"name": "Rahul"}';
  let user = JSON.parse(json); //   Valid JSON
  console.log(user.name);
} catch (error) {
  console.log("❌ JSON error:", error.message);
} finally {
  console.log("✅ Done parsing JSON");
}

// throw – Manually Throw Errors

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.log("⚠️ Error  caught:", err.message);
}

// Real World Example – Handling API Error

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
