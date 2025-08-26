import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function Content() {
  const value = useContext(ProductsContext);
  const [count, setCount] = useState(value);

  return (
    <div>
      <h2>Content</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <hr className="hr1" />
    </div>
  );
}
