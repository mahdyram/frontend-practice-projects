import { useState } from "react";

export default function A1() {
  const [num, setNum] = useState(0);

  const handleClick = (action, value) => {
    switch (action) {
      case "+":
        return setNum((prev) => prev + value);
      case "-":
        return setNum((prev) => prev - value);
      case "reset":
        return setNum(0);
    }
  };
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={() => handleClick("-", 1)}> -1 </button>
      <button onClick={() => handleClick("+", 1)}> +1 </button>
      <button onClick={() => handleClick("reset")}> reset </button>
      <button onClick={() => handleClick("-", 10)}> -10 </button>
      <button onClick={() => handleClick("+", 10)}> +10 </button>
      <hr className="hr1" />
    </div>
  );
}
