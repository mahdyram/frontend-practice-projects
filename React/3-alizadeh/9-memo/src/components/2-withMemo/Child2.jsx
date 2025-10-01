import { memo } from "react";

function Child2({ text }) {
  console.log("Child-2 rendered");

  return <h3>{text}</h3>;
}

export default memo(Child2);
