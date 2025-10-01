import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function Header() {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <h2>Header</h2>
      <h3>{products.length} </h3>
      <hr className="hr1" />
    </div>
  );
}
