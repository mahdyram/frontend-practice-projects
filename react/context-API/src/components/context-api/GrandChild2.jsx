import { useContext } from "react";
import { NewContext } from "./NewContext";

export default function GrandChild2() {
  let data = useContext(NewContext);

  return (
    <div>
      <h4>GrandChild-2</h4>
      <h5 style={{ color: "blue" }}>your browser is {data.browser2}</h5>
      <h5 style={{ color: data.isLogin2 ? "green" : "red" }}>
        {data.isLogin2 ? "welcome to site" : "please login"}
      </h5>
    </div>
  );
}
