import { useState } from "react";

export default function Pizza() {
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    const newPizza = count + 1;
    setCount(newPizza);
  };
  const handleRemove = () => {
    const newPizza = count + 1;
    setCount(newPizza);
  };
  const pizzStyle = {
    border: "2px solid tomato",
    margin: "15px",
    padding: "20px",
    borderRadius: "15px",
  };
  return (
    <div style={pizzStyle}>
      <h2>Buy Pizza:{ count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remve</button>
    </div>
  );
}
