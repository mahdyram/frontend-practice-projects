import { memo } from "react";

function Child3({ text }) {
  console.log("Child-3 rendered");

  return <h3>{text}</h3>;
}

export default memo(Child3);
