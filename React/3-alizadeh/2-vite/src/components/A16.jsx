import { useEffect, useRef, useState } from "react";

export default function A16() {
  const [count, setCount] = useState(0);
  let isFirstRender = true;

  useEffect(() => {
    console.log("updated-1"); // runs on mount and every update of count
  }, [count]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false; // do not run on initial mount
      return;
    }
    console.log("updated-2"); // runs only on updates
  }, [count]);

  return (
    <div>
      <h3>Updates only, skips initial render</h3>
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <hr className="hr1" />
    </div>
  );
}
