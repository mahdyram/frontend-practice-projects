import { useEffect, useRef, useState } from "react";

function Child() {
  const boxRef = useRef(null);

  useEffect(() => {
    const clickHandler = () => {
      console.log("🖱 Box clicked");
    };

    const box = boxRef.current;
    if (box) {
      box.addEventListener("click", clickHandler);
      console.log("🟢 Event listener added");
    }

    return () => {
      if (box) {
        box.removeEventListener("click", clickHandler);
        console.log("🔴 Event listener removed");
      }
    };
  }, []);

  return (
    <div ref={boxRef} className="divBox1">
      Click inside this box
    </div>
  );
}

export default function A16() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>A16</h2>
      <div style={{ display: "inline-block" }}>
        <button onClick={() => setShow(!show)}>Toggle Child Component</button>
        {show && <Child />}
      </div>
      <hr className="hr1" />
    </div>
  );
}
