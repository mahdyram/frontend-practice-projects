import { useState } from "react";

export default function A6() {
  const [showForm, setShowForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ name: "", pass: "" });

  let componentToRender;

  if (!showForm) {
    componentToRender = <LoginButtonScreen setShowForm={setShowForm} />;
  } else if (isLoggedIn) {
    componentToRender = (
      <WelcomeScreen
        formData={formData}
        setFormData={setFormData}
        setShowForm={setShowForm}
        setIsLoggedIn={setIsLoggedIn}
      />
    );
  } else {
    componentToRender = (
      <LoginForm
        formData={formData}
        setFormData={setFormData}
        setIsLoggedIn={setIsLoggedIn}
      />
    );
  }

  return <div>{componentToRender}</div>;
}

// ================== LoginButtonScreen ==================

function LoginButtonScreen({ setShowForm }) {
  return (
    <>
      <h3>Please log in</h3>
      <button onClick={() => setShowForm(true)}>LogIn</button>
      <hr className="hr1" />
    </>
  );
}

// ================== LoginForm ==================

function LoginForm({ formData, setFormData, setIsLoggedIn }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Username"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="password"
        name="pass"
        placeholder="Password"
        value={formData.pass}
        onChange={handleChange}
      />
      <button
        type="submit"
        disabled={!formData.name.trim() || !formData.pass.trim()}
      >
        submit
      </button>
    </form>
  );
}

// ================== WelcomeScreen ==================

function WelcomeScreen({ formData, setFormData, setShowForm, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowForm(false);
    setFormData({ name: "", pass: "" });
  };

  return (
    <>
      <h3>Welcome {formData.name}</h3>
      <button onClick={handleLogout}>LogOut</button>
    </>
  );
}
