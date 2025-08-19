import { useEffect, useState } from "react";

export default function A11() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Render!!");

    return () => {
      console.log("Clean-Up!!");
    };
  }, [count]);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <hr className="hr1" />
    </div>
  );
}
