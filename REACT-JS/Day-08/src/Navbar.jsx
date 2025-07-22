import { useTheme } from "./ThemeContext";

function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        backgroundColor: dark ? "#333" : "#eee",
        color: dark ? "#fff" : "#000",
        padding: "1rem",
      }}
    >
      <h2> My Navbar</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}

export default Navbar;
