import { useEffect, useRef } from "react";

export default function A15() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h3>Focus Input</h3>
      <input ref={inputRef} type="text" placeholder="username" />
      <hr className="hr1" />
    </div>
  );
}
