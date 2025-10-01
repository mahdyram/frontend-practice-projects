import { useRef, useState } from "react";

export default function A8() {
  const inputRef = useRef(); // refrence to input (be jaye value va onChange dar input)
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() === "") return;
    setTaskList((prev) => [...prev, inputRef.current.value]);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h2>Tasks List 3 (Form + useRef)</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
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
