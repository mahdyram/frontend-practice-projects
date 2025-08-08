import { useState } from "react";

// some side-effects:
// -Page title
// -Local Storage
// -API

export default function A9() {
  const [count, setCount] = useState(0);

  document.title = count;

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked -{count}- times</p>
      <hr className="hr1" />
    </div>
  );
}
