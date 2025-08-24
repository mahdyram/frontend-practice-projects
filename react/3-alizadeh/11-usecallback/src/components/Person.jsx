import { memo } from "react";

function Person({ person, resetPhone }) {
  console.log("person rendered");

  return (
    <p>
      {person.fName} {person.lName} -
      <span className="phone" onClick={resetPhone}>
        {person.phone}
      </span>
    </p>
  );
}

export default memo(Person);
