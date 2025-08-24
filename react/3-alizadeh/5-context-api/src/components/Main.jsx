import { useContext, useState } from "react";
import { ShoppingCartContext } from "../main";

export default function Main() {
  const carts = useContext(ShoppingCartContext);
  const [count, setCount] = useState(carts);

  return (
    <div>
      <h2>Main</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <hr className="hr1" />
    </div>
  );
}
