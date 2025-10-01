import { useDispatch, useSelector } from "react-redux";
import { addChild, removeChild } from "../redux/userSlice";
import { useState } from "react";

export default function UserChildren() {
  const children = useSelector((state) => state.user.children);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addChild(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <h2>my children</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add child"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <br />

      <ul>
        {children.map((child) => (
          <li key={child} onClick={() => dispatch(removeChild(child))}>
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
}
