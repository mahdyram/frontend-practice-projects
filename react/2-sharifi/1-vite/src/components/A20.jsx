import { useState } from "react";

export default function A20() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("The form has been submitted: ", formData);
    setFormData({ firstName: "", lastName: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <br />
      <button type="submit">send</button>
    </form>
  );
}
