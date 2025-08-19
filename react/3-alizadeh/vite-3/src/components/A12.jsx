import { useEffect, useState } from "react";

function Child() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("👉 Mounted or Updated (count =", count, ")");

    return () => {
      console.log("🧹 Clean-Up (Before Update or Unmount)");
    };
  }, [count]);

  useEffect(() => {
    console.log("🚀 Mounted (first render only)");

    return () => {
      console.log("❌ Unmounted");
    };
  }, []);

  return (
    <div className="countBox">
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}

export default function A12() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Unmount" : "Mount"}
      </button>
      {show && <Child />}
      <hr className="hr1" />
    </div>
  );
}
