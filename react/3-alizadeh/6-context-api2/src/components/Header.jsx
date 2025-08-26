import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function Header() {
  const count = useContext(ProductsContext);

  return (
    <div>
      <h2>Header</h2>
      <h3>{count}</h3>
      <hr className="hr1" />
    </div>
  );
}
