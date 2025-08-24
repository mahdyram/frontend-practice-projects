import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function Header() {
  const count = useContext(ProductsContext);

  return (
    <div>
      <h1>Header</h1>
      <h2>Shopping Cart: {count}</h2>
      <hr className="hr1" />
    </div>
  );
}
