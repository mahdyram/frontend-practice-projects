import { useContext } from "react";
import { ShoppingCartContext } from "../main";

export default function Header() {
  const cartsCount = useContext(ShoppingCartContext);

  return (
    <div>
      <h2>Header</h2>
      <h3>{cartsCount}</h3>
      <hr className="hr1" />
    </div>
  );
}
