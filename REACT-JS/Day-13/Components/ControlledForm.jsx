import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2> Controlled Component</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "Stranger"}!</p>
    </div>
  );
}

export default ControlledForm;
