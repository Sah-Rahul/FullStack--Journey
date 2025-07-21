import Greet from "./components/Greet";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>🚀 Props & Reusability</h1>
      <Greet name="Rahul" />
      <Greet name="Anjali" />
      <hr />
      <Card title="React" desc="Library for building UIs" />
      <Card title="Node.js" desc="Runtime to run JS outside browser" />
    </>
  );
}

export default App;
