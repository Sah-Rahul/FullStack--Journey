import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${inputRef.current.value}`);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h2> Uncontrolled Component</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
