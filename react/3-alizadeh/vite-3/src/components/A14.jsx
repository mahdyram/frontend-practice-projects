import { useEffect, useState } from "react";

export default function A14() {
  const [value, setValue] = useState("");

  //? raftare harkodam az useEffect haye comment shode jodagane barresi shavad
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
      value.trim() && console.log(`search for: ${value}`);
    }, 2000);

    return () => {
      clearTimeout(searchTimeout);
    };
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <hr className="hr1" />
    </div>
  );
}
