import React, { useEffect, useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count changed:", count);
  }, [count]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>{count}</h1>

      <button
        style={{
          background: "black",
          color: "white",
          padding: "10px 20px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        click me
      </button>

      <Child count={count} />
    </div>
  );
};

export default App;
