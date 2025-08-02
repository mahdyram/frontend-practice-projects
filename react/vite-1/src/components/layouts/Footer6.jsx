import { useState } from "react";

const Footer6 = () => {
  const [auth, setAuth] = useState(false);
  const handleLoge = () => {
    setAuth((prev) => !prev);
  };

  if (auth) {
    return (
      <div>
        <h2>Footer Section 6:</h2>
        <h4>You are logged in</h4>
        <p>bela1</p>
        <p>bela2</p>
        <p>bela3</p>
        <button onClick={handleLoge}>loge out</button>
        <hr className="hr1" />
      </div>
    );
  }

  return (
    <div>
      <h2>Footer Section 6:</h2>
      <h4>You are not logged</h4>
      <p>bela4</p>
      <p>bela5</p>
      <p>bela6</p>
      <button onClick={handleLoge}>loge in</button>
      <hr className="hr1" />
    </div>
  );
};

export default Footer6;
