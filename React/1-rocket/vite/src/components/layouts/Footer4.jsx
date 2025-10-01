import { useState } from "react";

const Footer4 = () => {
  let load1 = true;
  let load2 = false;

  const [load3, setLoad3] = useState(true);
  const handleChange3 = () => {
    setLoad3(false);
  };

  const [load4, setLoad4] = useState(true);
  const handleChange4 = () => {
    setLoad4(load4 ? false : true);
  };

  const [load5, setLoad5] = useState(true);
  const handleChange5 = () => {
    setLoad5((prevState) => !prevState);
    // setLoad5(!load5);
  };

  return (
    <div>
      {/* ----------> condition <---------- */}
      <h2>Footer Section 4:</h2>
      {load1 ? <span>loaded</span> : <span>not load</span>}
      <br />
      <span>{load2 ? "loaded" : "not load"}</span>
      <br />

      <button onClick={handleChange3}>change</button>
      <span>{load3 ? "loaded" : "not load"}</span>
      <br />

      <button onClick={handleChange4}>change</button>
      <span>{load4 ? "loaded" : "not load"}</span>
      <br />

      <button onClick={handleChange5}>change</button>
      <span>{load5 ? "loaded" : "not load"}</span>
      <hr className="hr1" />
    </div>
  );
};

export default Footer4;
