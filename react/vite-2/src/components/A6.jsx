import { useState } from "react";

export default function A6() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleClick = () => {
    if (task.trim() === "") return;
    setTaskList((prev) => [...prev, task]);
    setTask("");
  };

  return (
    <div>
      <h2>Tasks List 1 (without Form)</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <br />

      <ul>
        {taskList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr className="hr1" />
    </div>
  );
}
