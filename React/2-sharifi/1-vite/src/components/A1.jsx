import { useState } from "react";

export default function A1() {
  let [bg, setBg] = useState("pink");

  let h2Style = {
    display: "inline-block",
    borderRadius: 10,
    padding: 20,
    backgroundColor: bg,
  };

  function handleOption(e) {
    console.log(e.target.value);
    setBg(e.target.value);
  }

  return (
    <div>
      <h2 style={h2Style}>choose color</h2>
      <br />
      <select onChange={handleOption}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>
      <hr className="hr1" />
    </div>
  );
}
