function Footer1({ name }) {
  const handleDonate = () => {
    alert("thank for donating us");
  };

  return (
    <div>
      <h2>Footer Section 1:</h2>
      <a href="">myEmail-</a>
      <a href="">myEmail</a>
      <p>thanks {name} </p>

      {/* ----------> events <---------- */}
      <button onClick={handleDonate}>donate us</button>
      <hr className="hr1" />
    </div>
  );
}

export default Footer1;
