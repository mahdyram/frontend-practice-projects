import { useEffect } from "react";

export default function A13() {
  useEffect(() => {
    const clickHandler = () => console.log("clicked window");
    window.addEventListener("click", clickHandler);

    // Clean-up function
    return () => {
      window.removeEventListener("click", clickHandler);
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <h2>with unmount - A13</h2>
      <hr className="hr1" />
    </div>
  );
}
