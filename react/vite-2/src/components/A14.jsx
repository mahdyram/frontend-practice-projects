import { useEffect, useState } from "react";

function Child() {
  useEffect(() => {
    console.log("🟢 Child mounted");

    return () => {
      console.log("🔴 Child unmounted");
    };
  }, []);

  return <div>I'm the child</div>;
}

export default function A14() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>A14</h2>
      <button onClick={() => setShow(!show)}>Toggle Child Component</button>
      {show && <Child />}
      <hr className="hr1" />
    </div>
  );
}
