import { useState } from "react";

function Footer({ fullName }) {
  const handleDonate = () => {
    alert("thank for donating us");
  };

  return (
    <div>
      <h2>Footer Section 1:</h2>
      <a href="">myEmail</a>
      <a href="">myEmail</a>
      <p>thanks {fullName} </p>

      {/* events: */}
      <button onClick={handleDonate}>donate us</button>
      <hr />
    </div>
  );
}

export default Footer;
