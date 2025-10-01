import { useState } from "react";

export default function A7() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTaskList((prev) => [...prev, task]);
    setTask("");
  };

  return (
    <div>
      <h2>Tasks List 2 (with Form)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
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
