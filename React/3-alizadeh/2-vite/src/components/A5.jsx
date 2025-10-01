import { useState } from "react";

export default function A5() {
  const [formValues, setFormValues] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      ` UserName: ${formValues.username} | PassWord: ${formValues.password}`
    );
    setFormValues({ username: "", password: "" });
  };

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter user and pass</h2>

      <input
        type="text"
        name="username"
        value={formValues.username}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
      />

      <p>
        UserName: {formValues.username} | PassWord: {formValues.password}
      </p>

      <button type="submit">Submit</button>
      <hr className="hr1" />
    </form>
  );
}
