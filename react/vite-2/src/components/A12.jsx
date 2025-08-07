import { useEffect } from "react";

export default function A12() {
  useEffect(() => {
    const clickHandler = () => console.log("clicked window");
    window.addEventListener("click", clickHandler);
  }, []);

  return (
    <div>
      <h2>without unmount - A12</h2>
      <hr className="hr1" />
    </div>
  );
}
