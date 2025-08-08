import { useState, useEffect } from "react";

export default function A10() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]); // har bar ke count taghir kone, in ejra mishe.

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked -{count}- times</p>
      <hr className="hr1" />
    </div>
  );
}
