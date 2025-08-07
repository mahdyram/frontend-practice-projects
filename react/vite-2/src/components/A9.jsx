import { useState, useEffect } from "react";

export default function A9() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("Count", count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click to incrice</button>
      <button onClick={() => setCount(count - 1)}>Click to decrice</button>
      <button onClick={() => setCount(0)}>Click to reset</button>
      <p>You clicked -{count}- times</p>
      <hr className="hr1" />
    </div>
  );
}
