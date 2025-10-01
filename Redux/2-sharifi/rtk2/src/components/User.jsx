import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { useState } from "react";

export default function User() {
  // const state = useSelector((state) => state);
  // console.log(state);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch(addUser(inputValue));
      setInputValue("");
    }
  };

  return (
    <div className="users">
      <h2>manage users</h2>

      <input
        type="text"
        placeholder="add user"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>add user</button>
      <br />

      <ul>
        {users.map(({ name, id }) => (
          <li key={id}>
            <span>{name}</span>
            <button onClick={() => dispatch(removeUser(id))}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
