import { useState } from "react";

export default function useCounter() {
  let [count, setCount] = useState(0);
  let increase = () => setCount((prev) => prev + 1);
  let decrease = () => setCount((prev) => prev - 1);

  return { count, increase, decrease };
}
