import { useState } from "react";
import Child4 from "./Child4";

const text = { name: "Child4" };

export default function Reference() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Memo with Reference types</h2>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h3>Count: {count}</h3>

      <Child4 text={text} />
      <hr className="hr1" />
    </div>
  );
}
