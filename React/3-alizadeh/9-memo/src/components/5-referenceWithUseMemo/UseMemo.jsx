import { useMemo, useState } from "react";
import Child5 from "./Child5";

export default function UseMemo() {
  const [count, setCount] = useState(0);

  const text = useMemo(() => ({ name: "Child5" }), []);

  return (
    <div>
      <h2>Memo with Reference types with useMemo</h2>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h3>Count: {count}</h3>

      <Child5 text={text} />
      <hr className="hr1" />
    </div>
  );
}
