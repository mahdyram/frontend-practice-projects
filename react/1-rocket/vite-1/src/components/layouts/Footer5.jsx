import { useState } from "react";

const Footer5 = () => {
  const [auth, setAuth] = useState(false);
  const handleLoge = () => {
    setAuth(!auth);
  };

  return (
    <div>
      <h2>Footer Section 5:</h2>
      <h4>{auth ? "You are not logged" : "You are logged in"}</h4>
      <p>bela1</p>
      <p>bela2</p>
      <p>bela3</p>
      <button onClick={handleLoge}>{auth ? "loge in" : "loge out"}</button>
      <hr className="hr1" />
    </div>
  );
};

export default Footer5;
