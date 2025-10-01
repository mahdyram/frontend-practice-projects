import { useState } from "react";
import { ProductsContext } from "./ProductsContext";

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([
    { name: "Shampoo" },
    { name: "Joorab" },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
