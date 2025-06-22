import { useState } from "react";

function Footer2() {
  const [count, setCount] = useState(4);

  const [mas, setMas] = useState("no data loaded");
  const changeMas = () => {
    setMas("loading...");
  };

  const [clr, setColor] = useState("black");
  const handleColor = () => {
    setColor(clr === "black" ? "red" : "black");
  };

  const [isRed, setIsRed] = useState(false);
  const handleColor2 = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <h2>Footer Section 2:</h2>

      {/* state: */}
      <p>تعداد: {count}</p>
      <button onClick={() => setCount(count + 1)}>increse</button>

      <p>{mas}</p>
      <button onClick={changeMas}>change mas</button>

      <p style={{ color: clr }}>Doubleclick to change color</p>
      <button onClick={handleColor}>Change Color</button>

      <p className={isRed ? "redText" : "normalText"}>
        Doubleclick to change color
      </p>
      <button onDoubleClick={handleColor2}>Change Color</button>
      <hr />
    </div>
  );
}

export default Footer2;
