import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function Footer() {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <h2>Footer</h2>
      <ul>
        {products.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
