import { memo } from "react";

function Child5({ text }) {
  console.log("Child-5 rendered");

  return <h3>{text.name}</h3>;
}

export default memo(Child5);
