import { useAuth } from "./AuthContext";

function Navbar() {
  const { user, login, logout } = useAuth();

  return (
    <nav style={{ padding: "1rem", backgroundColor: "#ddd" }}>
      <h2> Auth Navbar</h2>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("Rahul")}>Login</button>
      )}
    </nav>
  );
}

export default Navbar;
