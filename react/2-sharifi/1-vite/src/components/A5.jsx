import { useRef } from "react";

export default function A5() {
  const ref = useRef(0);
  // ref = {
  //   current: 0,
  // };

  const handleClick = () => {
    ref.current++;
    alert(`counter value : ${ref.current}`);
  };

  return (
    <div>
      <h2>without re-rendering</h2>
      <button onClick={handleClick}>increment and show</button>
      <p>{`counter value : ${ref.current}`}</p>
      <hr className="hr1" />
    </div>
  );
}
