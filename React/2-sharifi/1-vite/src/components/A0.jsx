import { useState } from "react";

export default function A0() {
  const [info, setInfo] = useState({
    firstName: "ali",
    lastName: "ram",
    age: 23,
  });

  function handleAgeChange(e) {
    // setInfo({ age: e.target.value });  =>  wrong-code
    setInfo((prev) => ({ ...prev, age: e.target.value }));
  }

  return (
    <div>
      <p className="content-box" style={{ maxWidth: 300 }}>
        name: {info.firstName} <br />
        family: {info.lastName} <br />
        age: {info.age}
      </p>
      <input type="number" onChange={handleAgeChange} />
      <hr className="hr1" />
    </div>
  );
}
