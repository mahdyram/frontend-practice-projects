import { createContext } from "react";

export let NewContext = createContext();

export function AppDataProvider({ children }) {
  let data = { isLogin2: false, browser2: "Chrome" };

  return <NewContext.Provider value={data}>{children}</NewContext.Provider>;
}
