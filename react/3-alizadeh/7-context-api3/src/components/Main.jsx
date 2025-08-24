import { useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";

export default function Main() {
  const { setProducts } = useContext(ProductsContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue.trim() && setProducts((prev) => [...prev, { name: inputValue }]);
    setInputValue("");
  };

  return (
    <div>
      <h2>Main</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="new product"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <hr className="hr1" />
    </div>
  );
}
