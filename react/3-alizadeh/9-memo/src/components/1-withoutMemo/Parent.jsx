import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Child");

  return (
    <div>
      <h2>Child without Memo</h2>
      
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setText(text + "!")}>Change Text</button>

      <h3>Count: {count}</h3>

      <Child text={text} />
      <hr className="hr1"/>
    </div>
  );
}
