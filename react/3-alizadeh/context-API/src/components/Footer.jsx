import { useContext } from "react";
import { ShoppingCartContext } from "../main";

export default function Footer() {
  const value = useContext(ShoppingCartContext);

  return (
    <div>
      <h2>Footer</h2>
      <h3>{value}</h3>
    </div>
  );
}
