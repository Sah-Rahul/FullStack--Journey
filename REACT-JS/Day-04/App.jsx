import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1> useState Hook Example</h1>

      <h2> Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
      <button onClick={() => setCount(0)}> Reset</button>

      <hr />

      <h2> Hello, {username || "Guest"}</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}

export default App;
