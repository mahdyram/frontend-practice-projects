import { useState, useMemo } from "react";

function ExpensiveCalculation(num) {
  console.log("Calculating...");
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += num * 2;
  }
  return total;
}

export default function EC() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const calculation = useMemo(() => ExpensiveCalculation(count), [count]);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={themeStyle} className="container">
      <h2>Expensive Calculation: {calculation}</h2>
      <button onClick={() => setDark((d) => !d)}>Toggle Theme</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
