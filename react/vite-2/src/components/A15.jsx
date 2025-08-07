import { useEffect, useState } from "react";

function Child() {
  useEffect(() => {
    const clickHandler = () => {
      console.log("🖱 Window clicked");
    };

    window.addEventListener("click", clickHandler);
    console.log("🟢 Event listener added");

    return () => {
      window.removeEventListener("click", clickHandler);
      console.log("🔴 Event listener removed");
    };
  }, []);

  return <div>Click anywhere in window</div>;
}

export default function A15() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>A15</h2>
      <button onClick={() => setShow(!show)}>Toggle Child Component</button>
      {show && <Child />}
      <hr className="hr1" />
    </div>
  );
}
