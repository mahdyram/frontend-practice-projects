import { useState } from "react";
import Child2 from "./Child2";

export default function Parent2() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Child2");

  return (
    <div>
      <h2>Child2 with Memo</h2>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setText(text + "!")}>Change Text</button>

      <h3>Count: {count}</h3>

      <Child2 text={text} />
      <hr className="hr1" />
    </div>
  );
}
