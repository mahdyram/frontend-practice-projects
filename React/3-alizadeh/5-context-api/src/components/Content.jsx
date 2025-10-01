import { useContext, useState } from "react";
import { ShoppingCartContext } from "../main";

export default function Content() {
  const carts = useContext(ShoppingCartContext);
  const [count, setCount] = useState(carts);

  return (
    <div>
      <h2>Content</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <hr className="hr1" />
    </div>
  );
}
