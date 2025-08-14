import { useState } from "react";

export default function A4() {
  const [formValues, setFormValues] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      ` UserName: ${formValues.username} | PassWord: ${formValues.password}`
    );
    setFormValues({ username: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter user and pass</h2>

      <input
        type="text"
        value={formValues.username}
        onChange={(e) =>
          setFormValues((prev) => ({ ...prev, username: e.target.value }))
        }
      />

      <input
        type="password"
        value={formValues.password}
        onChange={(e) =>
          setFormValues((prev) => ({ ...prev, password: e.target.value }))
        }
      />

      <p>
        UserName: {formValues.username} | PassWord: {formValues.password}
      </p>

      <button type="submit">Submit</button>
      <hr className="hr1" />
    </form>
  );
}
