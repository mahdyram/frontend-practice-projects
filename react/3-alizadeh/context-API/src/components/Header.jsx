import { useContext } from "react";
import { ShoppingCartContext } from "../main";

export default function Header() {
  const cartsCount = useContext(ShoppingCartContext);

  return (
    <div>
      <h1>Header</h1>
      <h2>Shopping Cart: {cartsCount}</h2>
      <hr className="hr1" />
    </div>
  );
}
