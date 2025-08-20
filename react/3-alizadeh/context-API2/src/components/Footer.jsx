import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";

export default function Footer() {
  const products = useContext(ProductsContext);

  return (
    <div>
      <h2>Footer</h2>
      <h3>{products}</h3>
    </div>
  );
}
