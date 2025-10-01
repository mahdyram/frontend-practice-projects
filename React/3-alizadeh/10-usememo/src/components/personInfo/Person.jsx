import { memo } from "react";

function Person({ person }) {
  console.log("person rendered");

  return (
    <h3>
      {person.fName} {person.lName} - {person.phone}
    </h3>
  );
}

export default memo(Person);
