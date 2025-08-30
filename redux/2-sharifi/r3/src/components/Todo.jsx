import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/actions";
import { useState } from "react";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="add todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {todoList.map(({ todoName, id }) => (
          <li key={id}>
            <span>{todoName}</span>
            <button onClick={() => dispatch(removeTodo(id))}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
