import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const newUser = `${name} (${email})`;
      setUsers([...users, newUser]);
      setName("");
      setEmail("");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 React Form Handling & List</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Add User
        </button>
      </form>

      <hr />

      <h2>User List:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} style={styles.listItem}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    padding: "20px",
    maxWidth: "500px",
    margin: "auto",
    background: "#f4f4f4",
    borderRadius: "10px"
  },
  heading: {
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "8px",
    fontSize: "16px" 
  },
  button: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px"
  },
  listItem: {
    margin: "5px 0"
  }
};

export default App;
