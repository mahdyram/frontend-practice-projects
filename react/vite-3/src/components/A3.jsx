import { useState } from "react";

export default function A3() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 5) {
      alert("Username must be at least 5 characters long");
    } else {
      alert(` UserName: ${username}`);
      setUsername("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter username</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => {
          if (e.target.value.length <= 10) {
            setUsername(e.target.value);
            if (e.target.value.length < 5) {
              setError(true);
            } else {
              setError(false);
            }
          }
        }}
        style={{ color: username.length < 5 ? "red" : "green" }}
      />

      {error && <p style={{ color: "red" }}>at least 5 characters</p>}
      <p>UserName: {username}</p>

      <button type="submit" disabled={username.length < 3}>
        Submit
      </button>

      <hr className="hr1" />
    </form>
  );
}
