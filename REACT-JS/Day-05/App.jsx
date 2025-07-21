import { useState } from "react";
import { FaEye, FaEyeSlash, FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        background: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1> Toggle Features in React</h1>

      {/* Dark Mode Toggle */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />} Toggle Theme
      </button>

      <hr />

      {/* Password Toggle */}
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>

      <hr />

      {/* Conditional Content */}
      {darkMode ? <p>🌙 Dark Mode is ON</p> : <p>☀️ Light Mode is ON</p>}
    </div>
  );
}

export default App;
