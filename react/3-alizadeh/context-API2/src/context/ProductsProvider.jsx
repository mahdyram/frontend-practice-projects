import { ProductsContext } from "./ProductsContext";

export default function ProductsProvider({ children }) {
  return (
    <ProductsContext.Provider value={10000}>
      {children}
    </ProductsContext.Provider>
  );
}
