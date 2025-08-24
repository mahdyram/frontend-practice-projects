import { createContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

export const ShoppingCartContext = createContext();

createRoot(document.getElementById("root")).render(
  <ShoppingCartContext.Provider value={10}>
    <App />
  </ShoppingCartContext.Provider>
);
