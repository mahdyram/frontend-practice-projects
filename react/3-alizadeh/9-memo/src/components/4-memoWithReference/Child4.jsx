import { memo } from "react";

function Child4({ text }) {
  console.log("Child-4 rendered");

  return <h3>{text.name}</h3>;
}

export default memo(Child4);
