import { useState } from "react";

export default function A8() {
  // const [count, setCount] = useState(getInitialCount()); // called
  // const [count, setCount] = useState(getInitialCount); // not-called
  const [count, setCount] = useState(() => getInitialCount()); // not-called

  console.log("render");

  function getInitialCount() {
    console.log("Init");
    return 0;
  }

  return (
    <div>
      <h2>Lifecycle: lazy initials</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <hr className="hr1" />
    </div>
  );
}
