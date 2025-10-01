import { useState } from "react";
import Child3 from "./Child3";

export default function Primitive() {
  const [count, setCount] = useState(0);
  const text = "Child3";

  return (
    <div>
      <h2>Memo with Primitive types</h2>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h3>Count: {count}</h3>

      <Child3 text={text} />
      <hr className="hr1" />
    </div>
  );
}
