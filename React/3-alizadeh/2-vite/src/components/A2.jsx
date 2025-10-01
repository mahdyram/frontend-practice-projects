import { useState, useRef } from "react";

export default function A2() {
  // 📍 Controlled
  const [nameControlled, setNameControlled] = useState("Controlled");

  // 📍 Uncontrolled
  const nameUncontrolledRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    Controlled Name: ${nameControlled}
    Uncontrolled Name: ${nameUncontrolledRef.current.value}
    `);
    setNameControlled("");
    nameUncontrolledRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Input</h2>
      <input
        type="text"
        value={nameControlled}
        onChange={(e) => setNameControlled(e.target.value)}
        placeholder="Controlled name"
      />
      <p>
        🔹 Value stored in React state:{" "}
        <span style={{ color: "green" }}>{nameControlled}</span>
      </p>
      <br />

      <h2>Uncontrolled Input</h2>
      <input
        type="text"
        defaultValue="Uncontrolled"
        ref={nameUncontrolledRef}
        placeholder="Uncontrolled name"
      />
      <p>🔹 Value is taken directly from the DOM</p>
      <br />

      <button type="submit">Submit</button>
      <hr className="hr1" />
    </form>
  );
}
