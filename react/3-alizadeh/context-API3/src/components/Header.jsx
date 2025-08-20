import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function Header() {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <h1>Header</h1>
      <h2>{products.length} </h2>
      <hr className="hr1" />
    </div>
  );
}
