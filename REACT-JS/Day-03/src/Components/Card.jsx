function Card({ title, desc }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
export default Card;
