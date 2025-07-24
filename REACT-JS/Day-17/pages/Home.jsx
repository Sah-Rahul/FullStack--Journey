import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1> Home Page</h1>
      <p>Welcome to the home page.</p>
      <nav>
        <Link to="/about">About</Link> |<Link to="/dashboard">Dashboard</Link> |
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default Home;
