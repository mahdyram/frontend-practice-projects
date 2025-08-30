import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTask, removeTask } from "../redux/taskSlice";

export default function Task() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch(addTask(inputValue));
      setInputValue("");
    }
  };

  return (
    <div className="tasks">
      <h2>manage tasks</h2>

      <input
        type="text"
        placeholder="add task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>add task</button>
      <br />

      <ul>
        {tasks.map(({ name, id }) => (
          <li key={id}>
            <span>{name}</span>
            <button onClick={() => dispatch(removeTask(id))}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
