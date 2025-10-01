import { useState, useEffect } from "react";

export default function A11() {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  useEffect(() => {
    localStorage.setItem("Count", count);
  }, [count]);

  return (
    <div>
      <button onClick={handleDecrease}>Click to Decrease</button>
      <button onClick={handleIncrease}>Click to Increase</button>
      <button onClick={handleReset}>Click to Reset</button>
      <p>You clicked {count} times</p>
      <hr className="hr1" />
    </div>
  );
}
