import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2> Counter using State</h2>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>➕ Increase</button>
      <button onClick={handleDecrement}>➖ Decrease</button>
    </div>
  );
};

export default Counter;
