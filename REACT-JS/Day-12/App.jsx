import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔍 useRef – Focus Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
      />
      <button onClick={handleClick} style={{ marginLeft: "10px" }}>
        Focus Input
      </button>
    </div>
  );
}

export default App;
