import { useEffect, useState } from "react";

export default function A14() {
  const [value, setValue] = useState("");
  const [print, setPrint] = useState("");

  //! raftare harkodam az useEffect ha jodagane barresi shavad
  // useEffect(() => {
  //   console.log(`search for: ${value}`);
  // }, [value]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(`search for: ${value}`);
  //   }, 2000);
  // }, [value]);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      if (value.trim()) {
        console.log(`search for: ${value}`);
        setPrint(value);
      }
    }, 1000);

    return () => {
      clearTimeout(searchTimeout);
    };
  }, [value]);

  return (
    <div>
      <h3>Debounce</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p>
        search for? <strong>{print}</strong>
      </p>
      <hr className="hr1" />
    </div>
  );
}
