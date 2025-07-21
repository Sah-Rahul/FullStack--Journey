import React from "react";

// Reusable Card component
function Card({ title, desc }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

// Example of props drilling
function SubChild({ username }) {
  return <p style={{ fontStyle: "italic" }}>👋 Welcome, {username}!</p>;
}

function Child({ username }) {
  return (
    <div>
      <h2>Child Component</h2>
      <SubChild username={username} />
    </div>
  );
}

function App() {
  const name = "Rahul";

  return (
    <div style={styles.app}>
      <h1> React Props & Reusability</h1>

      <h2>Reusable Cards</h2>
      <Card title="ReactJS" desc="Frontend Library" />
      <Card title="MongoDB" desc="NoSQL Database" />
      <Card title="Express" desc="Backend Framework" />

      <hr />

      <h2>Props Drilling Demo</h2>
      <Child username={name} />
    </div>
  );
}

const styles = {
  app: {
    padding: "20px",
    fontFamily: "Arial",
    textAlign: "center",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    background: "#f9f9f9",
    width: "200px",
    marginInline: "auto",
  },
};

export default App;
