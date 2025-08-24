import { useMemo, useState } from "react";
import Person from "./Person";

export default function PersonForm() {
  const [count, setCount] = useState(0);
  const [phone, setPhone] = useState("");

  //! dar in halat ham barresi shavad
  // const person = { fName: "ali", lName: "ram", phone };

  const person = useMemo(
    () => ({ fName: "ali", lName: "ram", phone }),
    [phone]
  );

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr className="hr2" />

      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Person person={person} />
    </div>
  );
}
